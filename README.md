Notifications - a jQuery extension to display various notifications
=============

It depends on these CSS classes:
--------------------------------
.absolute  
.apotip  
.fixed  
.h-v-centered  
.sortWaitBox  
.dialog  
  
General Usage:
--------------
$.showNotification(Content, Options, AbsoluteTo);  
Content - Text or HTML string.  
Options - [optional] - options object - default - {classes: "fixed h-v-centered", css: {}, overlay: {use: true, opacity: 0.5}, action: function () {}, closeIn: 0, animation: 200}  
AbsoluteTo - selector or jQuery object.  
  
Examples:
---------
 - Progress timer   - __$.showNotification("Loading... please wait!", ebates.PROGRESS);__
 - Tool tip         - __$.showNotification($(".apotip").html(), ebates.TOOLTIP, $(this).parent(".apofpo-link"));__
 - Centered overlay - __$.showNotification(Content, ebates.OVERLAY);__
 - Custom           - __$.showNotification("Please enter your name", {classes: "absolute error", overlay:{use: false}, cloaseIn: 5000}, "#myForm input#name label");__


