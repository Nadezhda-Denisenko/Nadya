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
        function myFunction4(){
            var mainelem = document.querySelector('.catalog');
            var clickedbttn = document.querySelector('.button_section3');
                if (window.matchMedia("(max-width: 1400px)").matches){
                        isClickable4 = false;
                        if (mainelem.style.maxHeight == '840px'){
                            clickedbttn.textContent = "СВЕРНУТЬ";
                            mainelem.style.maxHeight = 'fit-content';
                        } else {
                            mainelem.style.maxHeight = '840px';
                            clickedbttn.textContent = "ПОКАЗАТЬ ВСЕ";
                        }
                }
        }
fetch('confidient.txt')
.then(response => response.text())
.then(data => {
    document.getElementById('conftxt').innerText = data;
})
.catch(error => console.error('Ошибка при загрузке файла:', error));