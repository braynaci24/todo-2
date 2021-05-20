$(document).ready(function () {
    let outGoingName = []

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    $('.send-button').click(function () {
        let nameInfo = $('.todo-name-input').val();

        if (nameInfo.length > 0  ) {
            outGoingName.push(nameInfo)
            $('.name-list').append(`<li class="element">${nameInfo}</li>`)
            $('.todo-name-input').val("").focus();

            if (outGoingName.length > 1) {
                $('.start').fadeIn(1000);
            }

        }
    })
    $('.start').click(function () {
        let mission = $('.todo-info-input').val();
        if(mission.length > 3){
            $('.paragraph').append(`<p class="mission-paragraph">${mission} görevi ${outGoingName[getRandomInt(0, outGoingName.length)]} kişisine kitlendi.</p>`)
            $(this).fadeOut(500);
        }else {
            alert("Kime ne kitliyosun onu yaz")
        }
       
    })

})