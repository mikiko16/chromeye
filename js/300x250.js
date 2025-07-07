var docReadyId = setInterval(function () {
    if ((document.readyState === "interactive" || document.readyState === "complete")) {
        clearInterval(docReadyId);
        preloadAssets();
    }
}, 50);

function preloadAssets() {
    const images = [
        'img/ball_soccer.png'
    ];
    let loaded = 0;
    images.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            loaded++;
            if (loaded === images.length) {
                loadSVGLogo();
            }
        };
    });
}

function loadSVGLogo() {
    fetch('img/chromeye_logo_split.svg')
        .then(res => res.text())
        .then(svgText => {
            const div = document.createElement('div');
            div.innerHTML = svgText;
            const svg = div.querySelector('svg');
            svg.classList.add('logo');
            document.getElementById('banner').appendChild(svg);
            loadWhiteShape(svg);
        });
}

function loadWhiteShape() {
    const banner = document.getElementById("banner");

    const whiteShape = document.createElement('div');
    whiteShape.className = 'whiteShape';
    whiteShape.style.height = "100vh";
    banner.appendChild(whiteShape);

    const tl = gsap.timeline();

    tl.to(".whiteShape", {
        height: "100vh",
        duration: 1,
        ease: "power2.inOut"
    });

    tl.fromTo("#logo-shape", {
        opacity: 0
    }, {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
    });

    tl.fromTo("#logo-shape", {
        scale: 1.8,
        x: 80
    }, {
        scale: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
    });

    tl.fromTo("#logo-text", {
        opacity: 0,
        x: 80
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
    }, "+=0.2");

    tl.to(".whiteShape", {
        height: "120px",
        duration: 0.8,
        ease: "power2.inOut"
    });

    tl.to(".logo", {
        y: 350,
        duration: 0.8,
        ease: "power2.inOut"
    }, "<");

    tl.call(() => {
        loadBall();
    });
}

function loadBall() {
    const banner = document.getElementById("banner");

    const ball = document.createElement('img');
    ball.src = 'img/ball_soccer.png';
    ball.className = 'ball';
    banner.appendChild(ball);

    const tween = gsap.timeline();

    tween.to(".ball", {
        x: 2500,
        y: 0,
        duration: 3,
        ease: "power1.inOut"
    }, 0);

    tween.fromTo(".ball", {
        x: -1300,
        y: -2000
    }, {
        y: 0,
        duration: 3,
        ease: "bounce.out"
    }, 0);

    tween.call(() => {
    loadText();
    }, null, "-=1"); // започни 0.5 сек след предишното

}

function loadText() {
    const banner = document.getElementById("banner");

    const text1 = document.createElement('div');
    text1.className = 'text1';
    const text1Text = 'WE ARE CHROMEYE';
    text1.innerHTML = wrapWordsReverse(text1Text);
    banner.appendChild(text1);

    const text2 = document.createElement('div');
    text2.className = 'text2';
    const text2Text = 'We are a European digital studio which gradually grew to transform into a global digital agency.';
    text2.innerHTML = wrapLetters(text2Text);
    banner.appendChild(text2);

    const tween = gsap.timeline();

    tween.from(".text1 .word", {
        opacity: 0,
        x: 150,
        duration: 0.4,
        ease: "power2.out",
        stagger: {
            each: 0.2,
            from: "end"
        }
    });

    tween.from(".text2 .letter", {
        opacity: 0,
        y: 120,
        duration: 0.03,
        ease: "power2.out",
        stagger: {
            each: 0.02,
            from: "start"
        }
    }, "-=0.3");
}

function wrapWordsReverse(text) {
    return text.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');
}

function wrapLetters(text) {
    return text.split('').map(letter => {
        const space = letter === ' ' ? '&nbsp;' : letter;
        return `<span class="letter">${space}</span>`;
    }).join('');
}
