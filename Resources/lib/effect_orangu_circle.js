exports = {
    orangu_circle: Ti.UI.createImageView({
        width: 200,
        image:'../images/orangu_' + win.combo + '.png',
        opacity:0.7,
        visible: false,
        flash: function() {
            this.show();
            this.animate({
                transform: Ti.UI.create2DMatrix({scale: 1.6}),
                zIndex: 1,
                duration: 1000,
            });
        },
        vanish: function() {
            this.animate({
                transform: Ti.UI.create2DMatrix({scale: 0.01}),
                zIndex: 1,
                duration: 500,
            });
        },
    })
};