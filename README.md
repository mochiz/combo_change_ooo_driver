Combo Change! Ooo Driver
====

What's this?
--------
Titanium Mobile製の変身ベルトiOSアプリです。  
コアメダルを選択してコンボチェンジできます。  
こんな感じ  
[YouTube - Combo Change! Kamen Rider Ooo Ver4](http://www.youtube.com/watch?v=1WStpL5yjwo)

操作方法
--------
- [YouTube - Combo Change! Kamen Rider Ooo Ver4](http://www.youtube.com/watch?v=1WStpL5yjwo)
- コアメダル選択画面からお好きなコンボをクリックしてください。
- 表示されるドライバーをクリックすると、オースキャナーが現れます。
- オースキャナーをクリックしたまま、コアメダルをなぞるようにスキャンしてください。
- 串田アキラの重厚な変身ソングが流れれば、気分はもう仮面ライダーオーズ。
- ドライバー画面を開くと、変身を完了しない限りコアメダル選択画面へ戻ることはできません。

工夫したところ
--------
- coffeescriptでできています
  - guard-coffeescriptでjsファイルへコンパイルしています

改善したいところ
--------
- 例外処理やエラーハンドリングが実装されていない
- テストコードが実装されていない
- コンボチェンジ画面からの戻る制御が不安定
- アクションの実行タイミングがsetTimeoutに依存しすぎ
- オースキャナアクション時の処理が重い
- Resources/windows/combo_change.js に機能を盛りすぎ。分割できる機能をlibへ切り出したい。

参考サイト・書籍
--------
[連載：Titanium Mobileで作る！ iPhone／Androidアプリ｜gihyo.jp … 技術評論社](http://gihyo.jp/dev/serial/01/titanium)  
[WEB+DB PRESS Vol.61｜gihyo.jp … 技術評論社](http://gihyo.jp/magazine/wdpress/archive/2011/vol61)  
[Titanium Mobileを二ヶ月くらいさわってみた感想。 | ひげろぐ](http://higelog.brassworks.jp/?p=1342)  
[Titanium mobile で開発しだしたら役に立つ情報のまとめ » astronaughts.net](http://astronaughts.net/?p=336)  
[titanium-mobile-doc-ja - Appcelerator Titanium Mobileに関するドキュメントを日本語でまとめていくプロジェクト - Google Project Hosting](http://code.google.com/p/titanium-mobile-doc-ja/)  
[Titanium Mobile 1.6.0 API Documents](http://tidocs.com/mobile/1.6.0/)  
[Appcelerator Developer Center - Community Questions & Answers](http://developer.appcelerator.com/questions/created)  
