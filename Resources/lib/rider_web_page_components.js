exports = {
    webview: Ti.UI.createWebView({
        url: 'http://www.tv-asahi.co.jp/ooo/rider/' + win.combo + '.html',
    }),
    scrollview: Titanium.UI.createScrollView({
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
    }),
    brf_button: Titanium.UI.createButtonBar({
        labels:['Back', 'Reload', 'Forward'],
        backgroundColor:'black'
    }),
    flexSpace: Ti.UI.createButton({
        systemButton:Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    }),
}
