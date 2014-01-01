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

  // $(document).on('konamiCode', function(event) {
  //   alert('ok');
  // });
  // // Insert Twitter Button
  // function insertTweet(target) {
  //   $(target).append('<a href="https://twitter.com/share" class="twitter-share-button" data-url="{{ post.url }}" data-via="_agtlucas" data-lang="en">Tweet</a>' +
  //       '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>');
  // };

  // // Remove Twitter Button
  // function removeTweet(target) {
  //   if ($('.twitter-share-button').length > 0) {
  //     $(target).empty();
  //   }
  // };

})(jQuery);