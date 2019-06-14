// ==UserScript==
// @name         GIF & Elements Blocker
// @namespace    https://laksa19.github.io/GEB
// @updateURL    https://raw.githubusercontent.com/laksa19/GEB/master/geb.user.js
// @downloadURL  https://raw.githubusercontent.com/laksa19/GEB/master/geb.user.js
// @iconURL      https://raw.githubusercontent.com/laksa19/GEB/master/geb-icon.png
// @version      0.1.11
// @author       Laksamadi Guko
// @description  Hide Elements and Gif images
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    "use strict";
// get domain name
var hostname = window.location.hostname;
var sHost = hostname.split(".");
var domain;
if(sHost.length > 2 && sHost[1].length == 2){
    domain = sHost[0];
} else if(sHost.length > 2 && sHost[1].length > 2){
    domain = sHost[1];
} else {
    domain = sHost[0];
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

// hide by classname with inteval
function ClickClassWi(classname,t=10) {
  var intervalId = setInterval(function(){
      ClickClass(classname)
  }, 500);
    setTimeout(function(){
        clearInterval(intervalId)
    },(t*1000))
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

// hide by tag name & id
function HideTagIdS(tag,tid,idsplit,indx){
    var i;
    var el = document.getElementsByTagName(tag);

    if(el){
        for (i = 0; i < (el.length); i++) {
            var getId = el[i].id;
            var Id = getId.split(idsplit);
            if(Id[indx] == tid){
            el[i].style.display = "none";
            console.log("[GEB] Block Element Tag Id : "+(el));
            }
        }
    }
}
// hide by tag name & id with inteval
function HideTagIdSWi(tag,tid,idsplit,indx,t=10){
  var intervalId = setInterval(function(){
      HideTagIdS(tag,tid,idsplit,indx)
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
            console.log("[GEB] Block Element Tag Style : "+(el));
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
// hide by imgname
function HideImg(imgname){
    var i;
    var el = document.getElementsByTagName('img');
        for (i = 0; i < (el.length); i++) {
            if (((el[i].src).split("/").pop()) == imgname){
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
  } if (el.currentStyle) { // IE
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

function PlayMovieXXI(){
    var uri = document.URL;
    var getpath = uri.split("/")[3]
    var i;
    var el = document.getElementsByTagName("a")
    if(el){
        for (i = 0; i < (el.length); i++) {
            if(getpath == "movie" && el[i].href == uri+"/play"){
                el[i].click();
            }
        }
    }
}

// domain list
var domArray = ["",
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
                "animekompi",
                "samehadaku",
                "kotakanime",
                "animeindo",
                "animehade",
                "animersindo",
                "animepos",
                "bioskop45",
                "layarxxi21",
                "gosemut",
                "indofilmxxi",
                "layarcinema",
                "zippyshare",
                "goldmovie21",

             ];

// domain index
var domIndex = domArray.indexOf(domain);

// click GEB
function clickGEB() {
    if ((domArray.indexOf(domain)) > 0){
        HideGif()
        HideClass("jwseed")
        HideClassWi("afs_ads")
        HideClassWi("logo-kanan")
        HideClassWi("jw-logo")
    }
}

// hide Gif & elements
if (domIndex > 0){
// Gif images
    HideGif()
// elements
    switch (domain){
        case "indoxxi":
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
            HideId("promoapk")
            HideClass("chatango-btn")
            HideClass("afs_ads")
            HideIdWi("tv-play")
            ClickId("button-lanjut")
            ClickClass("reklamgec")
            HideClassWi("ext-suggest-options")
            ClickClass("fa-tv")
            HideClassWi("jw-logo")
            PlayMovieXXI()
            break;
        case "anoboy":
            HideClass("home_baner")
            HideId("judi")
            HideTagId("div","rn_ad_native")
            HideTagId("div","rn_ad_")
            HideIdWi("rn_ad_native_t4745")
            HideClassWi("mn-related-container")
            ClickClassWi("vjs-big-play-button")
            HideImg("asd.jpg")
            HideIdWi("glx-12154-container")
            HideClass("social-home")
            HideTagIdSWi("div","ps","-",1)
            HideClassWi("bvr-widget")
            break;
        case "lk21online":
            HideId("tengah")
            break;
        case "lk21":
            HideClass("inner-floatbanner-bottom")
            break;
        case "mangaku":
            HideId("ftads")
            HideId("ftadss")
            HideId("cba")
            HideId("kanan")
            HideClass("particles-js-canvas-el")
            HideClass("grecaptcha-logo")
            HideClass("kiri")
            break;
        case "dunia21":
            HideIdWi("overlay-pop",30)
            break;
        case "nontondrakor":
            HideClassWi("mfp-content")
            HideClassWi("mfp-bg")
            break;
        case "ganool":
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
            HideTagIdSWi("div","fade","-",2)
            HideIdWi("lk8op",30)
            HideTagStyleWi("iframe","display","block")
            ClickId("mv-ply-btn")
            break;
        case "oploverz":
            HideClassWi("headads")
            HideClassWi("branding__top")
            HideClassWi("branding__bottom")
            HideIdWi("ctr_banner")
            HideTagIdWi("div","innity_adslot")
            break;
        case "komkikid":
            HideIdWi("cfs_top_div")
            HideTagIdWi("div","gn_delivery")
            HideClassWi("ads-large")
            HideClass("ads")
            HideTagIdWi("div","id")
            HideTagIdWi("a","id")
            break;
        case "animeku":
            HideClassWi("videoad")
            HideIdWi("mg-player-bar")
            break;
        case "duniafilm21":
            HideId("floatcenter")
            break;
        case "vidio":
            HideId("livestreaming-player__player_ima-ad-container")
            HideClassWi("banner-ad")
            break;
        case "zqscore":
            HideClass("atop")
            HideId("adsLeft")
            HideId("adsRigth")
            break;
        case "samehadaku":
            HideClass("stream-item-widget-content")
            HideClass("stream-item-top")
            break;
        case "animekompi":
            HideClass("mainads")
            HideClass("addads")
            HideClass("left")
            break;
        case "kotakanime":
            HideClass("disads728px")
            HideClass("disads300px")
            HideClass("adspost728")
            break;
        case "animeindo":
            HideTagId("iframe","frame-innity")
            //HideClass("adshome-sidebar")
            HideClass("in_up_ad-area")
            HideClass("in_up_ad_game")
            HideClass("text-html-box")
            HideTagStyleWi("div","z-index",2147483647)
            HideId("sct_banner_top")
            HideClass("external")
            break;
        case "gosemut":
            ClickClass("skip")
            HideClass("ads-m")
            HideId("adsR")
            break;
        case "indofilmxxi":
            HideClass("idmuvi-topbanner-aftermenu")
            HideClass("idmuvi-topplayer")
            break;
        case "layarcinema":
            HideId("ads-pop")
            break;
        case "nanime":
            ClickIdTo("player",0)
            break;

    }


// color theme
var meta = document.createElement('meta');
meta.name = "theme-color";
meta.content = "#3a4149";
document.getElementsByTagName('head')[0].appendChild(meta);
localStorage.setItem("coly", "1");

document.body.addEventListener("click", clickGEB)

}
ClickId("button-lanjut")
ClickClass("button-lanjut")

})();
