var win = Titanium.UI.currentWindow;
win.orientationModes = [Titanium.UI.LANDSCAPE_LEFT];
win.title = win.combo;

// 変身音オブジェクト生成と音声ファイルのプリロード
henshin_sound_components = require("lib/henshin_sound_components");
var tatoba_sound = henshin_sound_components.tatoba_sound;
tatoba_sound.file_exists_and_preload();
var raise_sound = henshin_sound_components.raise_sound;
raise_sound.preload();
var charging_sound = henshin_sound_components.charging_sound;
charging_sound.preload();

// オーズドライバーを構成オブジェクト生成
driver_components = require("lib/driver_components");
var belt = driver_components.belt;
var driver = driver_components.driver;
var cover = driver_components.cover;
var anime = driver_components.anime;
var o_scanner = driver_components.o_scanner;

// コアメダルフラッシュ、オーラングサークルエフェクトオブジェクト生成
var core_flash = require("lib/effect_core_flash").core_flash();
var orangu_circle = require("lib/effect_orangu_circle").orangu_circle;

// ライダー詳細webページオブジェクト生成
rider_web = require("lib/rider_web_page_components");
var webview = rider_web.webview;
var scrollview = rider_web.scrollview;
scrollview.add(webview);
var brf_button = rider_web.brf_button;
var flexSpace = rider_web.flexSpace;

// addEventListener
webview.addEventListener('load', function()
{
    Ti.API.debug("url = "+webview.url);
    scrollview.scrollTo(0, 225);
});
cover.addEventListener('click', function()
{
    if (!driver.changed) {
        Ti.API.debug("driver animation start");
        driver.changed = true;
        driver.animate(anime);
        cover.animate(anime);
        raise_sound.play();
    }
});
raise_sound.addEventListener('complete', function()
{
    setTimeout(function() { charging_sound.play(); }, 200);
});
cover.addEventListener('complete', function()
{
    o_scanner.show();
});

// ひどい実装なのでなんとかしたい
var baseX = 0;
o_scanner.addEventListener('touchmove', function(e)
{
    var newX = e.x + o_scanner.animatedCenter.x - o_scanner.width/2;
    if (baseX > newX) {
        return;
    }
    baseX = newX;
    var newY = newX * 0.6;
    o_scanner.animate({center:{x:newX,y:newY}, duration:50});

    if (!core_flash[0][0].flashed) {
        if ((newX > 80 && newX < 140)
            && (newY > 50 && newY < 160)) {
            core_flash[0][0].flashed = true;
            core_flash[0][0].sound.play();
            core_flash[0][0].flash();
            core_flash[0][1].flash();
        }
    }

    if (!core_flash[1][0].flashed) {
        if ((newX > 200 && newX < 260)
            && (newY > 100 && newY < 210)) {
            core_flash[1][0].flashed = true;
            core_flash[1][0].sound.play();
            core_flash[1][0].flash();
            core_flash[1][1].flash();
        }
    }

    if (!core_flash[2][0].flashed) {
        if ((newX > 320 && newX < 390)
            && (newY > 150 && newY < 280)) {
            core_flash[2][0].flashed = true;
            core_flash[2][0].sound.play();
            core_flash[2][0].flash();
            core_flash[2][1].flash();
            setTimeout(function() { charging_sound.pause();
                                    core_flash[0][0].vanish();
                                    core_flash[1][0].vanish();
                                    core_flash[2][0].vanish();
                                    core_flash[0][1].vanish();
                                    core_flash[1][1].vanish();
                                    core_flash[2][1].vanish();
                                  }, 500);
            orangu_circle.flash();
            if (!tatoba_sound.has_sound_file()) {
                alert('歌（がないの）は気にするな！');
                setTimeout(function() { orangu_circle.vanish() }, 1000);
                setTimeout(function() { scrollview.show_rider();
                                        win.showNavBar();}, 2000);
                return
            }
            setTimeout(function() { tatoba_sound.file_exists_and_play(); }, 1500);
        }
    }
});

o_scanner.addEventListener('touchend', function()
{
    if (core_flash[2][0].flashed) {
        o_scanner.hide();
    }
});

anime.addEventListener('complete', function()
{
    Ti.API.debug("o_scanner animation start");
    o_scanner.show();
});
tatoba_sound.addEventListener('complete', function()
{
    Ti.API.info('tatoba complete');
    win.showNavBar();
    orangu_circle.vanish();
    scrollview.scrollTo(0, 225);
    setTimeout(function() { scrollview.show_rider() }, 300);
});

// win.add
win.add(belt);
win.add(driver);
win.add(cover);
win.add(scrollview);
win.add(core_flash);
win.add(o_scanner);
win.add(orangu_circle);
