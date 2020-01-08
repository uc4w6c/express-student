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
