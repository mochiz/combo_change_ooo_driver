exports.driver =
    belt: ->
        return Titanium.UI.createImageView(
            image: "../images/belt.png"
            width: 480
            )
    driver: ->
        return Titanium.UI.createImageView(
            image: "../images/" + win.combo + ".png"
            width: 480
            changed: false
            completed: false
            )
    cover: ->
        return Ti.UI.createImageView(
            image: "../images/cover.png"
            width: 480
            )
    anime: ->
        return Titanium.UI.createAnimation(
            transform: Ti.UI.create2DMatrix(rotate: 28)
            duration: 200
            )
    o_scanner: ->
        return Ti.UI.createImageView(
            top: -80
            left: -70
            height: 200
            width: 200
            image: "../images/o_scanner.png"
            visible: false
            vanish: ->
                @animate Ti.UI.createAnimation(
                    top: 350
                    left: 600
                    duration: 2000
                )
            )
