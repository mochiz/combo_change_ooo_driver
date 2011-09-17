var core_flash, flash_positions, i, j, vanish_anime;
flash_positions = [
  {
    top: 60,
    left: 85,
    top: 105,
    left: "auto",
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
        return this.animate;
      },
      transform: Ti.UI.create2DMatrix({
        scale: this.scale
      }),
      zIndex: 1,
      duration: 500,
      vanish: function() {
        return this.animate(vanish_anime);
      }
    });
    j++;
    core_flash[i][0].scale = 2;
    core_flash[i][1].scale = 2.2;
    core_flash[i][0].sound = Titanium.Media.createSound({
      url: "../sounds/medal_scan" + i + ".mp3"
    });
    core_flash[i][0].sound.play();
    core_flash[i][0].sound.pause();
    i++;
  }
}
exports.core_flash = core_flash;