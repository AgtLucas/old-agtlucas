(function($) {
  'use strict';

  // Fitvids
  fitVidsJs();

  // Check if the browser support pjax (AKA: History API)
  if ($.support.pjax) {
    var duration = 400;
    $(document).pjax("a[data-pjax]", ".main", {
      fragment: ".main",
      duration: duration
    }),
    $(".main")
      .bind("pjax:send", function() {
        // removeTweet('.twitter-button')
      })
      .bind("pjax:beforeSend", function() {
        NProgress.start(),
        $(this).hide()
      })
      .bind("pjax:complete", function() {
        $(this).fadeIn(duration),
        fitVidsJs(),
        // $('.gist-block').show(),
        NProgress.done()
      })
      .bind("pjax:success", function() {
        // insertTweet('.twitter-button')
      });
  };

  // Fitvids
  function fitVidsJs() {
    $('.main').fitVids();
  };

})(jQuery);