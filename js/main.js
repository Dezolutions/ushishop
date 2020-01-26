$(function () {

  //======SLIDER ON MAIN PAGE========//
  $('.slider__block').slick({
    prevArrow: $('.slider__arrow .left'),
    nextArrow: $('.slider__arrow .right'),
    dots: true,
    dotsClass: 'slider__indicator'
  })
  //==========ADD PRODUCT INTO CART==========//
  $('.add__to_cart , .button__buy').on('click', function () {
    $('.cart__item').css('display', 'block');
  })

  //==========FILTER HEADPHONES===========//
  $('a[filter]').on('click', function () {
    if ($(this).attr('filter') == 'all') {
      if ($(this).attr('val') == 'off') {
        $('a[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('a[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.shop > div').show(300);

      }
    } else
      if ($(this).attr('val') == 'off') {
        $('a[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('a[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.shop > div').hide(300);
        var target = $(this).attr('filter');
        $('.shop > div[filter = ' + target + ']').show(300);

      };

  })

  //==========MODAL WINDOWS=========//
  function modalWindow(target, modale, modalOut) {
    $(target).on('click', function () {
      $(modalOut).css('display', 'block')
    })

    $('.close').on('click', function () {
      $(modalOut).css('display', 'none')
    })

    $(window).mouseup(function (event) {
      var modal = $(modale)
      if (event.target != modal[0] && modal.has(event.target).length === 0) {
        $(modalOut).css('display', 'none')
      }
    })
  }

  modalWindow('.user', '.user__modal', '.user__autorization');
  modalWindow('.cart', '.modal__item', '.cart__modal');





  //=========SLIDER RANGE===========//
  $("#slider-range").slider({
    range: true,
    min: 10,
    max: 400,
    values: [1, 100],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0]);
      $("#amount_1").val("$" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0));
  $("#amount_1").val("$" + $("#slider-range").slider("values", 1));

  $('input#amount').change(function () {
    var value1 = +$('input#amount').val();
    var value2 = +$('input#amount_1').val();

    if (value1 > value2) {
      value1 = value2;
      $('input#amount').val(value1);
    }
    $('#slider-range').slider('values', 0, value1);

  });


  $('input#amount_1').change(function () {
    var value1 = +$('input#amount').val();
    var value2 = +$('input#amount_1').val();

    if (value1 > value2) {
      value2 = value1;
      $('input#amount_1').val(value2);
    }
    $('#slider-range').slider('values', 1, value2);

  });

  $('input#amount_1 , input#amount').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });

  //=========FILTER CATALOG===========//

  $('.button__filter').on('click', function () {
    $('.filter').toggleClass('filter__active');
  });

  //==========BURGER MENU======//

  $('.nav__btn').on('click', function () {
    $(this).toggleClass('nav__btn-active')
    $('.nav__btn > span').toggleClass('span__active');
    $('.nav__wraper').toggleClass('nav__wraper_active')
  })

  $('.color__button').on('click', function () {
    var imgPath = $(this).attr('data-img-path');
    $('.product__block img').attr('src', imgPath);
  })

});