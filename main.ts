let sonarValue = 0
mpfr3ddy.initialize(DigitalPin.P0, DigitalPin.P1)
basic.forever(function () {
    sonarValue = nekomimi.Ultrasonic(DigitalPin.P2)
    if (sonarValue > 10) {
        basic.showLeds(`
            # . . . #
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        mpfr3ddy.play_current()
        basic.pause(2000)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        mpfr3ddy.play_next()
        basic.pause(2000)
        mpfr3ddy.play_previous()
        basic.pause(2000)
    }
})
