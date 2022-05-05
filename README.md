# 環境構築

- https://qiita.com/magiclib/items/700c3e67167b7ec1672c にアクセスする。
  - 基本的には上記の通りに進めていく。
  - 変更点は「開くパスを入力する欄が表示されるので、/usr/src/app を入力して[OK]ボタンをクリックする。」の開くパスの部分を「/usr/local/bookmark-app」とする。

# backend側の操作
- 起動
```
cd backend
docker-compose up -d --build

>>>
Docker Compose is now in the Docker CLI, try `docker compose up`

Creating network "backend_default" with the default driver
Building api
[+] Building 3.3s (10/10) 

...

Creating db ... done
Creating api ... done
```

- logの確認方法
上記を実行してもterminal上ではdockerの立ち上がりの情報しか出力されないため、api側のlogを確認するためには以下を実行する必要がある
```
docker-compose logs
>>>
Attaching to api, db
api    | INFO:     Will watch for changes in these directories: ['/usr/src/backend']
api    | INFO:     Uvicorn running on http://0.0.0.0:8001 (Press CTRL+C to quit)
api    | INFO:     Started reloader process [1] using statreload
api    | INFO:     Started server process [10]
api    | INFO:     Waiting for application startup.
api    | INFO:     Application startup complete.
...
```
正常に立ち上がっていることがわかるため、http://localhost:8001/docs にアクセスするとapiの挙動を確認することができる

- containerを落とす場合
```
docker-compose down
```

- 立ち上げたコンテナの中に入りたい場合(※これは動作確認上でしか使用しない)
```
docker-compose exec api bash 
```