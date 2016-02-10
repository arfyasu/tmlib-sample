// main
tm.main(function() {
  // キャンバスアプリケーションを生成
  var app = tm.display.CanvasApp("#world");
  // リサイズ
  app.resize(640, 960);
  // ウィンドウにフィットさせる
  app.fitWindow();

  var scene = MainScene();
  app.replaceScene(scene);

  // 実行
  app.run();
});


