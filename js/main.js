const actionButton = document.querySelectorAll(".actionbutton");
const card = document.querySelector(".card_container");

gsap.fromTo(".headertext", {y:-200, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: Elastic.easeInOut});
gsap.fromTo(".headertextunder", {y:-200, opacity: 0}, {y: 0, opacity: 1, duration: 1.5, ease: Elastic.easeInOut});
gsap.fromTo(".actiontext", {x:-200, opacity: 0}, {x: 0, opacity: 1, duration: 2.5, ease: Power4.easeInOut});
gsap.fromTo(".actionbutton", {x:200, opacity: 0}, {x: 0, opacity: 1, duration: 3, ease: Power4.easeInOut});

actionButton.forEach( button => {
    button.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
        gsap.fromTo(".headertextback", {x:200, opacity: 0}, {x: 0, opacity: 1, duration: 2, ease: Elastic.easeInOut});
    })
})

