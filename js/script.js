const hamburger = document.querySelector('.hamburger'),
    closeElem = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

hamburger.addEventListener('click', () => {
    hamburger.classList.remove('hamburger');
});

closeElem.addEventListener('click', () => {
    hamburger.classList.add('hamburger');
});

const percent = document.querySelectorAll('.work__percent-percent'),
    lines = document.querySelectorAll('.work__percent-line span');

percent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        $('form').trigger('reset');

    });
    return false;
});

new WOW().init();

$('.contacts__form').validate({
    rules: {

        name: {
            required: true,
            minlength: 5
        },

        text: {
            required: true,
            minlength: 5
        },




        email: {
            required: true,
            email: true
        }
    },


    messages: {
        name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите {0} символов!")

        },
        email: {
            required: "Пожалуйста, введите свою почту",
            email: "Ваша почта должна быть формата: name@domain.com"
        },
        text: {
            required: "Пожалуйста, введите свое сообщение",
            minlength: jQuery.validator.format("Введите {0} символов!")
        }
    }
});

$('a[href^="#"').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

// scroll

$(window).scroll(function () {
    if ($(this).scrollTop() > 1300) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});
