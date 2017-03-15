## webpack-force-hash-plugin

If you use an env variable in your webpack output:

```js
output: {
  path: 'public/',
  filename: `app.${process.env.COMMIT_HASH || 'dev'}.[name].js`,
  chunkFilename: `${process.env.COMMIT_HASH || 'dev'}.[id].chunk.js`,
  publicPath: '/',
}
```

Then your vendor bundle is going to have a changed hash even when its not changed. This solves that problem but always using webpack's hash for the file name. Is this something you should be doing? Maybe not. I couldn't think of a way to keep the vendor from changing other than building this little plugin, or getting rid of the commit hash for everythig else.


## Install

```
npm install webpack-force-vendor-hash-plugin
```

## Usage

```js
const ForceHashPlugin = require('webpack-force-hash-plugin');

plugins: [
  new ForceHashPlugin({ name: 'vendor' }), // name of the entry point
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
  }),
],
```

## Why you should not use this

- You should probably just use webpack's hash and not a commit hash
- This doesn't feel right ;)
