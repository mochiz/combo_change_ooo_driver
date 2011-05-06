var win = Titanium.UI.currentWindow;

// createImageView, createAnimation, createSound
var belt = Titanium.UI.createImageView({
    image:'../images/belt.png',
    width: 400,
});
var driver = Titanium.UI.createImageView({
    image:'../images/' + win.combo + '.png',
    width: 400,
});
var anime = Titanium.UI.createAnimation({
    transform: Ti.UI.create2DMatrix({rotate: 28}),
    duration: 200,
});
var sound = Titanium.Media.createSound({
    url:'../sounds/' + win.combo + '.mp3',
    file_exists_and_play: function() {
        f = Ti.Filesystem.getFile('sounds/' + win.combo + '.mp3');
        if (!f.exists()) {
            alert('歌（がないの）は気にするな！')
            return;
        }
        sound.play();
    }
});
var webview = Ti.UI.createWebView({
    url: 'http://www.tv-asahi.co.jp/ooo/rider/' + win.combo + '.html',
});
var scrollview = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:1000,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true,
    transform: Ti.UI.create2DMatrix().scale(0),

});
scrollview.add(webview);
scrollview.hide();

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
driver.addEventListener('click', function()
{
    driver.animate(anime);
    sound.file_exists_and_play();
});
sound.addEventListener('complete', function()
{
    Ti.API.info('tatoba complete');
    scrollview.show();
    scrollview.animate({
        transform: Ti.UI.create2DMatrix(),
        duration: 300,
    });
    win.setToolbar([flexSpace, brf_button, flexSpace]);
});

// win.add
win.add(belt);
win.add(driver);
win.add(scrollview);