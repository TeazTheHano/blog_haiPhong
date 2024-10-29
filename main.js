function sectionHeightConfig() {
    let nav = document.querySelector('nav');
    let navHeight = nav.offsetHeight;

    let items = document.querySelectorAll('.ONEPAGEHEIGHT');
    items.forEach(item => {
        item.style.minHeight = `calc(100dvh - ${navHeight}px)`;
    });

    let itemWithPad = document.querySelectorAll('.ONEPAGEHEIGHTWITHPAD');
    items.forEach(item => {
        item.style.minHeight = `calc(100dvh - ${navHeight}px - 2rem)`;
    });

    let marginNavTop = document.querySelector('.margin-nav-top');
    marginNavTop.style.paddingTop = `${navHeight}px`;

    let itemMax1PageHeight = document.querySelectorAll('.ONEPAGEHEIGHTMAX');
    itemMax1PageHeight.forEach(item => {
        item.style.maxHeight = `calc(100dvh - ${navHeight}px)`;
    });

    let itemMax1PageHeightWithPad = document.querySelectorAll('.ONEPAGEHEIGHTMAXWITHPAD');
    itemMax1PageHeightWithPad.forEach(item => {
        item.style.maxHeight = `calc(100dvh - ${navHeight}px - 4rem)`;
    });
}
sectionHeightConfig();


function createImageSlider(sliderId, imgList, nextBtnId, backBtnId) {
    let currentIndex = 0;
    let clickCount = 0;

    function changeImage(src) {
        const slider = document.querySelector(`#${sliderId}`);
        const currentImg = slider.querySelector('.current-img');
        if (currentImg) {
            currentImg.classList.remove('current-img');
        }

        let totalWidth = 0;
        slider.querySelectorAll('img').forEach(img => {
            totalWidth += img.offsetWidth;
        });

        const newImg = slider.querySelector(`img[src="${src}"]`);
        if (newImg) {
            newImg.classList.add('current-img');
            slider.scrollLeft = newImg.offsetLeft;
        }

        let a = totalWidth - slider.scrollLeft - slider.clientWidth;
        if (a < 0) {
            clickCount++;
            if (clickCount >= 2) {
                slider.scrollLeft = 0;
                slider.querySelector('img').classList.add('current-img');
                currentIndex = 0;
                clickCount = 0;
            }
        }
    }

    function initializeSlider() {
        const slider = document.querySelector(`#${sliderId}`);

        imgList.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('home_slider-img');
            if (index === 0) {
                img.classList.add('current-img');
            }
            img.id = `${sliderId}-img-${index}`;
            slider.appendChild(img);
        });

        const nextBtn = document.querySelector(`#${nextBtnId}`);
        const backBtn = document.querySelector(`#${backBtnId}`);

        const updateCurrentImage = (increment) => {
            currentIndex = (currentIndex + increment + imgList.length) % imgList.length;
            changeImage(imgList[currentIndex]);
        };

        backBtn.addEventListener('click', () => updateCurrentImage(-1));
        nextBtn.addEventListener('click', () => updateCurrentImage(1));

        changeImage(imgList[0]);
    }

    initializeSlider();
}

const imgList = [
    "asset/photos/placeholder.jpeg",
    "asset/photos/crew0.JPG",
    "asset/photos/crew1.JPG",
    "asset/photos/crew2.jpeg",
    "asset/photos/crew3.jpeg",
    "asset/photos/crew4.jpeg",
    "asset/photos/crew4.jpeg",
    "asset/photos/crew5.jpeg",
    "asset/photos/crew5.jpeg",
    "asset/photos/crew0.JPG",
    "asset/photos/crew4.jpeg",
    "asset/photos/crew5.jpeg",
];

createImageSlider('home_slider', imgList, 'home_slider_next', 'home_slider_back');

// const AutoScroller = () => {
//     const itemScroll = document.getElementById('home_slider');
//     const scrollSpeed = 2;

//     const autoScroll = () => {
//         itemScroll.scrollLeft += scrollSpeed;
//         if (itemScroll.scrollLeft >= itemScroll.scrollWidth - itemScroll.clientWidth) {
//             itemScroll.scrollLeft = 0;
//         }
//     };

//     let scrollInterval = setInterval(autoScroll, 50);

//     window.addEventListener('focus', () => {
//         clearInterval(scrollInterval);
//         scrollInterval = setInterval(autoScroll, 50);
//     });
// };

// AutoScroller();