window.onload = () => {
    window.addEventListener("scroll", ev => {
        const scrollY = window.scrollY;
        console.log(scrollY);

        const heroDeg = 25 + scrollY / 10;
        const heroLayerTwo = document.getElementsByClassName("hero-layer-two")[0];

        heroLayerTwo.style.transform = `rotate(${heroDeg}deg)`;

        const hero2Deg = + scrollY / 5 - 130;
        const hero2LayerTwo = document.getElementsByClassName("hero-2-layer-two")[0];

        hero2LayerTwo.style.transform = `rotate(${hero2Deg}deg)`;

        if (
            (scrollY > 164 && scrollY < 244) ||
            (scrollY > 326 && scrollY < 382) ||
            (scrollY > 447 && scrollY < 526)
        ) {
            document.querySelector(".left-chain").classList.add("blend-into-text");
            document.querySelector(".left-chain").classList.remove("blend-into-green");
            document.querySelector(".left-chain").classList.remove("blend-into-white");
            document.querySelector("#html-logo").classList.remove("show-on-white");            
        } else if (scrollY > 759 & scrollY < 1532) {
            document.querySelector(".left-chain").classList.add("blend-into-green");
            document.querySelector(".left-chain").classList.remove("blend-into-text");
            document.querySelector(".left-chain").classList.remove("blend-into-white");
            document.querySelector("#html-logo").classList.remove("show-on-white");            
        } else if (scrollY >= 1532) {
            document.querySelector("#html-logo").classList.add("show-on-white");            
            document.querySelector(".left-chain").classList.add("blend-into-white");
            document.querySelector(".left-chain").classList.remove("blend-into-text");
            document.querySelector(".left-chain").classList.remove("blend-into-green");
        } else {
            document.querySelector(".left-chain").classList.remove("blend-into-text");
            document.querySelector(".left-chain").classList.remove("blend-into-green");
            document.querySelector(".left-chain").classList.remove("blend-into-white");
            document.querySelector("#html-logo").classList.remove("show-on-white");            
        }

        if (
            (scrollY > 174 && scrollY < 254) ||
            (scrollY > 336 && scrollY < 392) ||
            (scrollY > 457 && scrollY < 536)
        ) {
            document.querySelector(".right-chain").classList.add("blend-into-text");
            document.querySelector(".right-chain").classList.remove("blend-into-green");
            document.querySelector(".right-chain").classList.remove("blend-into-white");
        } else if (scrollY > 769 && scrollY < 1532) {
            document.querySelector(".right-chain").classList.add("blend-into-green");
            document.querySelector(".right-chain").classList.remove("blend-into-text");
            document.querySelector(".right-chain").classList.remove("blend-into-white");
        } else if (scrollY >= 1532) {
            document.querySelector(".right-chain").classList.add("blend-into-white");
            document.querySelector(".right-chain").classList.remove("blend-into-text");
            document.querySelector(".right-chain").classList.remove("blend-into-green");
        } else {
            document.querySelector(".right-chain").classList.remove("blend-into-text");
            document.querySelector(".right-chain").classList.remove("blend-into-green");
            document.querySelector(".right-chain").classList.remove("blend-into-white");
        }
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
            menuIsOpen && document.querySelector("body").classList.remove("no-scroll");
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