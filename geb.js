// ==UserScript==
// @name         GIF & Elements Blocker
// @namespace    https://laksa19.github.io/GEB
// @updateURL    https://raw.githubusercontent.com/laksa19/GEB/master/geb.js
// @downloadURL  https://raw.githubusercontent.com/laksa19/GEB/master/geb.js
// @iconURL      https://raw.githubusercontent.com/laksa19/GEB/master/geb-icon.png
// @version      0.0.39
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

             ];
// domain list
var ElArray = [
    "id#home-bnner-content",
    "id#home-bnner2-content",
    "id#player-side-left",
    "id#player-side-right",
    "idwi#p_native",
    "idwi#tutor",
    "clswi#jwseed",
    "cls#btn-watch-area",
    "cls#block-trailer",
    "cls#home_baner",
    "cls#sidebar",
    "id#judi",
    "id#tengah",
    "cls#inner-floatbanner-bottom",
    "id#ftads",
    "id#ftadss",
    "id#cba",
    "id#kanan",
    "cls#particles-js-canvas-el",
    "cls#grecaptcha-logo",
    "cls#kiri",
    "idwi#overlay-pop",
    "clswi#mfp-content",
    "clswi#mfp-bg",
    "clswi#check_notify",
    "clswi#adsincenter",
    "idwi#top-banner",
    "idwi#mbanner",
    "idwi#float-1-wrap",
    "idwi#float-2-wrap",
    "idwi#popup-banner",
    "idwi#ptbanner",
    "idwi#middle-banner",
    "clswi#headads",
    "clswi#branding__top",
    "clswi#branding__bottom",
    "idwi#ctr_banner",
    "idwi#cfs_top_div",
    "clswi#ads-large",
    "cls#ads",
    "clswi#videoad",
    "idwi#mg-player-bar",
    "id#floatcenter",
    "idwi#pc-player-bar-close",
    "tagidwi#div#overlay#0#7",
    "tagidwi#div#epom#0#4",
    "tagidwi#a#lk#0#2",
    "tagidwi#div#innity_adslot#0#13",
    "tagidwi#div#gn_delivery#0#11",
    "tagidwi#div#id#0#2",
    "tagidwi#div#epom#0#4",
    "tagidwi#a#id#0#2",
    "id#rn_ad_native_t4745",
    "tagstwi#div#z-index#2147483647",
    "tagstwi#div#z-index#3000",
    "clickcls#reklamgec",
    "clickcls#mvi-cover",
    "clickidto#server-list-close",



];

// hide Gif & elements
if ((domArray.indexOf(domain)) > 0){
// Gif images
    HideGif()
// elements
var i;
for (i = 0; i < (ElArray.length); i++) {
    var El = ElArray[i].split("#")
    if (El[0] == "id"){
        HideId(El[1])
    } else if (El[0] == "idwi"){
        HideIdWi(El[1])
    } else if (El[0] == "cls"){
        HideClass(El[1])
    } else if (El[0] == "clswi"){
        HideClassWi(El[1])
    } else if (El[0] == "tagid"){
        HideTagId(El[1],El[2],El[3],El[4])
    } else if (El[0] == "tagidwi"){
        HideTagId(El[1],El[2],El[3],El[4])
    } else if (El[0] == "tagst"){
        HideTagStyle(El[1],El[2],El[3])
    } else if (El[0] == "tagstwi"){
        HideTagStyleWi(El[1],El[2],El[3])
    } else if (El[0] == "clickcls"){
        ClickClass(El[1])
    } else if (El[0] == "clickidto"){
        ClickIdTo(El[1])
    }
}

// color theme
var meta = document.createElement('meta');
meta.name = "theme-color";
meta.content = "#3a4149";
document.getElementsByTagName('head')[0].appendChild(meta);
}

function clickBody() {
    if ((domArray.indexOf(domain)) > 0){
        HideGif()
        HideClass("jwseed")
    }
}
document.body.addEventListener("click", clickBody)
})();
