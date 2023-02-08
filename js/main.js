
$(document).ready(function(){
    $(".day-night").click(function(){
        $("i").toggleClass("fa-sun");
        $("i").toggleClass("fa-moon");
        $("body").toggleClass("body-dark");
    })

})