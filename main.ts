let velocidad = 40
let OBSTACULO = 1
let VELOCIDAD_GIRO = 30
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        if (OBSTACULO == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, VELOCIDAD_GIRO)
            basic.pause(1800)
            OBSTACULO = 2
        }
        if (OBSTACULO == 2) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, VELOCIDAD_GIRO)
            basic.pause(1800)
            OBSTACULO = 3
        }
        if (OBSTACULO == 3) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, VELOCIDAD_GIRO)
            basic.pause(1800)
            OBSTACULO = 4
        }
        if (OBSTACULO == 4) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, VELOCIDAD_GIRO)
            basic.pause(1800)
            OBSTACULO = 5
        }
        if (OBSTACULO == 5) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, VELOCIDAD_GIRO)
            basic.pause(1800)
        }
    }
})
