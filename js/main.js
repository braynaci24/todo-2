$(document).ready(function () {
    let outGoingName = []

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function reload (){
        window.location.reload()
    }
    $('.send-button').click(function () {
        let nameInfo = $('.todo-name-input').val();
        if (nameInfo.length > 0) {
            outGoingName.push(nameInfo)
            $('.name-list').append(`<div class="list-element-general-box"><li class="list-element">${nameInfo}</li><a href="#"><i class="far fa-trash-alt trash"></i></a></div>`)
            $('.todo-name-input').val("").focus();

            if (outGoingName.length > 1) {
                $('.start').fadeIn(1000);
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Önce kişileri ve ne yapılacağını gir',
            })
        }
    })

    $('.start').click(function () {
        let mission = $('.todo-info-input').val();
        if (mission.length > 3) {
            $('.paragraph-container').append(`<p class="mission-paragraph">${mission} görevi ${outGoingName[getRandomInt(0, outGoingName.length)]} kişisine kitlendi.</p>`)
            $(this).hide();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Kime ne kitliyorsun onu yaz :)',
            })
        }
        $('.send-button').hide();
        $('.refresh-button').show();
    })
    $('.refresh-button').click(function () {
        reload();
    })
    $('body').on('click', '.trash', function () {
        $(this).parent().parent().remove();
        if($('.list-element-general-box').length < 1){
            $('.start').remove();
            reload();
        }
    })
    $('body').on('click', '.list-element', function(){
        $(this).parent().addClass('line-through')
    })

})