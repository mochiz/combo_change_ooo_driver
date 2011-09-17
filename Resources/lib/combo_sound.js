exports.combo_sound = {
  tatoba_sound: function() {
    return Titanium.Media.createSound({
      url: "../sounds/" + win.combo + ".mp3",
      preload: true,
      has_sound_file: function() {
        var f;
        f = Ti.Filesystem.getFile("sounds/" + win.combo + ".mp3");
        return f.exists();
      },
      file_exists_and_preload: function() {
        if (this.has_sound_file()) {
          this.play();
          return this.pause();
        }
      },
      file_exists_and_play: function() {
        if (!this.has_sound_file()) {
          return;
        }
        return this.play();
      }
    });
  },
  raise_sound: function() {
    return Titanium.Media.createSound({
      url: "../sounds/driver_raise.mp3",
      preload: true,
      preload: function() {
        this.play();
        return this.pause();
      }
    });
  },
  charging_sound: function() {
    return Titanium.Media.createSound({
      url: "../sounds/charging.mp3",
      preload: true,
      looping: true,
      preload: function() {
        this.play();
        return this.pause();
      }
    });
  },
  core_slash_sound: function() {
    return Titanium.Media.createSound({
      url: "../sounds/core_slash.mp3",
      preload: true,
      preload: function() {
        this.play();
        return this.pause();
      }
    });
  }
};