module.exports = {
    mode: "development",                 // development に設定するとソースマップ有効でJSファイルが出力される
    entry: "./src/index.ts",             // メインとなるファイル（エントリーポイント）
    
    output: {                            // ファイルの出力設定
      path: `${__dirname}/dist`,         //  出力ファイルのディレクトリ名
      filename: "main.ts"                // 出力ファイル名
    },
    module: {                            // ファイルの出力設定
      rules: [
        {
          test: /\.ts$/,                 // 拡張子 .ts の場合
          use: "ts-loader",              // TypeScript をコンパイルする
        },
        {
          test: /\.scss$/,               // scssファイルに対する処理
          use: [
            { 
              loader: "style-loader" 
            },
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
    
    // import 文で .ts ファイルを解決するため
    resolve: {
      extensions: [".js", ".ts"],
    },
  };