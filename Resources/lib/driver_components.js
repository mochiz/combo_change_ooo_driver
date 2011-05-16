exports = {
    belt: Titanium.UI.createImageView({
        image:'../images/belt.png',
        width: 480,
    }),
    driver: Titanium.UI.createImageView({
        image:'../images/' + win.combo + '.png',
        width: 480,
        changed: false,
    }),
    cover: Ti.UI.createImageView({
        image:'../images/cover.png',
        width: 480,
    }),
    anime: Titanium.UI.createAnimation({
        transform: Ti.UI.create2DMatrix({rotate: 28}),
        duration: 200,
    }),
    o_scanner: Ti.UI.createImageView({
        top: -80,
        left: -70,
        height: 200,
        width: 200,
        image:'../images/o_scanner.png',
        visible: false,
        vanish: function() {
            this.animate(Ti.UI.createAnimation({
                top: 350,
                left: 600,
                duration: 2000,
            }));
        },
    }),
};
