// ==UserScript==
// @name         GIF & Elements Blocker
// @namespace    https://laksa19.github.io/GEB
// @updateURL    https://raw.githubusercontent.com/laksa19/GEB/master/geb.js
// @downloadURL  https://raw.githubusercontent.com/laksa19/GEB/master/geb.js
// @iconURL      https://raw.githubusercontent.com/laksa19/GEB/master/geb-icon.png
// @version      0.0.19
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
// hide by id
function HideId(id){
    var el = document.getElementById(id);
    if(el){
    el.style.display = "none";
    console.log("[GEB] Block Element Id : "+(el));
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

// hide by tag name
function HideTagId(tag,tid,sid,indx=0){
    var i;
    var el = document.getElementsByTagName(tag);
    if(el){
        for (i = 0; i < (el.length); i++) {
            var getId = el[i].id;
            var Id = getId.split(sid)[indx];
            if(Id == tid){
            el[i].style.display = "none";
            console.log("[GEB] Block Element Tag Id : "+(el));
            }
        }
    }
}
// hide by tag name with inteval
function HideTagIdWi(tag,tid,sid,indx=0) {
  var intervalId = setInterval(function(){
      HideTagId(tag,tid,sid,indx)
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
// dunia21
    HideIdWi("overlay-pop")
// nontondrakor
    HideClassWi("mfp-content")
    HideClassWi("mfp-bg")
// ganool
    HideTagIdWi("div","epom","-")
    HideClassWi("check_notify")
    HideClassWi("adsincenter")

}
})();
