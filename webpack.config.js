const path = require("path");

module.exports = {
  mode: 'production',
  entry: [
      "./src/scripts/index.js",
      "./src/styles/styles.scss"
    ],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: "",
              name: 'calculator.min.css'}
          },
          'sass-loader'
        ]
      }
    ]
  }
};
