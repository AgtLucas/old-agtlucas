/**
 * Main module
 * The main.js file
 * Module pattern: http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
 *
 * @author Lucas <lucas@agtlucas.com>
 * @version 0.0.0
 * @method init
 * @method fluidVids
 * @method showComments
 * @method loadDisqus
 * @retuns init();
 */
var main = (function () {

  'use strict';

  var main = {

    /** @function
     *  @name init */
    init: function () {
      main.fluidVids();
      main.showComments();
    },

    /** @function
     *  @name fluidVids */
    fluidVids: function () {
      // FluidVids plugin
      Fluidvids.init({
        selector: 'iframe',
        players: ['www.youtube.com', 'player.vimeo.com']
      });
    },

    /** @function
     *  @name showComments */
    showComments: function () {
      // Get the show-comments id reference
      var showComments = document.getElementById('show-comments');

      // If there's a show-comments id on the page
      if (showComments) {
        // Add a click event on it
        showComments.addEventListener('click', function () {
          // Remove the show-comment div
          showComments.parentNode.removeChild(showComments);
          // Call loadDisqus to load comments
          main.loadDisqus();
        });
      }
    },

    /** @function
     *  @name loadDisqus */
    loadDisqus: function () {
      // Disqus configuration
      var disqus_shortname = 'agt-lucas',
        disqus_url = 'http://agtlucas.com/blog{{ page.url }}',
        dsq = document.createElement('script');

      // Insert the Disqus script at the bottom of the page
      dsq.type = 'text/javascript';
      dsq.async = true;
      dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }

  };

  /* Return main.init(); */
  return main.init();

})();
