Combo Change! Ooo Driver
====

What's this?
--------

平成ライダーシリーズが好きすぎてつくってしまった、Titanium Mobile製の変身ベルトiPhoneアプリです。  
コアメダルを選択することで、任意のコンボへ変身することができます。  
こんな感じでアクションします。 [YouTube - Combo Change! Kamen Rider Ooo (zoom in)](http://www.youtube.com/watch?v=T_W2Fq0qTfc)  
オースキャナをスワイプするアクションを追加しました。[YouTube - Combo Change! Kamen Rider Ooo Ver2](http://www.youtube.com/watch?v=TlCTOWZ6FYQ)

How To Use?
--------

- コードをダウンロードし、Titanium DeveloperでLaunchしてください。
  - 参考：[Titanium Mobileで作る！ iPhone／Androidアプリ：第1回　まずはTitaniumを体験してみよう｜gihyo.jp … 技術評論社](http://gihyo.jp/dev/serial/01/titanium/0001)


工夫したところ
--------


- 実装について
  - ウィンドウ毎にjsファイルを分割
  - 複数のアニメーションをオブジェクトメソッドとして実装
- Titanium Mobile API
  - Ti.UI.createImageView, Ti.UI.createTableView, Ti.UI.createTableViewRowで、コアメダルテーブル表示
  - Ti.UI.createAnimationで、オースキャナ、ドライバーなどの画像アニメーション
  - Ti.Media.createSoundで、タ・ト・バ♪などのコンボチェンジサウンド
  - Ti.UI.createWebViewで、公式webのライダー詳細を表示
  - Ti.UI.createScrollViewで、公式webの表示位置を調整
  - Ti.UI.createButtonBarで、webページの戻る、進む、リロードボタン
- アニメ実行タイミング
  - 音楽に合わせてアニメーションするよう、setTimeoutを利用して実行タイミングを調整


改善したいところ
--------


- 例外処理やエラーハンドリングが実装されていない
- テストコードが実装されていない
- コンボチェンジ画面からの戻る制御が不安定
- アクションの実行タイミングがsetTimeoutに依存しすぎ
- オースキャナアクション時の処理が重い
- Resources/windows/combo_change.js に機能を盛りすぎ。分割できる機能をlibへ切り出したい。

参考にさせていただいたサイト・書籍
--------


- [連載：Titanium Mobileで作る！ iPhone／Androidアプリ｜gihyo.jp … 技術評論社](http://gihyo.jp/dev/serial/01/titanium)
  - ステップバイステップでTitanium開発を学ぶことができます。githubにコードが公開されていてとても助かりました。
- [WEB+DB PRESS Vol.61｜gihyo.jp … 技術評論社](http://gihyo.jp/magazine/wdpress/archive/2011/vol61)
  - 「JavaScriptでiPhone＆Android本格アプリ開発 実践！Titanium」
  - mogsnapを開発されたマウントポジションさんの記事。こちらもgithubにコードが公開されていてすばらしい。
- [Titanium Mobileを二ヶ月くらいさわってみた感想。 | ひげろぐ](http://higelog.brassworks.jp/?p=1342)
- [Titanium mobile で開発しだしたら役に立つ情報のまとめ » astronaughts.net](http://astronaughts.net/?p=336)


リファレンス
--------

- [titanium-mobile-doc-ja - Appcelerator Titanium Mobileに関するドキュメントを日本語でまとめていくプロジェクト - Google Project Hosting](http://code.google.com/p/titanium-mobile-doc-ja/)
  - 困ったとき日本語で検索するとだいたいヒットします。すばらしい。
- [Titanium Mobile 1.6.0 API Documents](http://tidocs.com/mobile/1.6.0/)
  - 公式よりずっと使いやすいです。すばらしい。
- [Appcelerator Developer Center - Community Questions & Answers](http://developer.appcelerator.com/questions/created)
  - 公式のQAコミュニティ。現実的な実装方法が確認できます。


進め方や感想
--------

最初に公式API（英語）を読むとちんぷんかんぷんなので、わかりやすいgihyoさんの書籍、サイトの連載から入りました。  
gihyoさんの記事は、githubでコードが公開されているのでとてもわかりやすくて素晴らしいです。  

少し慣れてくると、KitchenSinkのコードを見ながら検索、ひげろぐさん、astronaughtsさんなどのサイトで方針を確認、titanium-mobile-doc-jaで実装方法を確認。  
のような流れで実装を進めました。  

iPhoneアプリ開発未経験から、2〜3週間ほどで開発〜iPhone実機テストまでできました。このサクサク感はなかなかすごいです。  
javascriptで実装しているので、web開発のノウハウが流用できるところも素晴らしい。  
Titanium Mobileがとても好きになりました。


その他
--------

版権的に完全にアレなので、もちろんApp Storeへの申請はできません。  
念のため画像をモザイク処理していますが、怒られたらリポジトリ削除するかもしれません。  
