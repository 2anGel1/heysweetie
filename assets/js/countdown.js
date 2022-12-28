
var countDownDate = new Date("Jan 01, 2023 00:00:00").getTime()

var count = setInterval(function () {

    var now = new Date().getTime()
    var timeleft = countDownDate - now

    if (timeleft <= 0) {
        document.getElementById("days").innerHTML = 00
        document.getElementById("hours").innerHTML = 00
        document.getElementById("minutes").innerHTML = 00
        document.getElementById("seconds").innerHTML = 00
        window.location.href = "/pages/newyear.html"
    } else {

        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
        days = days < 10 ? "0" + String(days) : String(days)
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        hours = hours < 10 ? "0" + String(hours) : String(hours)
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
        minutes = minutes < 10 ? "0" + String(minutes) : String(minutes)
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000)
        seconds = seconds < 10 ? "0" + String(seconds) : String(seconds)

        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds
    }

}, 1000)