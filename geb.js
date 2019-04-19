// ==UserScript==
// @name         GIF & Elements Blocker
// @namespace    https://laksa19.github.io/GEB
// @updateURL    https://raw.githubusercontent.com/laksa19/GEB/master/geb.js
// @downloadURL  https://raw.githubusercontent.com/laksa19/GEB/master/geb.js
// @version      0.0.1
// @author       Laksamadi Guko
// @description  Hide Elements and Gif images
// @author       Laksamadi Guko
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
// get hostname
var hostname = window.location.hostname;
var domain = hostname.split(".")[0];
if (domain == "www"){
    domain = hostname.split(".")[1];
}
// hide by classname
function HideClass(classname){
    var i;
    var el = document.getElementsByClassName(classname);
    if(el){
        for (i = 0; i < (el.length); i++) {
            return (el[i].style.display = "none")
        }
    }
}
// hide by id
function HideId(id){
    var el = document.getElementById(id);
    if(el){
    return (el.style.display = "none")
    }
}
// hide by img url
function HideImg(imgurl){
    var i;
    var el = document.getElementsByTagName('img');
        for (i = 0; i < (el.length); i++) {
            if (el[i].src == imgurl){
            return (el[i].style.display = "none")
        }
    }
}

// hide by img (.gif)
function HideGif(){
    var i;
    var el = document.getElementsByTagName('img');
        for (i = 0; i < (el.length); i++) {
            if (((el[i].src).split(".").pop()) == "gif"){
            (el[i].style.display = "none")
        }
    }
}


// hide element
if (domain == "indoxxi"){
// indoxxi
    HideId("home-bnner-content")
    HideId("home-bnner2-content")
    HideId("player-side-left")
    HideId("player-side-right")
    HideId("p_native")
    HideGif()
} else if(domain == "anoboy"){
// anoboy
    HideClass("home_baner")
    HideClass("sidebar")
    HideId("judi")
    HideId("rn_ad_native_t4745")
    HideGif()
} else if(domain == "bioskopkeren"){
// bioskopkeren
    HideGif()
} else if(domain == "dunia21"){
// dunia21
    HideGif()
} else if(domain == "lk21online"){
// lk21online
    HideId("tengah")
    HideGif()
} else if(domain == "lk21"){
// lk21
    HideGif()
    HideClass("inner-floatbanner-bottom")
} else if(domain == "grandxxi"){
// grandxxi
    HideGif()
}

})();
