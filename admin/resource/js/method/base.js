(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if(typeof(clientWidth)=='number' && clientWidth<500 && clientWidth>320){
                docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            }else if(typeof(clientWidth)=='number' && clientWidth>500){
                docEl.style.fontSize = '31.1875'+'px'
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);