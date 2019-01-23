window.onload = () => {
    window.addEventListener("scroll", ev => {
        const heroDeg = 25 + window.scrollY / 10;
        const heroLayerTwo = document.getElementsByClassName("hero-layer-two")[0];

        heroLayerTwo.style.transform = `rotate(${heroDeg}deg)`;

        const hero2Deg = + window.scrollY / 5 - 130;
        const hero2LayerTwo = document.getElementsByClassName("hero-2-layer-two")[0];

        hero2LayerTwo.style.transform = `rotate(${hero2Deg}deg)`;
    });

    document.getElementById("html-logo").addEventListener("click", ev => {
        const menu = document.getElementById("navigation-menu");
        menu.classList.toggle("navigation-menu-open");

        const body = document.querySelector("body");
        body.classList.toggle("no-scroll");
    });

    window.addEventListener("click", ev => {
        const targetClassList = ev.target.classList;
        if (
            targetClassList.contains("hero-layer-one") || 
            targetClassList.contains("hero-layer-two") || 
            targetClassList.contains("hero-layer-three") || 
            targetClassList.contains("hero-2-layer-one") ||
            targetClassList.contains("hero-2-text")
        ) {
            const menu = document.getElementById("navigation-menu");
            const menuIsOpen = menu.classList.contains("navigation-menu-open");
            menuIsOpen && menu.classList.remove("navigation-menu-open");
        } 
    })
}

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