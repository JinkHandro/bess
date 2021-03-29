



(function (w) {
  var _W = w;


  remLayout();

  function remLayout() {
    var w = document.documentElement.clientWidth;
    w = w > 768 ? 768 : w;
    w = w <= 320 ? 320 : w;
    document.documentElement.style.fontSize = w / 7.5 + 'px';
  }




  $('.icon-menu').click(function () {
    if ($('.mobile-menu-ul').css("display") == 'none') {
      $(this).find('img').attr('src', "./images/mobile/closeMenu.png")
    } else {
      $(this).find('img').attr('src', "./images/mobile/showMenu.png")
    }

    $('.mobile-menu-ul').stop().slideToggle('200');
  });


  $(_W).resize(function () {
    remLayout()
  });

  _W.submitForm = function () {
    var user = $('#userName').val();
    var email = $('#email').val();

    if (!user) {
      Qmsg.error('Please enter the name!')
      return
    }

    if (!email) {
      Qmsg.error('Please input your email!')
      return
    }

    Qmsg.success("Complete submission!")

    $('#userName').val("")
    $('#email').val("")
    _W.inputchange()
  }

  _W.inputchange = function () {

    var user = $('#userName').val();
    var email = $('#email').val();
    var w = document.documentElement.clientWidth;

    if (user && email) {
      if (w >= 768) {
        $(".pc-title-line img").attr('src', '../images/icons/P6_button_enable.png')
      } else {
        $(".mobile-title-line img").attr('src', '../images/mobile/footerbtn.png')
      }
    } else {
      if (w >= 768) {
        $(".pc-title-line img").attr('src', '../images/icons/P6_button_disable.png')
      } else {
        $(".mobile-title-line img").attr('src', '../images/mobile/disableBtn.png')
      }
    }
  }



})(window)