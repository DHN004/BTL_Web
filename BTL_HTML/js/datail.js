
//////////////detail_size////////////////////////////////////

$(document).ready(function () {
    var originalColor = $(".add").css("background-color");
    $(".number_size").change(function () {
        var select_text = $(this).find("option:selected").text(); // Lấy nội dung của option đã chọn
        $(".title_size").hide();
        $(".option_size").show();
        $("#Contet_size").text(select_text); // Hiển thị nội dung đã chọn trong phần tử khác
        $(".add").css({
            "background": "black",
            "cursor": "pointer"
        });
        $(".add").mouseenter(function () {
            $(this).css("background-color", "#f4f4f4");
        });
        $(".add").mouseleave(function () {
            $(this).css("background-color", "black");
        });
    });
    $(".black").on("click", function () {
        $(".img_white").hide();
        $(".img_black").show();
    });
    ///////////////Detail_img/////////////////////////////////
    $(".black").on("click", function () {
        $(".img_white").hide();
        $(".img_black").show();
    });
    $(".white").on("click", function () {
        $(".img_black").hide();
        $(".img_white").show();
    });

    /////////Detail_evaluate///////////////////////////////////////
    $(".more_less").click(function () {
        $(".more").toggle();
        $(".less").toggle();
    });
    
});



