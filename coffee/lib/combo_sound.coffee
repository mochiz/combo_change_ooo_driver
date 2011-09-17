exports.combo_sound =

    tatoba_sound: ->
        return  Titanium.Media.createSound(
            url: "../sounds/" + win.combo + ".mp3"
            preload: true
            has_sound_file: ->
                f = Ti.Filesystem.getFile("sounds/" + win.combo + ".mp3")
                f.exists()
            file_exists_and_preload: ->
                if @has_sound_file()
                    @play()
                    @pause()
            file_exists_and_play: ->
                return  unless @has_sound_file()
                @play()
            )

    raise_sound: ->
        return Titanium.Media.createSound(
            url: "../sounds/driver_raise.mp3"
            preload: true
            preload: ->
                @play()
                @pause()
        )

    charging_sound: ->
        return Titanium.Media.createSound(
            url: "../sounds/charging.mp3"
            preload: true
            looping: true
            preload: ->
                @play()
                @pause()
        )

    core_slash_sound: ->
        return Titanium.Media.createSound(
            url: "../sounds/core_slash.mp3"
            preload: true
            preload: ->
                @play()
                @pause()
        )

# exports.tatoba_sound = tatoba_sound
# exports.tatoba_sound = tatoba_sound
# exports.raise_sound = raise_sound
# exports.charging_sound = charging_sound
# exports.core_slash_sound = core_slash_sound

