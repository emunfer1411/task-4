let VELOCIDAD_GIRO = 40
let velocidad = 30
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.All)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, VELOCIDAD_GIRO)
basic.pause(2000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(5000)
maqueen.motorStop(maqueen.Motors.All)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, VELOCIDAD_GIRO)
basic.pause(2000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(1000)
basic.forever(function () {
	
})
