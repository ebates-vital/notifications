Notifications - a jQuery extension to display various notifications
=============

It depends on these CSS classes:
  .absolute
  .apotip
  .fixed
  .h-v-centered
  .sortWaitBox
  .dialog

General Usage:
  $.showNotification(Content, Options, AbsoluteTo);
  Content - Text or HTML string.
  Options - [optional] - options object - default - {classes: "fixed h-v-centered", css: {}, overlay: {use: true, opacity: 0.5}, action: function () {}, closeIn: 0, animation: 200}

Examples:
 - Progress timer   - $.showNotification("Loading... please wait!", ebates.PROGRESS);
 - Tool tip         - $.showNotification($(".apotip").html(), ebates.TOOLTIP, $(this).parent(".apofpo-link"));
 - Centered overlay - $.showNotification(Content, ebates.OVERLAY);
 - custom           - $.showNotification("Please enter your name", {classes: "absolute error", overlay:{use: false}, cloaseIn: 5000}, "#myForm input#name label");


