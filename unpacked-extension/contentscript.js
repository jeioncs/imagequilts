// Only run on Google Image search
if (/tbm\=isch/.test(location.href)) {
    // Script
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('script.js');
    (document.head || document.documentElement).appendChild(s);
    s.onload = function() {
        s.parentNode.removeChild(s);
    };

    // Styles
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.type = 'text/css';
    l.className = 'chrome-image-quilts';
    l.href = chrome.extension.getURL('style.css');
    (document.head || document.documentElement).appendChild(l);
}