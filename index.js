window.onload = () => {
    window.addEventListener("scroll", ev => {
        const scrollY = window.scrollY;

        rotateHeroSections(scrollY);
        updateLogoColors(scrollY);
    });

    document.getElementById("html-logo").addEventListener("click", ev => {
        const menu = document.getElementById("navigation-menu");
        menu.classList.toggle("navigation-menu-open");

        const body = document.querySelector("body");
        body.classList.toggle("no-scroll");
    });

    window.addEventListener("click", ev => {
        closeMenu(ev);
    })

    rotateHeroSections = (scrollY) => {
        const heroDeg = scrollY / 10;
        const heroLayerTwo = document.getElementsByClassName("hero-layer-two")[0];
        const heroLayerThree = document.getElementsByClassName("hero-layer-three")[0];
        const heroLayerFour = document.getElementsByClassName("hero-layer-four")[0];

        heroLayerTwo.style.transform = `rotate(${heroDeg + 25}deg)`;
        heroLayerThree.style.transform = `rotate(-${heroDeg * 2 + 340}deg)`;
        heroLayerFour.style.transform = `rotate(${heroDeg + 45}deg)`;

        const hero2Deg = + scrollY / 3;
        const hero2LayerTwo = document.getElementsByClassName("hero-2-layer-two")[0];
        const hero2LayerThree = document.getElementsByClassName("hero-2-layer-three")[0];
        const hero2LayerFour = document.getElementsByClassName("hero-2-layer-four")[0];

        hero2LayerTwo.style.transform = `rotate(${hero2Deg - 130}deg)`;
        hero2LayerThree.style.transform = `rotate(-${hero2Deg * 2 - 30}deg)`;
        hero2LayerFour.style.transform = `rotate(${hero2Deg - 170}deg)`;
    }

    updateLogoColors = (scrollY) => {
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
    }

    closeMenu = (ev) => {
        const targetClassList = ev.target.classList;
        if (
            targetClassList.contains("hero-layer-one") || 
            targetClassList.contains("hero-layer-two") || 
            targetClassList.contains("hero-layer-three") || 
            targetClassList.contains("hero-2-layer-one") ||
            targetClassList.contains("hero-2-text") ||
            targetClassList.contains("hero-3") ||
            targetClassList.contains("hero-3-text") ||
            targetClassList.contains("hero-3-cars-container") ||
            targetClassList.contains("footer") ||
            targetClassList.contains("fab")
        ) {
            const menu = document.getElementById("navigation-menu");
            const menuIsOpen = menu.classList.contains("navigation-menu-open");
            menuIsOpen && menu.classList.remove("navigation-menu-open");
            menuIsOpen && document.querySelector("body").classList.remove("no-scroll");
        } 
    }

    rotateHeroSections(window.scrollY);
    updateLogoColors(window.scrollY);
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