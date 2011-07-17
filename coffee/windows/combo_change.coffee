win = Titanium.UI.currentWindow
win.orientationModes = [ Titanium.UI.LANDSCAPE_LEFT ]
win.title = win.combo
belt = Titanium.UI.createImageView(
  image: "../images/belt.png"
  width: 480
)
driver = Titanium.UI.createImageView(
  image: "../images/" + win.combo + ".png"
  width: 480
  changed: false
  completed: false
)
cover = Ti.UI.createImageView(
  image: "../images/cover.png"
  width: 480
)
anime = Titanium.UI.createAnimation(
  transform: Ti.UI.create2DMatrix(rotate: 28)
  duration: 200
)
o_scanner = Ti.UI.createImageView(
  top: -80
  left: -70
  height: 200
  width: 200
  image: "../images/o_scanner.png"
  visible: false
  vanish: ->
    @animate Ti.UI.createAnimation(
      top: 350
      left: 600
      duration: 2000
    )
)
tatoba_sound = Titanium.Media.createSound(
  url: "../sounds/" + win.combo + ".mp3"
  preload: true
  has_sound_file: ->
    f = Ti.Filesystem.getFile("sounds/" + win.combo + ".mp3")
    f.exists()
  file_exists_and_preload: ->
    if @has_sound_file()
      @play()
      @pause()
  file_exists_and_play: ->
    return  unless @has_sound_file()
    @play()
)
tatoba_sound.file_exists_and_preload()
raise_sound = Titanium.Media.createSound(
  url: "../sounds/driver_raise.mp3"
  preload: true
  preload: ->
    @play()
    @pause()
)
charging_sound = Titanium.Media.createSound(
  url: "../sounds/charging.mp3"
  preload: true
  looping: true
  preload: ->
    @play()
    @pause()
)
core_slash_sound = Titanium.Media.createSound(
  url: "../sounds/core_slash.mp3"
  preload: true
  preload: ->
    @play()
    @pause()
)
raise_sound.preload()
charging_sound.preload()
core_slash_sound.preload()
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

cover.addEventListener "click", ->
  unless driver.changed
    Ti.API.debug "driver animation start"
    driver.changed = true
    driver.animate anime
    cover.animate anime
    raise_sound.play()
  win.close()  if driver.completed

raise_sound.addEventListener "complete", ->
  setTimeout (->
    charging_sound.play()
  ), 200

cover.addEventListener "complete", ->
  o_scanner.show()

baseX = 0
o_scanner.addEventListener "touchmove", (e) ->
  newX = e.x + o_scanner.animatedCenter.x - o_scanner.width / 2
  return  if baseX > newX
  baseX = newX
  newY = newX * 0.6
  o_scanner.animate
    center:
      x: newX
      y: newY

    duration: 50

  unless core_flash[0][0].flashed
    if (newX > 80 and newX < 140) and (newY > 50 and newY < 160)
      core_flash[0][0].flashed = true
      core_flash[0][0].sound.play()
      core_flash[0][0].flash()
      core_flash[0][1].flash()
  unless core_flash[1][0].flashed
    if (newX > 200 and newX < 260) and (newY > 100 and newY < 210)
      core_flash[1][0].flashed = true
      core_flash[1][0].sound.play()
      core_flash[1][0].flash()
      core_flash[1][1].flash()
  unless core_flash[2][0].flashed
    if (newX > 320 and newX < 390) and (newY > 150 and newY < 280)
      core_flash[2][0].flashed = true
      core_flash[2][0].sound.play()
      core_flash[2][0].flash()
      core_flash[2][1].flash()
      setTimeout (->
        charging_sound.pause()
        core_flash[0][0].vanish()
        core_flash[1][0].vanish()
        core_flash[2][0].vanish()
        core_flash[0][1].vanish()
        core_flash[1][1].vanish()
        core_flash[2][1].vanish()
      ), 500
      orangu_circle.flash()
      unless tatoba_sound.has_sound_file()
        alert "歌（がないの）は気にするな！"
        setTimeout (->
          orangu_circle.vanish()
        ), 1000
        setTimeout (->
          scrollview.show_rider()
          win.showNavBar()
        ), 2000
        return
      setTimeout (->
        tatoba_sound.file_exists_and_play()
      ), 1500

o_scanner.addEventListener "touchend", ->
  o_scanner.hide()  if core_flash[2][0].flashed

anime.addEventListener "complete", ->
  Ti.API.debug "o_scanner animation start"
  o_scanner.show()

tatoba_sound.addEventListener "complete", ->
  Ti.API.info "tatoba complete"
  orangu_circle.vanish()
  driver.completed = true

flash_positions = [
  top: 60
  left: 85
,
  top: 105
  left: "auto"
,
  top: 165
  left: 300
 ]
core_flash = new Array()
vanish_anime = Ti.UI.createAnimation(
  opacity: 0
  duration: 1500
)
i = 0

while i <= 2
  core_flash[i] = [ "", "" ]
  j = 0

  while j <= 1
    core_flash[i][j] = Ti.UI.createView(
      height: 90
      width: 90
      borderRadius: 45
      visible: false
      borderColor: win.color[i]
      top: flash_positions[i].top
      left: flash_positions[i].left
      borderWidth: 3
      opacity: 0.6
      flash: ->
        @show()
        @animate
          transform: Ti.UI.create2DMatrix(scale: @scale)
          zIndex: 1
          duration: 500

      vanish: ->
        @animate vanish_anime
    )
    j++
  core_flash[i][0].scale = 2
  core_flash[i][1].scale = 2.2
  core_flash[i][0].sound = Titanium.Media.createSound(url: "../sounds/medal_scan" + i + ".mp3")
  core_flash[i][0].sound.play()
  core_flash[i][0].sound.pause()
  i++
orangu_circle = Ti.UI.createImageView(
  width: 200
  image: "../images/orangu_" + win.combo + ".png"
  opacity: 0.7
  visible: false
  flash: ->
    @show()
    @animate
      transform: Ti.UI.create2DMatrix(scale: 1.6)
      zIndex: 1
      duration: 1000

  vanish: ->
    @animate
      transform: Ti.UI.create2DMatrix(scale: 0.01)
      zIndex: 1
      duration: 500
)
win.add belt
win.add driver
win.add cover
win.add core_flash
win.add o_scanner
win.add orangu_circle
