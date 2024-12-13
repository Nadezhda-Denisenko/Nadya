let isClickable1 = true;
        function myFunction1() {
            var mainelem = document.getElementById("bt");
            mainelem.addEventListener('click', () => {
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
            });
        }
let isClickable2 = true;
        function myFunction2() {
            var mainelem = document.getElementById("burger");
            mainelem.addEventListener('click', () => {
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
            });
        }