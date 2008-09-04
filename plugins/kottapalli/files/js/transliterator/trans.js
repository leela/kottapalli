 /** WikiMiniAtlas *******************************************************
   *
   *  Description: WikiMiniAtlas is a popup click and drag world map.
   *               This script causes all of our coordinate links to display the WikiMiniAtlas popup button.
   *               The script itself is located on meta because it is used by many projects.
   *               See [[Meta:WikiMiniAtlas]] for more information. 
   *  Created by: [[User:Dschwen]]
   */

 /*

== Telugu Transliteration script ==
 */
 
 function addLoadEvent(func)
 {
   if (window.addEventListener) 
     window.addEventListener("load", func, false);
   else if (window.attachEvent) 
     window.attachEvent("onload", func);
 }
 
 function addTranslit(editForm, textBox)
 {
   checkrt(editForm);
   if (textBox.addEventListener){
     textBox.addEventListener("keypress", processKeys, false);
    }
   else if (textBox .attachEvent) {
     textBox.attachEvent("onkeypress", processKeys);
    }
 }
 
 function addTextEvent() {
   //cookie for remembering transliteration choice
   if(te_getCookie('teWikiTranslit')!=null && te_getCookie('teWikiTranslit')!="")  
   realTime=(te_getCookie('teWikiTranslit')=="true")?true:false; 
 
   // add transliteration feature to search form
   var commentForm = document.getElementById('commentForm');
   if( commentForm != null ) {
      var commentAuthor = document.getElementById('input_author');
      var comment = document.getElementById('input_comment');
      if(commentAuthor){addTranslit(commentForm, commentAuthor);} 
      if(comment){addTranslit(commentForm, comment);}
   }
   var searchForm = document.getElementById('cse-search-box');
   if (searchForm != null){
        var searchBox = document.getElementById('search_box')
        if(searchBox){
            addTranslit(searchForm, searchBox);
        }
    }
 }
 
 function processKeys(event)
 {
   if (rtsupported)
   {
     if (event.keyCode == 27) // ESC  - for ie, Press ctrl+z after pressing ESC
     { 
       //escape to toggle
       realTime = !realTime;
       te_setCookie('teWikiTranslit',realTime,1);//save status in a cookie 
       var chk = document.getElementById('realtime'); 
       if (chk) { chk.checked = realTime; } 
       return false; 
     }
     else if (realTime)
     {
       translitonkey(event);
     }
   }
 }
 
 var realTime = true;
 function rtClick(event)
 {
   realTime = !realTime;
   te_setCookie('teWikiTranslit',realTime,1);//save status in a cookie
 }
 
 var rtsupported = false; var error;
 function checkrt(editform)
 {
   try
   {
     /* var nav = navigator.userAgent.toUpperCase();
     rtsupported = (nav.indexOf("GECKO") >= 0 || nav.indexOf("OPERA") >= 0 || nav.indexOf("SAFARI") >= 0);
     */
    rtsupported = (document.selection != undefined);
     if (!rtsupported)
     {
        var f = document.createElement("form");
        var t = document.createElement("textarea");
        f.appendChild(t);
        document.body.appendChild(f);
        if(t.selectionStart != undefined)
            rtsupported = true;
        document.body.removeChild(f);

     }
   }
   catch (error){
    }
 }
 
// function to handle cookies
function te_getCookie(cookieName)
  {
    if (document.cookie.length>0)
     { 
       cookieStart=document.cookie.indexOf(cookieName + "=");
       if (cookieStart!=-1)
          { 
            cookieStart=cookieStart + cookieName.length+1;
            cookieEnd=document.cookie.indexOf(";",cookieStart);
            if (cookieEnd==-1) cookieEnd=document.cookie.length;
               return unescape(document.cookie.substring(cookieStart,cookieEnd));
          } 
     }
    return "";
  }

function te_setCookie(cookieName,value,expiredays)
 {
   var exdate=new Date();
   exdate.setDate(exdate.getDate()+expiredays);
   document.cookie=cookieName+ "=" +escape(value)+"; path=/"+
   ((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
 }

 addLoadEvent(addTextEvent)
