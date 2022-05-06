const btn_open = document.querySelector(".fa-bars");
const btn_close = document.querySelector(".fa-times");
const btnhamb = document.querySelector(".hamburger-menu");

btn_open.addEventListener('click',

    function(){
        btnhamb.style.display="block";
    }

);

btn_close.addEventListener('click',

    function(){
        btnhamb.style.display="none";
    }

);