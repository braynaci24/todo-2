$(document).ready(function () {
    let outGoingName = []

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    $('.send-button').click(function () {
        let nameListContainer = $('.name-list')
        let nameInfo = $('.todo-name-input').val();
        if (nameInfo.length > 0) {
            outGoingName.push(nameInfo)
            $('.name-list').append(`<li class="list-element list-element-general-box"> ${nameInfo} <a href="#"><i class="far fa-trash-alt trash"></i></a></li>`)
            $('.todo-name-input').val("").focus();

            if (outGoingName.length > 1) {
                $('.start').fadeIn(1000);
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'ÖNCE KİŞİLERİ VE NE YAPILACAĞINI GİR!',
            })
        }
    })

    $('.start').click(function () {
        let mission = $('.todo-info-input').val();
        let RandomName = outGoingName[getRandomInt(0, outGoingName.length)];
        if (mission.length > 3) {
            $('.paragraph-container').append(`<div class="alert alert-danger alert" role="alert"><i class="fas fa-exclamation-circle"></i>  ${mission} GÖREVİ  <span class="alert-link draw-name"> ${RandomName.toUpperCase()}</span> KİŞİSİNE ÇIKTI</div>`)
            $('.trash').hide();
            $(this).hide();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'LÜTFEN YAPILACAK İŞİ GİRİNİZ ',
            })
        }
        $('.send-button').hide();
        $('.refresh-button').show();
    })

    $('.refresh-button').click(function () {
        window.location.reload()
    })

    $('body').on('click', '.trash', function () {
        $(this).parent().parent().remove();
        if ($('.list-element-general-box').length < 1) {
            $('.start').remove();
            window.location.reload()
        }
    })


})