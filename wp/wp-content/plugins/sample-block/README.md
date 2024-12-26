# サンプルブロック作成について

おためしでFAQ用ブロックを作成。  
表ではアコーディオンで出力するように設定。  
アコーディオンはshadcn/uiを用いて出力。


```
bunx @wordpress/create-block sample-block
```

# @wordpress/env と@wordpress/create-block を実行したあとの設定メモ

- JSをTS仕様に変える。TSは最初から入っているのでインストールは不要。
  - 拡張子変更
  - 型エラーの解消
    - wordpress用型パッケージのインストール
    - index.tsの省略パラメータの記述
    - 型定義の追加
  - tsconfig.jsonの追加
- shadcn/ui関連のパッケージ追加
  - tailwind
  - PostCSS + 拡張機能
- wordpressが使用しているwebpack.config.jsの設定を継承したうえでエイリアスの設定を追記
- その他整形用パッケージなどの導入
