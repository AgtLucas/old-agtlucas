(function(window, document, undefined) {
  'use strict';

  Fluidvids.init({
    selector: 'iframe',
    players: ['www.youtube.com', 'player.vimeo.com']
  });

  var showComments = document.getElementById('show-comments');

  if (showComments) {
    showComments.addEventListener('click', function() {
      showComments.parentNode.removeChild(showComments);
      loadDisqus();
    });
  }

  var disqus_shortname = 'agt-lucas',
      disqus_url = 'http://agtlucas.com/blog{{ page.url }}';

  function loadDisqus() {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }

})(window, document);