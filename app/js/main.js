// TODO: Comment the code
var main = (function () {

  'use strict';

  var main = {

    init: function () {
      this.fluidVids();
      this.showComments();
    },

    fluidVids: function () {
      Fluidvids.init({
        selector: 'iframe',
        players: ['www.youtube.com', 'player.vimeo.com']
      });
    },

    showComments: function () {
      var showComments = document.getElementById('show-comments');

      if (showComments) {
        showComments.addEventListener('click', function() {
          showComments.parentNode.removeChild(showComments);
          main.loadDisqus();
        });
      }
    },

    loadDisqus: function () {
      var disqus_shortname = 'agt-lucas',
          disqus_url = 'http://agtlucas.com/blog{{ page.url }}',
          dsq = document.createElement('script');

      dsq.type = 'text/javascript';
      dsq.async = true;
      dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }
  };

  return main.init();

})();