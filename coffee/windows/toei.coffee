webview = Ti.UI.createWebView(url: "http://www.tv-asahi.co.jp/ooo/rider/" + win.combo + ".html")
scrollview = Titanium.UI.createScrollView(
  contentWidth: "auto"
  contentHeight: 1000
  showVerticalScrollIndicator: true
  showHorizontalScrollIndicator: true
  transform: Ti.UI.create2DMatrix().scale(0)
  visible: false
  show_rider: ->
    @show()
    @animate
      transform: Ti.UI.create2DMatrix()
      duration: 300
    win.setToolbar [ flexSpace, brf_button, flexSpace ]
)
scrollview.add webview

buy_now_view = Ti.UI.createWebView(
  url: "http://www.amazon.co.jp/dp/B0041FI7U0"
  visible: false
)
btnBuyNow = Ti.UI.createButton(
  title: "BuyNow!"
  height: "auto"
  width: "auto"
)
btnBuyNow.addEventListener "click", (e) ->
  buy_now_view.show()
  buy_now_view.animate
    transform: Ti.UI.create2DMatrix()
    duration: 300

win.rightNavButton = btnBuyNow
brf_button = Titanium.UI.createButtonBar(
  labels: [ "Back", "Reload", "Forward" ]
  backgroundColor: "black"
)
flexSpace = Ti.UI.createButton(systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE)
brf_button.addEventListener "click", (ce) ->
  if ce.index == 0
    webview.goBack()
  else if ce.index == 1
    webview.reload()
  else
    webview.goForward()

webview.addEventListener "load", ->
  Ti.API.debug "url = " + webview.url
  scrollview.scrollTo 0, 225
