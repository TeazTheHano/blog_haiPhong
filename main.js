function sectionHeightConfig() {
    let nav = document.querySelector('nav');
    let navHeight = nav.offsetHeight;

    let items = document.querySelectorAll('.ONEPAGEHEIGHT');
    items.forEach(item => {
        item.style.minHeight = `calc(100dvh - ${navHeight}px)`;
    });

    let itemWithPad = document.querySelectorAll('.ONEPAGEHEIGHTWITHPAD');
    itemWithPad.forEach(item => {
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

    function changeImage(index) {
        const slider = document.querySelector(`#${sliderId}`);
        const images = slider.querySelectorAll('img');
        images.forEach((img, i) => {
            img.classList.toggle('current-img', i === index);
        });
        slider.scrollLeft = index == 0 ? 0 : images[index].offsetLeft - images[0].offsetLeft;
    }

    function initializeSlider() {
        const slider = document.querySelector(`#${sliderId}`);
        slider.innerHTML = ''; // Clear existing images

        imgList.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('home_slider-img');
            if (index === 0) {
                img.classList.add('current-img');
            }
            slider.appendChild(img);
        });

        const nextBtn = document.querySelector(`#${nextBtnId}`);
        const backBtn = document.querySelector(`#${backBtnId}`);

        const updateCurrentImage = (increment) => {
            currentIndex = (currentIndex + increment + imgList.length) % imgList.length;
            changeImage(currentIndex);
        };

        backBtn.addEventListener('click', () => updateCurrentImage(-1));
        nextBtn.addEventListener('click', () => updateCurrentImage(1));

        changeImage(0);
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

createImageSlider('priviteDinner_slider', imgList, 'priviteDinner_slider_next', 'priviteDinner_slider_back');
createImageSlider('community_slider', imgList, 'community_slider_next', 'community_slider_back');
createImageSlider('zeroWaste_slider', imgList, 'zeroWaste_slider_next', 'zeroWaste_slider_back');

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