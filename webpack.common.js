const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // clean old files before new build
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: ['node_modules'],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|eot)$/, // Removed svg because it's handled above
        type: 'asset/resource',
      },
    ],
  },
     resolve: {
    alias: {
      // Tells Webpack that 'config$' is an alias for a specific file path
      config$: path.resolve(__dirname, './configs/app-config.js'),
      // Remaps any import of 'react' to your vendor directory
      react: path.resolve(__dirname, './vendor/react-master'),
    },
    // Allows you to leave off .js and .jsx extensions when importing files
    extensions: ['.js', '.jsx'],
    // Tells Webpack to look for modules in these directories, not just node_modules
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      path.resolve(__dirname, '/shared/vendor/modules'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
