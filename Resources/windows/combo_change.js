var anime, baseX, belt, brf_button, btnBuyNow, buy_now_view, charging_sound, combo_sound, core_flash, core_slash_sound, cover, driver, driver_module, flash_positions, flexSpace, i, j, o_scanner, orangu_circle, raise_sound, scrollview, tatoba_sound, vanish_anime, webview, win;
win = Titanium.UI.currentWindow;
win.orientationModes = [Titanium.UI.LANDSCAPE_LEFT];
win.title = win.combo;
driver_module = require('lib/driver').driver;
belt = driver_module.belt();
driver = driver_module.driver();
cover = driver_module.cover();
anime = driver_module.anime();
o_scanner = driver_module.o_scanner();
combo_sound = require('lib/combo_sound').combo_sound;
tatoba_sound = combo_sound.tatoba_sound();
raise_sound = combo_sound.raise_sound();
charging_sound = combo_sound.charging_sound();
core_slash_sound = combo_sound.core_slash_sound();
tatoba_sound.file_exists_and_preload();
raise_sound.preload();
charging_sound.preload();
core_slash_sound.preload();
webview = Ti.UI.createWebView({
  url: "http://www.tv-asahi.co.jp/ooo/rider/" + win.combo + ".html"
});
scrollview = Titanium.UI.createScrollView({
  contentWidth: "auto",
  contentHeight: 1000,
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  transform: Ti.UI.create2DMatrix().scale(0),
  visible: false,
  show_rider: function() {
    this.show();
    this.animate({
      transform: Ti.UI.create2DMatrix(),
      duration: 300
    });
    return win.setToolbar([flexSpace, brf_button, flexSpace]);
  }
});
scrollview.add(webview);
buy_now_view = Ti.UI.createWebView({
  url: "http://www.amazon.co.jp/dp/B0041FI7U0",
  visible: false
});
btnBuyNow = Ti.UI.createButton({
  title: "BuyNow!",
  height: "auto",
  width: "auto"
});
btnBuyNow.addEventListener("click", function(e) {
  buy_now_view.show();
  return buy_now_view.animate({
    transform: Ti.UI.create2DMatrix(),
    duration: 300
  });
});
win.rightNavButton = btnBuyNow;
brf_button = Titanium.UI.createButtonBar({
  labels: ["Back", "Reload", "Forward"],
  backgroundColor: "black"
});
flexSpace = Ti.UI.createButton({
  systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
brf_button.addEventListener("click", function(ce) {
  if (ce.index === 0) {
    return webview.goBack();
  } else if (ce.index === 1) {
    return webview.reload();
  } else {
    return webview.goForward();
  }
});
webview.addEventListener("load", function() {
  Ti.API.debug("url = " + webview.url);
  return scrollview.scrollTo(0, 225);
});
cover.addEventListener("click", function() {
  if (!driver.changed) {
    Ti.API.debug("driver animation start");
    driver.changed = true;
    driver.animate(anime);
    cover.animate(anime);
    raise_sound.play();
  }
  if (driver.completed) {
    return win.close();
  }
});
raise_sound.addEventListener("complete", function() {
  return setTimeout((function() {
    return charging_sound.play();
  }), 200);
});
cover.addEventListener("complete", function() {
  return o_scanner.show();
});
baseX = 0;
o_scanner.addEventListener("touchmove", function(e) {
  var newX, newY;
  newX = e.x + o_scanner.animatedCenter.x - o_scanner.width / 2;
  if (baseX > newX) {
    return;
  }
  baseX = newX;
  newY = newX * 0.6;
  o_scanner.animate({
    center: {
      x: newX,
      y: newY
    },
    duration: 50
  });
  if (!core_flash[0][0].flashed) {
    if ((newX > 80 && newX < 140) && (newY > 50 && newY < 160)) {
      core_flash[0][0].flashed = true;
      core_flash[0][0].sound.play();
      core_flash[0][0].flash();
      core_flash[0][1].flash();
    }
  }
  if (!core_flash[1][0].flashed) {
    if ((newX > 200 && newX < 260) && (newY > 100 && newY < 210)) {
      core_flash[1][0].flashed = true;
      core_flash[1][0].sound.play();
      core_flash[1][0].flash();
      core_flash[1][1].flash();
    }
  }
  if (!core_flash[2][0].flashed) {
    if ((newX > 320 && newX < 390) && (newY > 150 && newY < 280)) {
      core_flash[2][0].flashed = true;
      core_flash[2][0].sound.play();
      core_flash[2][0].flash();
      core_flash[2][1].flash();
      setTimeout((function() {
        charging_sound.pause();
        core_flash[0][0].vanish();
        core_flash[1][0].vanish();
        core_flash[2][0].vanish();
        core_flash[0][1].vanish();
        core_flash[1][1].vanish();
        return core_flash[2][1].vanish();
      }), 500);
      orangu_circle.flash();
      if (!tatoba_sound.has_sound_file()) {
        alert("歌（がないの）は気にするな！");
        setTimeout((function() {
          return orangu_circle.vanish();
        }), 1000);
        setTimeout((function() {
          scrollview.show_rider();
          return win.showNavBar();
        }), 2000);
        return;
      }
      return setTimeout((function() {
        return tatoba_sound.file_exists_and_play();
      }), 1500);
    }
  }
});
o_scanner.addEventListener("touchend", function() {
  if (core_flash[2][0].flashed) {
    return o_scanner.hide();
  }
});
anime.addEventListener("complete", function() {
  Ti.API.debug("o_scanner animation start");
  return o_scanner.show();
});
tatoba_sound.addEventListener("complete", function() {
  Ti.API.info("tatoba complete");
  orangu_circle.vanish();
  return driver.completed = true;
});
flash_positions = [
  {
    top: 60,
    left: 85
  }, {
    top: 105,
    left: "auto"
  }, {
    top: 165,
    left: 300
  }
];
core_flash = new Array();
vanish_anime = Ti.UI.createAnimation({
  opacity: 0,
  duration: 1500
});
i = 0;
while (i <= 2) {
  core_flash[i] = ["", ""];
  j = 0;
  while (j <= 1) {
    core_flash[i][j] = Ti.UI.createView({
      height: 90,
      width: 90,
      borderRadius: 45,
      visible: false,
      borderColor: win.color[i],
      top: flash_positions[i].top,
      left: flash_positions[i].left,
      borderWidth: 3,
      opacity: 0.6,
      flash: function() {
        this.show();
        return this.animate({
          transform: Ti.UI.create2DMatrix({
            scale: this.scale
          }),
          zIndex: 1,
          duration: 500
        });
      },
      vanish: function() {
        return this.animate(vanish_anime);
      }
    });
    j++;
  }
  core_flash[i][0].scale = 2;
  core_flash[i][1].scale = 2.2;
  core_flash[i][0].sound = Titanium.Media.createSound({
    url: "../sounds/medal_scan" + i + ".mp3"
  });
  core_flash[i][0].sound.play();
  core_flash[i][0].sound.pause();
  i++;
}
orangu_circle = Ti.UI.createImageView({
  width: 200,
  image: "../images/orangu_" + win.combo + ".png",
  opacity: 0.7,
  visible: false,
  flash: function() {
    this.show();
    return this.animate({
      transform: Ti.UI.create2DMatrix({
        scale: 1.6
      }),
      zIndex: 1,
      duration: 1000
    });
  },
  vanish: function() {
    return this.animate({
      transform: Ti.UI.create2DMatrix({
        scale: 0.01
      }),
      zIndex: 1,
      duration: 500
    });
  }
});
win.add(belt);
win.add(driver);
win.add(cover);
win.add(core_flash);
win.add(o_scanner);
win.add(orangu_circle);