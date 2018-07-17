function resetScreenSize() {

    function init() {
        var _el = document.getElementById('app');
        var hScale = window.innerHeight / 1080;
        var wScale = window.innerWidth / 1920;

        _el.style.transform = 'scaleX(' + wScale + ') scaleY(' + hScale + ')'
        _el.style.marginLeft = -((1920 - window.innerWidth)/2) + 'px'
        _el.style.marginTop = -((1080-window.innerHeight)/2) + 'px'
    }

    var lazyFun;

    window.onresize = function() {

        clearTimeout(lazyFun);

        lazyFun = setTimeout(function() {

            init()

        }, 200)
    }

    init()
}
resetScreenSize()