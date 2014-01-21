(function(window, document, undefined) {
  'use strict';

})(window, document);

// Async Share Buttons
(function(doc, script) {
  var js,
      fjs = doc.getElementsByTagName(script)[0],
      frag = doc.createDocumentFragment(),
      add = function(url, id) {
        if (doc.getElementById(id)) {return;}
        js = doc.createElement(script);
        js.src = url;
        id && (js.id = id);
        frag.appendChild( js );
      };

    add('http://apis.google.com/js/plusone.js');
    add('//platform.twitter.com/widgets.js');

    fjs.parentNode.insertBefore(frag, fjs);
}(document, 'script'));