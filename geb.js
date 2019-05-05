// ==UserScript==
// @name         GIF & Elements Blocker
// @namespace    https://laksa19.github.io/GEB
// @updateURL    https://raw.githubusercontent.com/laksa19/GEB/master/geb.js
// @downloadURL  https://raw.githubusercontent.com/laksa19/GEB/master/geb.js
// @iconURL      https://raw.githubusercontent.com/laksa19/GEB/master/geb-icon.png
// @version      0.0.65
// @author       Laksamadi Guko
// @description  Hide Elements and Gif images
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
            el[i].style.display = "none";
            console.log("[GEB] Block Element Class : "+(el));
        }
    }
}

// hide by classname with inteval
function HideClassWi(classname,t=10) {
  var intervalId = setInterval(function(){
      HideClass(classname)
  }, 500);
    setTimeout(function(){
        clearInterval(intervalId)
    },(t*1000))
}
// click class
function ClickClass(classname){
    var i;
    var el = document.getElementsByClassName(classname);
    if(el){
        for (i = 0; i < (el.length); i++) {
            el[i].click();
        }
    }
}

// hide by id
function HideId(id){
    var i;
    var el = document.querySelectorAll('[id^='+id+']')
    if(el){
        for (i = 0; i < (el.length); i++) {
            el[i].style.display = "none";
            console.log("[GEB] Block Element Id : "+(el));
        }
    }

}
// hide by id with interval
function HideIdWi(id,t=10) {
  var intervalId = setInterval(function(){
      HideId(id)
  }, 500);
    setTimeout(function(){
        clearInterval(intervalId)
    },(t*1000))
}
// click by id
function ClickId(id){
    var i;
    var el = document.querySelectorAll('[id^='+id+']')
    if(el){
        for (i = 0; i < (el.length); i++) {
            el[i].click();
        }
    }

}
// hide by click id with timeout
function ClickIdTo(id,to=10) {
    setTimeout(function(){
        ClickId(id)
    },(to*1000))
}

// hide by tag name & id
function HideTagId(tag,tid,sid=0){
    var i;
    var el = document.getElementsByTagName(tag);
    var eid = sid.length;
    if(el){
        for (i = 0; i < (el.length); i++) {
            var getId = el[i].id;
            var Id = getId.substring(sid,eid);
            if(Id == tid){
            el[i].style.display = "none";
            console.log("[GEB] Block Element Tag Id : "+(el));
            }
        }
    }
}
// hide by tag name & id with inteval
function HideTagIdWi(tag,tid,sid,t=10){
  var intervalId = setInterval(function(){
      HideTagId(tag,tid,sid)
  }, 500);
    setTimeout(function(){
        clearInterval(intervalId)
    },(t*1000))
}

// hide by tag name & class
function HideTagStyle(tag,styleProp,stylePropValue){
    var i;
    var el = document.getElementsByTagName(tag);
    if(el){
        for (i = 0; i < (el.length); i++) {
            var style = getStyle(el[i], styleProp)
            if(style == stylePropValue){
            el[i].style.display = "none";
            console.log("[GEB] Block Element Tag Id : "+(el));
            }
        }
    }
}
// hide by tag name & class with inteval
function HideTagStyleWi(tag,styleProp,stylePropValue,t=10){
  var intervalId = setInterval(function(){
      HideTagStyle(tag,styleProp,stylePropValue)
  }, 500);
    setTimeout(function(){
        clearInterval(intervalId)
    },(t*1000))
}
// hide by img url
function HideImg(imgurl){
    var i;
    var el = document.getElementsByTagName('img');
        for (i = 0; i < (el.length); i++) {
            if (el[i].src == imgurl){
            (el[i].style.display = "none")
            console.log("[GEB] Block image from : "+(el[i].src))
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
            console.log("[GEB] Block image from : "+(el[i].src))
        }
    }
}


//https://gist.github.com/cms/369133
function getStyle(el, styleProp) {
  var value, defaultView = el.ownerDocument.defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
      return (function(value) {
        var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}

// domain list
var domArr = ["",
              "grandxxi",
              "nontondrakor",
              "newindoxx1",
              "nontonindoxx1",
              "nanime",
              "nontonani",
              "animeku",
              "dunia21",
              "bioskopkeren",
              "lk21",
              "indoxxi",
              "anoboy",
              "lk21online",
              "mangaku",
              "ganool",
              "oploverz",
              "komikid",
              "animeku",
              "duniafilm21",
              "vidio",
              "nontonanimeindo",
              "zqscore",

             ];
// click GEB
function clickGEB() {
    if ((domArr.indexOf(domain)) > 0){
        HideGif()
        HideClass("jwseed")
        HideClassWi("afs_ads")
        HideClassWi("logo-kanan")
    }
}
// hide Gif & elements
if ((domArr.indexOf(domain)) > 0){
// Gif images
    HideGif()
// elements
    HideId("home-bnner-content")
    HideId("home-bnner2-content")
    HideId("player-side-left")
    HideId("player-side-right")
    HideIdWi("p_native")
    HideIdWi("pc-player-bar-close")
    HideTagIdWi("div","overlay")
    HideClassWi("jwseed",30)
    HideClass("trailerz")
    HideIdWi("tutor")
    ClickClass("mvi-cover")
    ClickIdTo("server-list-close")
    HideClass("home_baner")
    HideClass("sidebar")
    HideId("judi")
    HideTagId("div","rn_ad_native")
    HideTagId("div","rn_ad_")
    HideIdWi("rn_ad_native_t4745")
    HideClassWi("mn-related-container")
    HideId("tengah")
    HideClass("inner-floatbanner-bottom")
    HideId("ftads")
    HideId("ftadss")
    HideId("cba")
    HideId("kanan")
    HideClass("particles-js-canvas-el")
    HideClass("grecaptcha-logo")
    HideClass("kiri")
    HideIdWi("overlay-pop",30)
    HideClassWi("mfp-content")
    HideClassWi("mfp-bg")
    HideTagIdWi("div","epom")
    HideTagIdWi("a","lk")
    HideTagStyleWi("div","z-index",2147483647)
    HideTagStyleWi("div","z-index",3000)
    HideClassWi("check_notify")
    HideClassWi("adsincenter")
    HideIdWi("top-banner")
    HideIdWi("mbanner")
    HideIdWi("float-1-wrap")
    HideIdWi("float-2-wrap")
    HideIdWi("popup-banner")
    HideIdWi("ptbanner")
    HideIdWi("middle-banner")
    HideClassWi("headads")
    HideClassWi("branding__top")
    HideClassWi("branding__bottom")
    HideIdWi("ctr_banner")
    HideTagIdWi("div","innity_adslot")
    HideIdWi("cfs_top_div")
    HideTagIdWi("div","gn_delivery")
    HideClassWi("ads-large")
    HideClass("ads")
    HideTagIdWi("div","id")
    HideTagIdWi("a","id")
    HideClassWi("videoad")
    HideIdWi("mg-player-bar")
    HideId("floatcenter")
    ClickClass("reklamgec")
    HideId("promoapk")
    HideClass("chatango-btn")
    HideClass("afs_ads")
    HideIdWi("tv-play")
    ClickId("button-lanjut")
    ClickIdTo("ep-1",3)
    HideId("livestreaming-player__player_ima-ad-container")
    HideClassWi("banner-ad")
    ClickIdTo("player",1)
    ClickClass("vjs-big-play-button")



// color theme
var meta = document.createElement('meta');
meta.name = "theme-color";
meta.content = "#3a4149";
document.getElementsByTagName('head')[0].appendChild(meta);
localStorage.setItem("coly", "1");

document.body.addEventListener("click", clickGEB)

}
ClickId("button-lanjut")

})();
