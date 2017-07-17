// Same as before save tree changes:
   // Style and css loaders added
   // Changed output from build/ to dist/ -- more standard naming convention
   // Changed devServer port from 3000 to 3001

module.exports = {
   entry: "./src/index.js",
   output: {
      path: __dirname + "/dist/",
      filename: "bundle.js",
      publicPath: "/"
   },

   module: {
      rules: [
         {
            test: /\.jsx?$/,
            loader: 'babel-loader'
         },
         {
            test: /\.css$/,
            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader'
               }
            ]
         }
      ]
   },
   devServer: {
      contentBase: __dirname + '/dist',
      port: 3001
   }

}