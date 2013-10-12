(function($) {

  'use strict';

  fitVidsJs();

  // If browser support pjax...
  if ($.support.pjax) {
    var duration = 400;
    $(document).pjax("a[data-pjax]", ".main-content", {
      fragment: ".main-content",
      duration: duration
    }),
    $(".main-content")
      .bind("pjax:beforeSend", function() {
        NProgress.start(),
        $(this).hide()
      })
      .bind("pjax:complete", function() {
        $(this).fadeIn(duration),
        fitVidsJs(),
        NProgress.done();
      });
  };

  function fitVidsJs() {
    // Fitvids
    $('.post-content').fitVids();
  };

})(jQuery);
