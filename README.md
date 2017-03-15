## webpack-keep-hashed-vendor-plugin

If you use an env variable in your webpack output:

```js
output: {
  path: 'public/',
  filename: `app.${process.env.COMMIT_HASH || 'dev'}.[name].js`,
  chunkFilename: `${process.env.COMMIT_HASH || 'dev'}.[id].chunk.js`,
  publicPath: '/',
}
```

Then your vendor bundle is going to have a changed hash even when its not changed. This solves that problem but always using webpack's hash for the file name. Is this something you should be doing? Maybe not. We do it to keep our sentry releases the same as our commit hashes. That way it's easier to find the commit an issue was introduced. I couldn't think of a way to keep the vendor from changing other than building this little plugin.


## Install

```
npm install webpack-keep-hashed-vendor-plugin
```

## Usage

```js
const KeepHashedVendorPlugin = require('webpack-keep-hashed-vendor-plugin');

plugins: [
  new KeepHashedVendorPlugin({ name: 'vendor' }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
  }),
],
```
