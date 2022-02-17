serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    led.plot(0, 0)
    basic.pause(input.lightLevel())
    led.unplot(0, 0)
    basic.pause(input.lightLevel())
})
basic.forever(function () {
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    basic.pause(1000)
})
