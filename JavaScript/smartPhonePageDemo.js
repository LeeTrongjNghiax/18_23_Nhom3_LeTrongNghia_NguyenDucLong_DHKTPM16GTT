$(document).ready(function() {

    $("#AppleBrand").click(function() {
        $("#2").css("display", "block");
        $(".col-md-4").css("display", "none");
        if ($("#test1").css("display") == "inline-block") {
            $(".SamSung").css("display", "block");
        }
        $(".Apple").css("display", "block");
        $("#test").css("display", "inline-block");
        $("#test").text("Apple");
        $("#btnClear").css("display", "inline-block");
    })

    $("#SamSungBrand").click(function() {
        $("#2").css("display", "block");
        $(".col-md-4").css("display", "none");
        if ($("#test").css("display") == "inline-block") {
            $(".Apple").css("display", "block");
        }
        $(".SamSung ").css("display", "block");
        $("#test1").css("display", "inline-block");
        $("#test1").text("Samsung");
        $("#btnClear").css("display", "inline-block")
    })

    $("#btnClear").click(function() {
        $("#2").css("display", "block");
        if ($("#2").css("visibility") == "visible") {
            $(".col-md-4").css("display", "block");
        }
        $("#btnClear").css("display", "none");
        $("#test").css("display", "none");
        $("#test1").css("display", "none");
    })
});