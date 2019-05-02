// ==UserScript==
// @name         GIF & Elements Blocker
// @namespace    https://laksa19.github.io/GEB
// @updateURL    https://raw.githubusercontent.com/laksa19/GEB/master/geb.js
// @downloadURL  https://raw.githubusercontent.com/laksa19/GEB/master/geb.js
// @iconURL      https://raw.githubusercontent.com/laksa19/GEB/master/geb-icon.png
// @version      0.0.34
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
function HideClassWi(classname) {
  var intervalId = setInterval(function(){
      HideClass(classname)
  }, 500);
    setTimeout(function(){
        clearInterval(intervalId)
    },30000)
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
function HideIdWi(id) {
  var intervalId = setInterval(function(){
      HideId(id)
  }, 500);
    setTimeout(function(){
        clearInterval(intervalId)
    },30000)
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
function HideTagId(tag,tid,sid,eid){
    var i;
    var el = document.getElementsByTagName(tag);
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
function HideTagIdWi(tag,tid,sid,eid){
  var intervalId = setInterval(function(){
      HideTagId(tag,tid,sid,eid)
  }, 500);
    setTimeout(function(){
        clearInterval(intervalId)
    },30000)
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
function HideTagStyleWi(tag,styleProp,stylePropValue){
  var intervalId = setInterval(function(){
      HideTagStyle(tag,styleProp,stylePropValue)
  }, 500);
    setTimeout(function(){
        clearInterval(intervalId)
    },30000)
}
// hide by img url
function HideImg(imgurl){
    var i;
    var el = document.getElementsByTagName('img');
        for (i = 0; i < (el.length); i++) {
            if (el[i].src == imgurl){
            return (el[i].style.display = "none")
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

             ];

// hide Gif & elements
if ((domArr.indexOf(domain)) > 0){
// Gif images
    HideGif()
// elements
// indoxxi
    HideId("home-bnner-content")
    HideId("home-bnner2-content")
    HideId("player-side-left")
    HideId("player-side-right")
    HideIdWi("p_native")
    HideTagIdWi("div","pc-player-bar-close"," ")
    HideTagIdWi("div","overlay"," ")
    HideClassWi("jwseed")
    HideClass("btn-watch-area")
    HideClass("block-trailer")
    HideIdWi("tutor")
    ClickClass("mvi-cover")
    ClickIdTo("server-list-close")
// anoboy
    HideClass("home_baner")
    HideClass("sidebar")
    HideId("judi")
    HideId("rn_ad_native_t4745")
// lk21online
    HideId("tengah")
// lk21
    HideClass("inner-floatbanner-bottom")
// mangaku
    HideId("ftads")
    HideId("ftadss")
    HideId("cba")
    HideId("kanan")
    HideClass("particles-js-canvas-el")
    HideClass("grecaptcha-logo")
    HideClass("kiri")
// dunia21
    HideIdWi("overlay-pop")
// nontondrakor
    HideClassWi("mfp-content")
    HideClassWi("mfp-bg")
// ganool
    HideTagIdWi("div","epom",0,4)
    HideTagIdWi("a","lk",0,2)
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
// oploverz
    HideClassWi("headads")
    HideClassWi("branding__top")
    HideClassWi("branding__bottom")
    HideIdWi("ctr_banner")
    HideTagIdWi("div","innity_adslot",0,13)
// komkikid
    HideIdWi("cfs_top_div")
    HideTagIdWi("div","gn_delivery",0,11)
    HideClassWi("ads-large")
    HideClass("ads")
    HideTagIdWi("div","id",0,2)
    HideTagIdWi("a","id",0,2)
// animeku
    HideClassWi("videoad")
    HideIdWi("mg-player-bar")
// duniafilm21
    HideId("floatcenter")
    ClickClass("reklamgec")



// color theme
var meta = document.createElement('meta');
meta.name = "theme-color";
meta.content = "#3a4149";
document.getElementsByTagName('head')[0].appendChild(meta);
}

function clickBody() {
    if ((domArr.indexOf(domain)) > 0){
        HideGif()
        HideClass("jwseed")
    }
}
document.body.addEventListener("click", clickBody)
})();
