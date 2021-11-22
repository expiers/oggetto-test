$(document).ready(function(){
  $('.fotogallery__slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.speakers__slider').slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

});
$(".fotogallery__slidePrev").on("click", function() {
  $(".fotogallery__slider").slick("slickPrev");
})
$(".fotogallery__slideNext").on("click", function() {
  $(".fotogallery__slider").slick("slickNext");
})
$(".speakers__slidePrev").on("click", function() {
  $(".speakers__slider").slick("slickPrev");
})
$(".speakers__slideNext").on("click", function() {
  $(".speakers__slider").slick("slickNext");
})

$(".join__form-inputGroup").on("click", function(){
  $(this).addClass("join__form-inputGroup--active");
})

$(document).on("click", ".join__form-button", function (e) {
  e.preventDefault();

  let form = $(this).parents("form");

  form.find(".errors").html("");

  let name = form.find('input[name="userName"]').val().trim();
  let company = form.find('input[name="userCompany"]').val().trim();
  let email = form.find('input[name="userEmail"]').val().trim();
  let phone = form.find('input[name="userPhone"]').val().trim();

  var phoneReg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  let data = { name: name, company: company, email: email, phone: phone };
  let errors = "";

  if (name.length < 2) {
    errors += "Введите Ваше имя<br>";
  }
  if (company.length < 2) {
    errors += "Введите Вашу компанию<br>";
  }
  if (email.length < 2) {
    errors += "Введите Ваш email<br>";
  }
  if (phone.length < 7) {
    errors += "Введите номер телефона<br>";
  } else {
    if (!phoneReg.test(phone)) {
      errors += "Проверьте номер телефона<br>";
    }
  }

  if (errors.length !== 0) {
    form.find(".errors").html(errors);
    return false;
  } else {
    $.ajax({
      type: "POST",
      url: "#",
      data: data,
      success: function () {
        
      },
    });
  }
});