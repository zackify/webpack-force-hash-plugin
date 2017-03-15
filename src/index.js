// ChangedVendorPlugin.js

function ChangedVendorPlugin(options) {
  // Configure your plugin with options...
}

ChangedVendorPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', (compilation, callback) => {
    console.log(compilation.assets);

    callback();
  });
};

module.exports = ChangedVendorPlugin;
