$(document).ready(function() {
    $("#st1").hover(function() {
        $(".fa-star").css("color", "#DADADA");
        $("#st1").css("color", "#e47622");

    });
    $("#st2").hover(function() {
        $(".fa-star").css("color", "#DADADA");
        $("#st1, #st2").css("color", "#e47622");

    });
    $("#st3").hover(function() {
        $(".fa-star").css("color", "#DADADA")
        $("#st1, #st2, #st3").css("color", "#e47622");

    });
    $("#st4").hover(function() {
        $(".fa-star").css("color", "#DADADA");
        $("#st1, #st2, #st3, #st4").css("color", "#e47622");

    });
    $("#st5").hover(function() {
        $(".fa-star").css("color", "#DADADA");
        $("#st1, #st2, #st3, #st4, #st5").css("color", "#e47622");

    });
  });