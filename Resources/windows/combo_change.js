var win = Titanium.UI.currentWindow;

// createImageView, createAnimation, createSound
var belt = Titanium.UI.createImageView({
    image:'../images/belt.png',
    width: 480,
});
var driver = Titanium.UI.createImageView({
    image:'../images/' + win.combo + '.png',
    width: 480,
});
var cover = Ti.UI.createImageView({
    image:'../images/cover.png',
    width: 480,
});
var anime = Titanium.UI.createAnimation({
    transform: Ti.UI.create2DMatrix({rotate: 28}),
    duration: 200,
});

// オースキャナーオブジェクトの生成
var o_scanner = Ti.UI.createImageView({
    top: -300,
    left: -200,
    width: 200,
    image:'../images/o_scanner.png',
    visible: false,
    slash: function() {
        this.show();
        this.animate(Ti.UI.createAnimation({
            top: 350,
            left: 600,
            duration: 2500,
        }));
    },
});

// 変身音オブジェクトの生成と音声ファイルのプリロード
var sound = Titanium.Media.createSound({
    url:'../sounds/' + win.combo + '.mp3',
    preload:true,
    has_sound_file: function() {
        f = Ti.Filesystem.getFile('sounds/' + win.combo + '.mp3');
        return f.exists();
    },
    file_exists_and_preload: function() {
        if (this.has_sound_file()){
            this.play();
            this.pause();
        }
    },
    file_exists_and_play: function() {
        if (!this.has_sound_file()){
            alert('歌（がないの）は気にするな！')
            return;
        }
        sound.play();
    },
});
sound.file_exists_and_preload();

// ライダー詳細webページ
var webview = Ti.UI.createWebView({
    url: 'http://www.tv-asahi.co.jp/ooo/rider/' + win.combo + '.html',
});
var scrollview = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:1000,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true,
    transform: Ti.UI.create2DMatrix().scale(0),
    visible: false,
    show_rider: function() {
        this.show();
        this.animate({
            transform: Ti.UI.create2DMatrix(),
            duration: 300,
        });
        win.setToolbar([flexSpace, brf_button, flexSpace]);
    },
});
scrollview.add(webview);

// back, reload, forward button_bar
var brf_button = Titanium.UI.createButtonBar({
    labels:['Back', 'Reload', 'Forward'],
    backgroundColor:'black'
});
var flexSpace = Ti.UI.createButton({
    systemButton:Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
brf_button.addEventListener('click',function(ce) {
    if (ce.index == 0) {
        webview.goBack();
    } else if (ce.index == 1) {
        webview.reload();
    } else {
        webview.goForward();
    }
});

// addEventListener
webview.addEventListener('load', function()
{
    Ti.API.debug("url = "+webview.url);
    scrollview.scrollTo(0, 225);
});
cover.addEventListener('click', function()
{
    Ti.API.debug("driver animation start");
    driver.animate(anime);
    cover.animate(anime);
    sound.file_exists_and_play();
});
anime.addEventListener('complete', function()
{
    Ti.API.debug("o_scanner animation start");
    setTimeout(function() { o_scanner.slash() }, 1500);
    setTimeout(function() { core_flash[0][0].flash(),
                            core_flash[0][1].flash(),
                          }, 2300);
    setTimeout(function() { core_flash[1][0].flash(),
                            core_flash[1][1].flash(),
                          }, 2600);
    setTimeout(function() { core_flash[2][0].flash(),
                            core_flash[2][1].flash(),
                          }, 2900);
    setTimeout(function() { core_flash[0][0].vanish();
                            core_flash[1][0].vanish();
                            core_flash[2][0].vanish();
                            core_flash[0][1].vanish();
                            core_flash[1][1].vanish();
                            core_flash[2][1].vanish();
                          }, 4000);
    setTimeout(function() { sparks[0].flash(0) }, 2300);
    setTimeout(function() { sparks[1].flash(1) }, 2300);
    setTimeout(function() { sparks[2].flash(2) }, 2300);
    setTimeout(function() { sparks[3].flash(3) }, 2300);
    setTimeout(function() { sparks[4].flash(4) }, 2600);
    setTimeout(function() { sparks[5].flash(5) }, 2600);
    setTimeout(function() { sparks[6].flash(6) }, 2600);
    setTimeout(function() { sparks[7].flash(7) }, 2600);
    setTimeout(function() { sparks[8].flash(8) }, 2900);
    setTimeout(function() { sparks[9].flash(9) }, 2900);
    setTimeout(function() { sparks[10].flash(10) }, 2900);
    setTimeout(function() { sparks[11].flash(11) }, 2900);


    // 変身音ファイルがない場合、歌は気にするな！
    if (!sound.has_sound_file()) {
        setTimeout(function() { scrollview.show_rider(); }, 7000);
    }
});
sound.addEventListener('complete', function()
{
    Ti.API.info('tatoba complete');
    // scrollview.show_rider();
});

// core_flash!
var flash_positions = [
    {top: 40, left: 90},
    {top: 100, left: 'auto'},
    {top: 155, left: 305},
];
var core_flash = new Array();
var vanish_anime = Ti.UI.createAnimation({opacity:0, duration:1500});
for(var i=0;i<=2;i++) {
    core_flash[i] = ['', ''];
    for (var j=0;j<=1;j++) {
        core_flash[i][j] = Ti.UI.createView({
            height:90,
            width:90,
            borderRadius:45,
            visible: false,
            borderColor:win.color[i],
            top: flash_positions[i].top,
            left: flash_positions[i].left,
            borderWidth:3,
            opacity:0.6,
            flash: function() {
                this.show();
                this.animate({
                    transform: Ti.UI.create2DMatrix({scale: this.scale}),
                    zIndex: 1,
                    duration: 500,
                });
            },
            vanish: function() {
                this.animate(vanish_anime);
            },
        });
    }
    core_flash[i][0].scale = 2;
    core_flash[i][1].scale = 2.2;
}

// spark!
var spark_positions = [
    {top:70, left:110, terminal_top:50, terminal_left:-270},
    {top:120, left:110, terminal_top:110, terminal_left:-20},
    {top:70, left:170, terminal_top:-20, terminal_left:140},
    {top:120, left:170, terminal_top:-20, terminal_left:150},
    {top:120, left:210, terminal_top:100, terminal_left:-20},
    {top:170, left:210, terminal_top:160, terminal_left:-20},
    {top:120, left:270, terminal_top:-20, terminal_left:230},
    {top:170, left:270, terminal_top:-20, terminal_left:250},
    {top:170, left:310, terminal_top:-20, terminal_left:-20},
    {top:220, left:310, terminal_top:-20, terminal_left:-100},
    {top:170, left:370, terminal_top:-220, terminal_left:230},
    {top:220, left:370, terminal_top:-20, terminal_left:250},
];

var sparks = new Array();
for(var i=0;i<12;i++) {
    sparks[i] = Ti.UI.createView({
        height:10,
        width:10,
        borderRadius:5,
        backgroundColor:'#ffd700',
        opacity:0.6,
        top: spark_positions[i].top,
        left: spark_positions[i].left,
        visible: false,
        flash: function(i) {
            this.show();
            this.animate(Ti.UI.createAnimation({
                top: spark_positions[i].terminal_top,
                left: spark_positions[i].terminal_left,
                duration: 1500,
            }));
        },
    });
}

// win.add
win.add(belt);
win.add(sparks);
win.add(driver);
win.add(cover);
win.add(scrollview);
win.add(core_flash);
win.add(o_scanner);
