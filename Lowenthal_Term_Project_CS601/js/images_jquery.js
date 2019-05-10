$(document).ready(function() {
    
    //for certificates on education.html page
    $("#expand1").click(function () {
        $("#python_cert_1").clone().appendTo("#large_image_1").width("757").height("587");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse1").click(function() {
        $("#large_image_1>#python_cert_1").remove();//removes image generated above
    })
    $("#expand2").click(function () {
        $("#html5_cert").clone().appendTo("#large_image_1").width("757").height("577");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse2").click(function() {
        $("#large_image_1>#html5_cert").remove();//removes image generated above
    })
    $("#expand3").click(function () {
        $("#css3_cert").clone().appendTo("#large_image_1").width("757").height("577");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse3").click(function() {
        $("#large_image_1>#css3_cert").remove();//removes image generated above
    })
    $("#expand4").click(function () {
        $("#javascript_cert").clone().appendTo("#large_image_1").width("757").height("579");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse4").click(function() {
        $("#large_image_1>#javascript_cert").remove();//removes image generated above
    })
    $("#expand5").click(function () {
        $("#web_dev_cert").clone().appendTo("#large_image_1").width("757").height("579");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse5").click(function() {
        $("#large_image_1>#web_dev_cert").remove();//removes image generated above
    })
    $("#expand6").click(function () {
        $("#python_cert_2").clone().appendTo("#large_image_1").width("757").height("578");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse6").click(function() {
        $("#large_image_1>#python_cert_2").remove();//removes image generated above
    })
    $("#expand7").click(function () {
        $("#design_cert").clone().appendTo("#large_image_1").width("757").height("580");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse7").click(function() {
        $("#large_image_1>#design_cert").remove();//removes image generated above
    });

    //for Java work example on Work Samples page
    $("#expand8").click(function () {
        $("#long_task").clone().appendTo("#large_image_2").width("757").height("629");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse8").click(function() {
        $("#large_image_2>#long_task").remove();//removes image generated above
    });
    $("#expand9").click(function () {
        $("#results_entry").clone().appendTo("#large_image_2").width("757").height("523");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse9").click(function() {
        $("#large_image_2>#results_entry").remove();//removes image generated above
    });
    $("#expand10").click(function () {
        $("#shared_results").clone().appendTo("#large_image_2").width("757").height("602");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse10").click(function() {
        $("#large_image_2>#shared_results").remove();//removes image generated above
    });
    $("#expand11").click(function () {
        $("#test_1").clone().appendTo("#large_image_2").width("757").height("727");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse11").click(function() {
        $("#large_image_2>#test_1").remove();//removes image generated above
    });
    $("#expand12").click(function () {
        $("#test_2").clone().appendTo("#large_image_2").width("757").height("663");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse12").click(function() {
        $("#large_image_2>#test_2").remove();//removes image generated above
    });

    //for first website example on Work Samples page
    $("#expand13").click(function () {
        $("#uf_home").clone().appendTo("#large_image_3").width("757").height("365");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse13").click(function() {
        $("#large_image_3>#uf_home").remove();//removes image generated above
    });
    $("#expand14").click(function () {
        $("#uf_teams").clone().appendTo("#large_image_3").width("757").height("361");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse14").click(function() {
        $("#large_image_3>#uf_teams").remove();//removes image generated above
    });
    $("#expand15").click(function () {
        $("#uf_history").clone().appendTo("#large_image_3").width("757").height("370");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse15").click(function() {
        $("#large_image_3>#uf_history").remove();//removes image generated above
    });
    $("#expand16").click(function () {
        $("#uf_home_code").clone().appendTo("#large_image_3").width("757").height("507");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse16").click(function() {
        $("#large_image_3>#uf_home_code").remove();//removes image generated above
    });
    $("#expand17").click(function () {
        $("#uf_teams_code_1").clone().appendTo("#large_image_3").width("757").height("411");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse17").click(function() {
        $("#large_image_3>#uf_teams_code_1").remove();//removes image generated above
    });
    $("#expand18").click(function () {
        $("#uf_teams_code_2").clone().appendTo("#large_image_3").width("757").height("742");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse18").click(function() {
        $("#large_image_3>#uf_teams_code_2").remove();//removes image generated above
    });
    $("#expand19").click(function () {
        $("#uf_history_code").clone().appendTo("#large_image_3").width("757").height("549");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse19").click(function() {
        $("#large_image_3>#uf_history_code").remove();//removes image generated above
    });

    //For Pong example on Work Samples Page
    $("#expand20").click(function () {
        $("#pong_ui").clone().appendTo("#large_image_4").width("757").height("440");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse20").click(function() {
        $("#large_image_4>#pong_ui").remove();//removes image generated above
    });
    $("#expand21").click(function () {
        $("#pong_code_1").clone().appendTo("#large_image_4").width("757").height("702");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse21").click(function() {
        $("#large_image_4>#pong_code_1").remove();//removes image generated above
    });
    $("#expand22").click(function () {
        $("#pong_code_2").clone().appendTo("#large_image_4").width("757").height("678");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse22").click(function() {
        $("#large_image_4>#pong_code_2").remove();//removes image generated above
    });
    $("#expand23").click(function () {
        $("#pong_code_3").clone().appendTo("#large_image_4").width("757").height("371");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse23").click(function() {
        $("#large_image_4>#pong_code_3").remove();//removes image generated above
    });
    $("#expand24").click(function () {
        $("#pong_code_4").clone().appendTo("#large_image_4").width("757").height("552");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse24").click(function() {
        $("#large_image_4>#pong_code_4").remove();//removes image generated above
    });
    $("#expand25").click(function () {
        $("#pong_code_5").clone().appendTo("#large_image_4").width("757").height("659");//makes copy of small image, inserts larger copy into div tag
    });
    $("#collapse25").click(function() {
        $("#large_image_4>#pong_code_5").remove();//removes image generated above
    });
})
