window.addEventListener("scroll", ev => {
    const heroDeg = 25 + window.scrollY / 10;
    const heroLayerTwo = document.getElementsByClassName("hero-layer-two")[0];

    heroLayerTwo.style.transform = `rotate(${heroDeg}deg)`;

    const hero2Deg = + window.scrollY / 5 - 130;
    const hero2LayerTwo = document.getElementsByClassName("hero-2-layer-two")[0];

    hero2LayerTwo.style.transform = `rotate(${hero2Deg}deg)`;
});

// let interval;

// window.addEventListener("mouseover", ev => {
//     const target = document.getElementById(ev.target.id);

//     if (target) {
//         let offset = 10;
//         interval = window.setInterval(() => { 
//             offset += 10;
//             target.style.strokeDasharray = "40px";
//             target.style.strokeDashoffset = `${offset}px`;
//         }, 100);
//     }
// });

// window.addEventListener("mouseout", ev => {
//     const target = document.getElementById(ev.target.id);

//     if (target) {
//         window.clearInterval(interval);
//         target.style.strokeDasharray = "0";
//     }
// });