(function($) {
  'use strict';

  if ($.support.pjax) {
    var duration = 400;
    $(document).pjax("a[data-pjax]", ".main", {
      fragment: ".main",
      duration: duration
    }),
    $(".main")
      .bind("pjax:beforeSend", function() {
        $(this).hide()
      })
      .bind("pjax:complete", function() {
        $(this).fadeIn(duration)
      });
  };
})(jQuery);