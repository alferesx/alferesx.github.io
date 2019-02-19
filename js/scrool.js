// Select all links with hashes
$(document).ready(function () {

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
         }, 1500);
    });
    });