window.addEventListener('scroll',function () {
    var dejascrolley = window.pageYOffset;
    var myNav = document.getElementById('nav');
    if (dejascrolley > 100){
        myNav.style.height = "100px";
        myNav.style.background = "blue";
        myNav.style.color = "red";
    } else{
        (dejascrolley < 100)
        myNav.style.height = "50px";
        myNav.style.background = "red";        
    }



    document.getElementById("pixels").innerHTML = dejascrolley;
});





