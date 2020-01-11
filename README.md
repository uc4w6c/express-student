# express-student

## 処理追いかける
express()
->
./lib/express.js
->
createApplicationファンクション
appプロトタイプが定義してある。
中身はhandleメソッドのインターフェースのみ
app.handle(req, res, next);

mixinを利用して、appクラスにEventEmitterとlib/application.jsクラスのメソッドを継承する。
  mixin(app, EventEmitter.prototype, false);
  mixin(app, proto, false);




EventEmitterの参考になりそうな記事
https://www.yoheim.net/blog.php?q=20170103



application.jsの
methods.forEach(function(method){
でnode.jsで利用可能なhttp methodの一覧を取得&処理


apply
call
の使い分けを理解しておきましょう

var resolve = require('path').resolve;
this.set('views', resolve('views'));




## 処理の流れをまとめる
### express()
概要: Expressアプリケーションのインスタンスを生成する。
EventEmitter、application.jsのメソッドを継承する。
ライブラリ mixin
  var mixin = require('merge-descriptors');

Request、Responseメソッドを作成
Object.createを利用している。

app.init()  : application.jsの内容
最後にアプリケーションのデフォルト設定を行う。
ここはやらなくてもいいと思うけど、一旦仮
etag = 参考:http://blog.livedoor.jp/aki_mana/archives/6729330.html

### Routerの設定
    app.get('/', (req, res) => res.send('Hello World!'))
application.jsの以下の箇所でメソッド作成している。
methods.forEach(function(method){

lazyrouterメソッド
Routerインスタンスの生成を行う。
