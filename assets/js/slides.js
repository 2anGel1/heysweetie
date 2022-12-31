let slideIndex = 1

setTimeout(function(){
    showSlides(slideIndex)
}, 3200)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}


function showSlides(n) {

    var i
    var slides = document.getElementsByClassName("mySlides")

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[slideIndex - 1].style.display = "block"
    typeWriterSimpleText(slides[slideIndex - 1].id, slides[slideIndex - 1].innerHTML, 0, 70)
}
