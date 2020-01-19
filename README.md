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

JavaScriptのbindを利用する。
route.dispatch.bind(route)
参考:https://foreignkey.toyao.net/archives/763

prototypeとfunctionって一緒？

array-flatten


## 処理の流れをまとめる
### express()
概要: Expressアプリケーションのインスタンスを生成する。
appインスタンスを作成します。これがrequestを受け付ける窓口になる場所です。

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

Routeのhandleにfunctionを登録

route.jsにもmethods.forEachが存在する。

Routeは1URL/Methodsごとに生成される

### listen
httpサーバの作成

### requestを受けたときの処理
app.handleを実行
->route.handleを実行
->Layer.prototype.handle_request
->最初に設定したfunctionを実行


## Router
Router(index.js) 1->1 Layer N->1 Route(router/route.js)



クラスの主なプロパティ
Route: path, stack, methods
Layer: path, handle(Routeのdispatch), params, opts)
