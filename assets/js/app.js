'use strict';

$(function() {
    $("#wikisearch").keypress(function(e){
        if(e.keyCode===13){
            var searchTerm = $("#wikisearch").val();
            $("#wiki-results").empty();
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&imlimit=5&format=json&callback=?"; 
            $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function(data, status, jqXHR) {
                //console.log(data);
                $("#wiki-results").html();
                for(var i=0;i<data[0].length;i++){
                    $("#wiki-results").append("<a href="+data[3][i]+"><h2 class='m'>" + data[1][i]+ "</h2>" + "<p class='n'>" + data[2][i] + "</p></a>");
                }
            }
        })
        }
    });

    $("#wiki-search").on("click", function() {
        var searchTerm = $("#wikisearch").val();
        $("#wiki-results").empty();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&imlimit=5&format=json&callback=?"; 
        $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function(data, status, jqXHR) {
                //console.log(data);
                $("#wiki-results").html();
                for(var i=0;i<data[0].length;i++){
                    $("#wiki-results").append("<a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a>");
                }
            }
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });               
    });
});