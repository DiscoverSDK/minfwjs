var mod = function() {
    var init = function () {
        var s = document.getElementsByTagName("MyGrid");
        if (s.length > 0)
            s[0].outerHTML = "<table border='1'><tr><td>val1</td><td>val2</td></tr><tr><td>val1</td><td>val2</td></tr></table>";
    }


    init();
}();
