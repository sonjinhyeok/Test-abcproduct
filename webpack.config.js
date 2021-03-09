module.exports = {
    mode: "development",
  
    entry: "./src/scssTest/main.ts",
  
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
        },
        // scssファイルに対する処理
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                sourceMap: false,
                importLoaders: 2,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: false,
                sassOptions: {
                  includePaths: ["./node_modules"],
                },
              },
            },
          ],
        },
      ],
    },
  
    resolve: {
      extensions: [".js", ".ts"],
    },
  };