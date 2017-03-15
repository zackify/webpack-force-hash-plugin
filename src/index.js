// ChangedVendorPlugin.js

function ChangedVendorPlugin(options) {
  this.options = options;
}

ChangedVendorPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', (compilation, callback) => {
    Object.keys(compilation.assets).forEach(asset => {
      if (!asset.match(this.options.name)) return;

      let vendor = compilation.assets[asset];
      let hash = compilation.namedChunks[this.options.name].hash;

      delete compilation.assets[asset];
      compilation.assets[`${hash}.${this.options.name}.js`] = vendor;
    });

    callback();
  });
};

module.exports = ChangedVendorPlugin;
