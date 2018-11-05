$(document).ready(function () {
    $('input[name="phone"]').inputmask("+9 (999) 999 99 99");

    $('.project-step-1 button').click(function() {
      $('.project-step-1').hide();
      $('.project-step-2').show();
    })

    $('.project-category li').click(function() {
      $('.project-category').find('.active').removeClass('active');
      $(this).addClass('active');
    })

    $('.project-specialization li').click(function() {
      $('.project-specialization').find('.active').removeClass('active');
      $(this).addClass('active');
    })
});