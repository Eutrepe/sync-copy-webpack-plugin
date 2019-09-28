
## sync-copy-webpack-plugin

Modified version of `copy-webpack-plugin v5.0.4` where I add `sync` option for sync patterns resolve (that's all). 

## Usage

``` javascript
module.exports = {
  plugins: [new SyncCopyPlugin([...patterns], { sync: true })],
};

```


Orginal plugin: https://github.com/webpack-contrib/copy-webpack-plugin