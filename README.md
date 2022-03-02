# 環境構築

- https://qiita.com/magiclib/items/700c3e67167b7ec1672c にアクセスする。
  - 基本的には上記の通りに進めていく。
  - 変更点は「開くパスを入力する欄が表示されるので、/usr/src/app を入力して[OK]ボタンをクリックする。」の開くパスの部分を「/usr/local/bookmark-app」とする。

# backend側のサーバー起動方法
```
uvicorn backend.main:app --reload --port=8010
```
上記を`/usr/local/bookmark-app`で実行すると、以下が出力される。
```
...
> INFO:     Uvicorn running on http://127.0.0.1:8010 (Press CTRL+C to quit)
...
```
`http://127.0.0.1:8010`の部分にカーソルを1秒ほど合わせると、`転送ポートを使用してリンクにアクセスする`が出てくるため、クリックする。遷移後のリンクに`/docs`を追記すると、apiを試すことができる。