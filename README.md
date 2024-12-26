# 概要

`@wordpress/env` と `@wordpress/create-bloc` を実行して簡単なブロックをshadcn/uiで作ったサンプル。


# 環境に必要なパッケージをインストール、起動

```
bun add -D @wordpress/env
```

```
"scripts": {
  "start": "wp-env start",
  "stop": "wp-env stop",
  "clean": "wp-env clean all",
  "destroy": "wp-env destroy"
}
```

```
bun run start
```

また、初期設定は英語なので一般設定から変更すること。

# .wp-env.jsonを作成する

dockerのvolumeで設定するようなことをjson経由で設定できる。  
[参照](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/#wp-envjson)

```
{
  "mappings": {
    "wp-content/plugins": "./wp/wp-content/plugins/",
    "wp-content/themes/test/": "./wp/wp-content/themes/test/"
  }
}
```

# DBのリセット

```
bun run clean
```

# ローカル環境を完全に削除する

```
bun run destroy
```

`@wordpress/create-block` については `wp/wp-content/plugins/sample-block` 以下のREADMEを参照。
