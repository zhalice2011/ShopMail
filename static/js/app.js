(function(){
    // var html=document.documentElement;
    // var vW=html.getBoundingClientRect().width;
    // html.style.fontSize=vW/15+"px";
    window.onload = window.onresize = function(){
        document.documentElement.style.fontSize = document.documentElement.clientWidth * 20/320+'px';
    };
})();

