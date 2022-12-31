var speed = 150 /* The speed/duration of the effect in milliseconds */
var a = true


function typeWriterListe(elid, texts, index, step) {

    var text = texts[index]

    if (step == 0)
        document.getElementById(elid).innerHTML = text.charAt(0)

    if (step < text.length && a == true) {
        document.getElementById(elid).innerHTML += text.charAt(step + 1)
        step++

        if (step == text.length) {
            a = false
        }

        setTimeout(function () {
            typeWriterListe(elid, texts, index, step)
        }, speed)

    } else {
        document.getElementById(elid).innerHTML = document.getElementById(elid).innerHTML.slice(0, -1)
        step--

        if (step == 0) {
            a = true
            index++

            if (index == texts.length)
                index = 0

            document.getElementById(elid).innerHTML = texts[index].charAt(0)
        }

        setTimeout(function () {
            typeWriterListe(elid, texts, index, step)
        }, speed)
    }

}

function typeWriterSimpleText(elid, text, step, _speed) {

    if(text.length == step){
        document.getElementById('pn').style.display = "flex"
    }

    if (step == 0)
        document.getElementById(elid).innerHTML = ""

    if (step < text.length && a == true) {
        document.getElementById(elid).innerHTML += text.charAt(step)
        step++

        setTimeout(function () {
            typeWriterSimpleText(elid, text, step, _speed)
        }, _speed)
        document.getElementById('pn').style.display = "none"
    }

}

function fade(elid) {

    element = document.getElementById(elid)
    element.style.display = 'block';
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}

function main() {

    typeWriterListe("msg", ["Happy New Year", "Bonne Année"], 0, 0)
    loop()
    setTimeout(function () {
        fade("nxt")
    }, 1500)

}

function mainPraises() {

    fade("m_p")
    typeWriterSimpleText("ptitle", "Ces mots sont pour toi, chère Keren", 0, speed-50)
    loop()
}

function mainCountdown(){
    
}



