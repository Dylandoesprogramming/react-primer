module.exports = {
   // This property sets the entry point
   entry: "./src/index.js",

   // This property sets the path for the output bundle
   output: {
      path: __dirname + "/build/",
      filename: "bundle.js",
      publicPath: "/"
   },

   // This property configures all the loaders/rules
   // We'll just use the one for babel so that we can transpile ES6 and React
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            loader: 'babel-loader'
         }
      ]
   },

   // This property is only necessary for webpack-dev-server. 
   // Otherwise, you could bundle with weback and then use live-server or http-server
   devServer: {
      contentBase: __dirname + '/build',
      port: 3000
   }

}