exports = {
    // ドライバーを持ち上げる効果音
    raise_sound: Titanium.Media.createSound({
        url:'../sounds/driver_raise.mp3',
        preload:true,
        preload: function() {
            this.play();
            this.pause();
        },
    }),
    // ドライバー持ち上げ〜メダルスキャンまでの効果音
    charging_sound: Titanium.Media.createSound({
        url:'../sounds/charging.mp3',
        preload:true,
        looping:true,
        preload: function() {
            this.play();
            this.pause();
        },
    }),
    tatoba_sound: Titanium.Media.createSound({
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
                return;
            }
            this.play();
        },
    }),
};