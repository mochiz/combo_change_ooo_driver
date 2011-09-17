exports = {
    test_flash_base: Ti.UI.createView({
        // height:90,
        // width:90,
        // borderRadius:45,
        // visible: true,
        // borderColor:'red',
        // top: 100,
        // left: 100,
        // borderWidth:3,
        // opacity:0.6,
        height:90,
        width:90,
        borderRadius:45,
        borderWidth:3,
        borderColor:'red',
        opacity:0.6,
    }),

    flash: function(color, number) {
        var flash_small = new this.test_flash_base;
        var flash_big = new this.test_flash_base;
        flash_small.borderColor = color;
        flash_small.height = 80;
        flash_small.width = 80;
        flash_small.borderRadius = 40;
        flash_big.borderColor = color;
        Ti.API.info(flash_big.height);
        var base = Ti.UI.createView({
            height:90,
            width:90,
            // visible: false,
            opacity:0.6,
            flash: function() {
                this.show();
                this.animate({
                    transform: Ti.UI.create2DMatrix({scale: 2}),
                    zIndex: 1,
                    duration: 500,
                });
            },
            vanish: function() {
                this.animate(vanish_anime);
            },
        });
        base.add(flash_small);
        base.add(flash_big);
        return base;
    },
        
    flash_positions: [{top: 60, left: 85},
                      {top: 105, left: 'auto'},
                      {top: 165, left: 300},
                     ],
    vanish_anime: Ti.UI.createAnimation({opacity:0, duration:1500}),
    core_flash_base: Ti.UI.createView({
        height:90,
        width:90,
        borderRadius:45,
        visible: false,
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
    }),

    core_flash: function(number, color) {
        var base = Ti.UI.createView({
            color: color,
        });
    },

    core_flash_left: function() {
        core_flash = this.core_flash;
        core_flash.prototype.top = this.flash_positions[0].top;
        core_flash.prototype.left = this.flash_positions[0].left;
        core_flash.prototype.scale = 2;
        core_flash.prototype.sound = Titanium.Media.createSound({
            url:'../sounds/medal_scan1.mp3',
        });

    },

    core_flash: function() {
        var flash_positions = this.flash_positions;
        var vanish_anime = this.vanish_anime;
        var core_flash = Array();
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
            core_flash[i][0].sound = Titanium.Media.createSound({
                url:'../sounds/medal_scan' + i + '.mp3',
            });
            core_flash[i][0].sound.play();
            core_flash[i][0].sound.pause();
        }
        return core_flash;
    },
};