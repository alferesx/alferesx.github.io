

$(document).ready(function () {
    $(document).ready(function(){
        $(".call_modal").click(function(){
          $(".modal").fadeIn();
          $(".modal_main").show();
            });
      });
      $(document).ready(function(){
        $(".close").click(function(){
          $(".modal").fadeOut();
          $(".modal_main").fadeOut();
            });
      });
});