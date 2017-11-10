$(function() {
    $("#pagination1").pagination({
        currentPage: 1,
        totalPage: 50,
        callback: function(current) {
            $("#current1").text(current);
        }
    });
});


