$(function() {
    $("#markitsearch").keypress(function(e){
    if(e.keyCode===13){

    var Markit = {};
    var sSymbol = $("#markitsearch").val();
    $("#markit-results").empty();

Markit.QuoteService = function(sSymbol, fCallback) {
    this.symbol = sSymbol;
    this.fCallback = fCallback;
    this.DATA_SRC = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
    this.makeRequest();
};

Markit.QuoteService.prototype.handleSuccess = function(jsonResult) {
    this.fCallback(jsonResult);
};

Markit.QuoteService.prototype.handleError = function(jsonResult) {
    console.error(jsonResult);
};

Markit.QuoteService.prototype.makeRequest = function() {
    if (this.xhr) { this.xhr.abort(); }
    this.xhr = $.ajax({
        data: { symbol: this.symbol },
        url: this.DATA_SRC,
        dataType: "jsonp",
        success: this.handleSuccess,
        error: this.handleError,
        context: this
    });
};

new Markit.QuoteService(sSymbol, function(jsonResult) {
    // Catch errors
    // if (!jsonResult.Data || jsonResult.Message){
    //     console.error("Error: ", jsonResult.Message);
    //     return;
    // }
    console.log(jsonResult);
    $("#markit-results").append('<h1>' + jsonResult.Name + '<h1>');
    $("#markit-results").append('<p>' + "Symbol: " + jsonResult.Symbol + '<p>');
    $("#markit-results").append('<h1>' + "Last Price: " + "$" + jsonResult.LastPrice + '<h1>');
    $("#markit-results").append('<h1>' + "Change: " + "$" + jsonResult.Change.toFixed(2) + '<h1>');
    $("#markit-results").append('<h1>' + "Percent Change: " + jsonResult.ChangePercent.toFixed(2) + "%" + '<h1>');
});
}})

$("#markit-search").on("click", function() {
    var Markit = {};
    var sSymbol = $("#markitsearch").val();
    $("#markit-results").empty();

Markit.QuoteService = function(sSymbol, fCallback) {
    this.symbol = sSymbol;
    this.fCallback = fCallback;
    this.DATA_SRC = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
    this.makeRequest();
};

Markit.QuoteService.prototype.handleSuccess = function(jsonResult) {
    this.fCallback(jsonResult);
};

Markit.QuoteService.prototype.handleError = function(jsonResult) {
    console.error(jsonResult);
};

Markit.QuoteService.prototype.makeRequest = function() {
    if (this.xhr) { this.xhr.abort(); }
    this.xhr = $.ajax({
        data: { symbol: this.symbol },
        url: this.DATA_SRC,
        dataType: "jsonp",
        success: this.handleSuccess,
        error: this.handleError,
        context: this
    });
};

new Markit.QuoteService(sSymbol, function(jsonResult) {
    // Catch errors
    // if (!jsonResult.Data || jsonResult.Message){
    //     console.error("Error: ", jsonResult.Message);
    //     return;
    // }
    console.log(jsonResult);
    $("#markit-results").append('<h1>' + jsonResult.Name + '<h1>');
    $("#markit-results").append('<p>' + "Symbol: " + jsonResult.Symbol + '<p>');
    $("#markit-results").append('<h1>' + "Last Price: " + "$" + jsonResult.LastPrice + '<h1>');
    $("#markit-results").append('<h1>' + "Change: " + "$" + jsonResult.Change.toFixed(2) + '<h1>');
    $("#markit-results").append('<h1>' + "Percent Change: " + jsonResult.ChangePercent.toFixed(2) + "%" + '<h1>');
});
})
});



