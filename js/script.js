let isClickable1 = true;
function myFunction1() {
        if (isClickable1) {
            isClickable1 = false;
            if (document.getElementById("list").className != "menu anim2"){
                document.getElementById("list").className = "menu anim2";
                setTimeout(() => {
                var elements = document.getElementsByClassName("menu-item");
                for(var i = 0; i < (elements.length-1); i++) {
                    elements[i].className = "menu-item anim3";
                }
                }, 0);
            } else {
                document.getElementById("list").className = "menu";
                var elements = document.getElementsByClassName("menu-item");
                for(var i = 0; i < (elements.length-1); i++) {
                    elements[i].className = "menu-item";
                }
            }
            setTimeout(() => {
                isClickable1 = true; 
            }, 500); 
        }
}


let isClickable2 = true;
function myFunction2() {
    var mainelem = document.getElementById("burger");
        if (isClickable2) {
            isClickable2 = false;
            if (mainelem.className != "burger_menu anim4"){
                mainelem.className = "burger_menu anim4";
                document.getElementById("plus").style.width = "100%";
                document.getElementById("plus").style.overflow = "auto";
            } else {
                mainelem.className = "burger_menu";
                document.getElementById("plus").style.width = "0%";
                document.getElementById("plus").style.overflow = "hidden";
            }
            setTimeout(() => {
                isClickable2 = true; 
            }, 410); 
        }
}


function myFunction3(){
        document.querySelector('.dialog_window').style.display = "flex";
        document.querySelector('body').style.overflow = "hidden";
}


function myFunction5(){
        document.querySelector('.dialog_window').style.display = "none";
        document.querySelector('body').style.overflow = "auto";
}

let flag1 = false;
let scrollPosition = 0;
function myFunction4(){
    var mainelem = document.querySelector('.catalog');
    var clickedbttn = document.querySelector('.button_section3');
    var lastItem = mainelem.lastElementChild;
    var lastItemPosition = lastItem.getBoundingClientRect().top + window.scrollY;
        if (window.matchMedia("(min-width: 1401px)").matches){
            clickedbttn.textContent = "ПОКАЗАТЬ ВСЕ";
        }
        if (window.matchMedia("(max-width: 1400px)").matches){
            if (flag1 == false){
                scrollPosition = window.scrollY;
                flag1 = true;
                clickedbttn.textContent = "СВЕРНУТЬ";
                mainelem.style.maxHeight = 'fit-content';
                window.scrollTo({ top: lastItemPosition + 200, behavior: 'smooth' });
            } else {
                flag1 = false;
                window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
                mainelem.style.maxHeight = '840px';
                clickedbttn.textContent = "ПОКАЗАТЬ ВСЕ";
            }
        }
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('confidient.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('conftxt').innerText = data;
    })
    .catch(error => console.error('Ошибка при загрузке файла:', error));
});



document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.scroll');
        function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;
            blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;
            if (blockPosition < windowHeight - 50) {
            block.style.opacity = "1";
            block.style.transform = "translateY(0)";
            } else {
            block.style.opacity = "0";
            block.style.transform = "translateY(80px)";
            }
        });
        }
        checkBlocksVisibility();
        window.addEventListener('scroll', checkBlocksVisibility);
});



let direction;
let index_all;
document.addEventListener('DOMContentLoaded', function() {
    const currentIndex = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    const allin = [
        [
            "img/Двери_каталог_1.webp",
            "img/Двери_каталог_1_2.webp",
            "img/Двери_каталог_1_3.webp",
            "img/Двери_каталог_1_4.webp",
            "img/Двери_каталог_1_5.webp"
        ],
        [
            "img/Двери_каталог_2.webp",
            "img/Двери_каталог_2_2.webp",
            "img/Двери_каталог_2_3.webp",
            "img/Двери_каталог_2_4.webp",
            "img/Двери_каталог_2_5.webp"
        ],
        [
            "img/Двери_каталог_3.webp",
            "img/Двери_каталог_3_2.webp",
            "img/Двери_каталог_3_3.webp",
            "img/Двери_каталог_3_4.webp",
            "img/Двери_каталог_3_5.webp"
        ],
        [
            "img/Двери_каталог_4.webp",
            "img/Двери_каталог_4_2.webp",
            "img/Двери_каталог_4_3.webp",
            "img/Двери_каталог_4_4.webp",
            "img/Двери_каталог_4_5.webp"
        ],
        [
            "img/Двери_каталог_5.webp",
            "img/Двери_каталог_5_2.webp",
            "img/Двери_каталог_5_3.webp",
            "img/Двери_каталог_5_4.webp",
            "img/Двери_каталог_5_5.webp"
        ],
        [
            "img/Двери_каталог_6.webp",
            "img/Двери_каталог_6_2.webp",
            "img/Двери_каталог_6_3.webp",
            "img/Двери_каталог_6_4.webp",
            "img/Двери_каталог_6_5.webp"
        ],
        [
            "img/Двери_каталог_7.webp",
            "img/Двери_каталог_7_2.webp",
            "img/Двери_каталог_7_3.webp",
            "img/Двери_каталог_7_4.webp",
            "img/Двери_каталог_7_5.webp"
        ],
        [
            "img/Двери_каталог_8.webp",
            "img/Двери_каталог_8_2.webp",
            "img/Двери_каталог_8_3.webp",
            "img/Двери_каталог_8_4.webp",
            "img/Двери_каталог_8_5.webp"
        ],
        [
            "img/Двери_каталог_9.webp",
            "img/Двери_каталог_9_2.webp",
            "img/Двери_каталог_9_3.webp",
            "img/Двери_каталог_9_4.webp",
            "img/Двери_каталог_9_5.webp"
        ]
    ];
    const sliderImage = [
        document.getElementById('sliderImage1'),
        document.getElementById('sliderImage2'),
        document.getElementById('sliderImage3'),
        document.getElementById('sliderImage4'),
        document.getElementById('sliderImage5'),
        document.getElementById('sliderImage6'),
        document.getElementById('sliderImage7'),
        document.getElementById('sliderImage8'),
        document.getElementById('sliderImage9')
    ];
    const circleContainer = [
        document.getElementById('circleContainer1'),
        document.getElementById('circleContainer2'),
        document.getElementById('circleContainer3'),
        document.getElementById('circleContainer4'),
        document.getElementById('circleContainer5'),
        document.getElementById('circleContainer6'),
        document.getElementById('circleContainer7'),
        document.getElementById('circleContainer8'),
        document.getElementById('circleContainer9')
    ];
    function myFunction6(direction, index_all) {
        if (direction == 'next'){
            currentIndex[index_all] = (currentIndex[index_all] + 1) % allin[index_all].length;
            sliderImage[index_all].classList.add('slide-out_right');
        }
        if (direction == 'prev'){
            currentIndex[index_all] = (currentIndex[index_all] - 1 + allin[index_all].length) % allin[index_all].length;
            sliderImage[index_all].classList.add('slide-out_left');
        }
        setTimeout(() => {
            sliderImage[index_all].src = allin[index_all][currentIndex[index_all]];
            const circles = circleContainer[index_all].children;
            for (let i = 0; i < circles.length; i++) {
                circles[i].classList.remove('circle1');
                circles[i].classList.add('circle2');
            }
            circles[currentIndex[index_all]].classList.add('circle1');
            circles[currentIndex[index_all]].classList.remove('circle2');
            if (direction == 'prev'){
                sliderImage[index_all].classList.remove('slide-out_left');
                sliderImage[index_all].classList.add('slide-in_left');
                setTimeout(() => {
                    sliderImage[index_all].classList.remove('slide-in_left');
                }, 500); 
            }
            if (direction == 'next'){
                sliderImage[index_all].classList.remove('slide-out_right');
                sliderImage[index_all].classList.add('slide-in_right');
                setTimeout(() => {
                    sliderImage[index_all].classList.remove('slide-in_right');
                }, 500); 
            }
        }, 500);
    }

        document.querySelector("div.catalog div.cards:nth-of-type(1) div[class='arrow-button nextButton']").addEventListener('click', () => {
            myFunction6('next', 0);
        });
        document.querySelector("div.catalog div.cards:nth-of-type(1) div[class='arrow-button prevButton']").addEventListener('click', () => {
            myFunction6('prev', 0);
        }); 

        document.querySelector("div.catalog div.cards:nth-of-type(2) div[class='arrow-button nextButton']").addEventListener('click', () => {
            myFunction6('next', 1);
        });
        document.querySelector("div.catalog div.cards:nth-of-type(2) div[class='arrow-button prevButton']").addEventListener('click', () => {
            myFunction6('prev', 1);
        }); 

        document.querySelector("div.catalog div.cards:nth-of-type(3) div[class='arrow-button nextButton']").addEventListener('click', () => {
            myFunction6('next', 2);
        });
        document.querySelector("div.catalog div.cards:nth-of-type(3) div[class='arrow-button prevButton']").addEventListener('click', () => {
            myFunction6('prev', 2);
        }); 

        document.querySelector("div.catalog div.cards:nth-of-type(4) div[class='arrow-button nextButton']").addEventListener('click', () => {
            myFunction6('next', 3);
        });
        document.querySelector("div.catalog div.cards:nth-of-type(4) div[class='arrow-button prevButton']").addEventListener('click', () => {
            myFunction6('prev', 3);
        }); 

        document.querySelector("div.catalog div.cards:nth-of-type(5) div[class='arrow-button nextButton']").addEventListener('click', () => {
            myFunction6('next', 4);
        });
        document.querySelector("div.catalog div.cards:nth-of-type(5) div[class='arrow-button prevButton']").addEventListener('click', () => {
            myFunction6('prev', 4);
        }); 

        document.querySelector("div.catalog div.cards:nth-of-type(6) div[class='arrow-button nextButton']").addEventListener('click', () => {
            myFunction6('next', 5);
        });
        document.querySelector("div.catalog div.cards:nth-of-type(6) div[class='arrow-button prevButton']").addEventListener('click', () => {
            myFunction6('prev', 5);
        }); 

        document.querySelector("div.catalog div.cards:nth-of-type(7) div[class='arrow-button nextButton']").addEventListener('click', () => {
            myFunction6('next', 6);
        });
        document.querySelector("div.catalog div.cards:nth-of-type(7) div[class='arrow-button prevButton']").addEventListener('click', () => {
            myFunction6('prev', 6);
        }); 

        document.querySelector("div.catalog div.cards:nth-of-type(8) div[class='arrow-button nextButton']").addEventListener('click', () => {
            myFunction6('next', 7);
        });
        document.querySelector("div.catalog div.cards:nth-of-type(8) div[class='arrow-button prevButton']").addEventListener('click', () => {
            myFunction6('prev', 7);
        }); 

        document.querySelector("div.catalog div.cards:nth-of-type(9) div[class='arrow-button nextButton']").addEventListener('click', () => {
            myFunction6('next', 8);
        });
        document.querySelector("div.catalog div.cards:nth-of-type(9) div[class='arrow-button prevButton']").addEventListener('click', () => {
            myFunction6('prev', 8);
        }); 
        
        
});


window.onscroll = function() {
    const button = document.getElementById("upper");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        button.classList.add("show"); 
    } else {
        button.classList.remove("show"); 
    }
};
function scrollToTop() {
    window.scrollTo({
        top: 0, behavior: 'smooth' 
    });
}