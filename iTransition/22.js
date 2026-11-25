(function (x) { // x = 1
    return (function (y) { // y = 2
        console.log(x); // kake print korbe?
    })(2)
})(1);