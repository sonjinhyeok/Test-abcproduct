module.exports = {
                                       // モード値を production に設定すると最適化された状態で、
  mode: "production",                  // development に設定するとソースマップ有効でJSファイルが出力される
  entry: "./src/index.tsx",            // メインとなるファイル（エントリーポイント）

  output: {                            // ファイルの出力設定
    path: `${__dirname}/dist`,         //  出力ファイルのディレクトリ名
    filename: "main.ts"                // 出力ファイル名
  },

  module: {                            // ファイルの出力設定
    rules: [
      {
        test: /\.(tsx | ts)$/,         // 拡張子 tsx/ts の場合
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
          { 
            test: /\.(ya?ml)$/,       // yamlファイルに対する処理
            loader: "js-yaml-loader"
          },
        ],
      },
    ],
  },
  
  // import 文で .ts ファイルを解決する
  resolve: {
    extensions: [".js", ".ts"],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};
