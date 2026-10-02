input.onButtonPressed(Button.A, function () {
    hambre += 10
    basic.showString("¡Delicioso!")
    felicidad += 10
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # # .
            . . . # #
            . . . . .
            # # . . .
            . # . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . . #
            # # . . .
            . # . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . #
            . # # . .
            . . # . .
            . . # # #
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . . # .
            . . . # #
            # # . . .
            . # # . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # #
            # # . . .
            . # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . . .
            . # # . .
            . . # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # . .
            . . # # .
            . . . . .
            # # . . .
            `)
        basic.showLeds(`
            . . # # .
            . . . # #
            # # . . .
            . # . . .
            . # # # .
            `)
    }
    felicidad += 10
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    images.createBigImage(`
        . . . . . . . . . #
        . . . # # # # # . #
        . # # # # # # # # #
        . . . # # # # # . #
        . . . . . . . . . #
        `).scrollImage(1, 200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Skull)
    game.gameOver()
})
let felicidad = 0
let hambre = 0
input.setSoundThreshold(SoundThreshold.Loud, 50)
basic.showIcon(IconNames.Happy)
music.play(music.stringPlayable("C C D D E E F F ", 400), music.PlaybackMode.UntilDone)
hambre += -1
felicidad += -1
