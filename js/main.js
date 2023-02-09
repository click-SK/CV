
$(document).ready(function(){
    $(".day-night").click(function(){
        $("i").toggleClass("fa-sun");
        $("i").toggleClass("fa-moon");
        $("body").toggleClass("body-dark");
    });

    $(function(){

        $('.lang-button').click(function(){
            let lang = $(this).attr('id')
            $.each(langArr, function(key){
                $('.lng-' + key).html(langArr[key][lang]);
            })

        })
       
    })



})
