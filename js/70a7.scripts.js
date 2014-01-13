!function(a){function b(b,d,e){var f=this;return this.on("click.pjax",b,function(b){var g=a.extend({},m(d,e));g.container||(g.container=a(this).attr("data-pjax")||f),c(b,g)})}function c(b,c,d){d=m(c,d);var f=b.currentTarget;if("A"!==f.tagName.toUpperCase())throw"$.fn.pjax or $.pjax.click requires an anchor element";if(!(b.which>1||b.metaKey||b.ctrlKey||b.shiftKey||b.altKey||location.protocol!==f.protocol||location.hostname!==f.hostname||f.hash&&f.href.replace(f.hash,"")===location.href.replace(location.hash,"")||f.href===location.href+"#")){var g={url:f.href,container:a(f).attr("data-pjax"),target:f},h=a.extend({},g,d),i=a.Event("pjax:click");a(f).trigger(i,[h]),i.isDefaultPrevented()||(e(h),b.preventDefault())}}function d(b,c,d){d=m(c,d);var f=b.currentTarget;if("FORM"!==f.tagName.toUpperCase())throw"$.pjax.submit requires a form element";var g={type:f.method.toUpperCase(),url:f.action,data:a(f).serializeArray(),container:a(f).attr("data-pjax"),target:f};e(a.extend({},g,d)),b.preventDefault()}function e(b){function c(b,c){var e=a.Event(b,{relatedTarget:d});return h.trigger(e,c),!e.isDefaultPrevented()}b=a.extend(!0,{},a.ajaxSettings,e.defaults,b),a.isFunction(b.url)&&(b.url=b.url());var d=b.target,f=l(b.url).hash,h=b.context=n(b.container);b.data||(b.data={}),b.data._pjax=h.selector;var i;b.beforeSend=function(a,d){return"GET"!==d.type&&(d.timeout=0),a.setRequestHeader("X-PJAX","true"),a.setRequestHeader("X-PJAX-Container",h.selector),c("pjax:beforeSend",[a,d])?(d.timeout>0&&(i=setTimeout(function(){c("pjax:timeout",[a,b])&&a.abort("timeout")},d.timeout),d.timeout=0),b.requestUrl=l(d.url).href,void 0):!1},b.complete=function(a,d){i&&clearTimeout(i),c("pjax:complete",[a,d,b]),c("pjax:end",[a,b])},b.error=function(a,d,e){var f=q("",a,b),h=c("pjax:error",[a,d,e,b]);"GET"==b.type&&"abort"!==d&&h&&g(f.url)},b.success=function(d,i,k){var m="function"==typeof a.pjax.defaults.version?a.pjax.defaults.version():a.pjax.defaults.version,n=k.getResponseHeader("X-PJAX-Version"),o=q(d,k,b);if(m&&n&&m!==n)return g(o.url),void 0;if(!o.contents)return g(o.url),void 0;e.state={id:b.id||j(),url:o.url,title:o.title,container:h.selector,fragment:b.fragment,timeout:b.timeout},(b.push||b.replace)&&window.history.replaceState(e.state,o.title,o.url),document.activeElement.blur(),o.title&&(document.title=o.title),h.html(o.contents);var p=h.find("input[autofocus], textarea[autofocus]").last()[0];if(p&&document.activeElement!==p&&p.focus(),r(o.scripts),"number"==typeof b.scrollTo&&a(window).scrollTop(b.scrollTo),""!==f){var s=l(o.url);s.hash=f,e.state.url=s.href,window.history.replaceState(e.state,o.title,s.href);var t=a(s.hash);t.length&&a(window).scrollTop(t.offset().top)}c("pjax:success",[d,i,k,b])},e.state||(e.state={id:j(),url:window.location.href,title:document.title,container:h.selector,fragment:b.fragment,timeout:b.timeout},window.history.replaceState(e.state,document.title));var m=e.xhr;m&&m.readyState<4&&(m.onreadystatechange=a.noop,m.abort()),e.options=b;var m=e.xhr=a.ajax(b);return m.readyState>0&&(b.push&&!b.replace&&(s(e.state.id,h.clone().contents()),window.history.pushState(null,"",k(b.requestUrl))),c("pjax:start",[m,b]),c("pjax:send",[m,b])),e.xhr}function f(b,c){var d={url:window.location.href,push:!1,replace:!0,scrollTo:!1};return e(a.extend(d,m(b,c)))}function g(a){window.history.replaceState(null,"","#"),window.location.replace(a)}function h(b){var c=b.state;if(c&&c.container){if(x&&y==c.url)return;if(e.state.id===c.id)return;var d=a(c.container);if(d.length){var f,h=A[c.id];e.state&&(f=e.state.id<c.id?"forward":"back",t(f,e.state.id,d.clone().contents()));var i=a.Event("pjax:popstate",{state:c,direction:f});d.trigger(i);var j={id:c.id,url:c.url,container:d,push:!1,fragment:c.fragment,timeout:c.timeout,scrollTo:!1};h?(d.trigger("pjax:start",[null,j]),c.title&&(document.title=c.title),d.html(h),e.state=c,d.trigger("pjax:end",[null,j])):e(j),d[0].offsetHeight}else g(location.href)}x=!1}function i(b){var c=a.isFunction(b.url)?b.url():b.url,d=b.type?b.type.toUpperCase():"GET",e=a("<form>",{method:"GET"===d?"GET":"POST",action:c,style:"display:none"});"GET"!==d&&"POST"!==d&&e.append(a("<input>",{type:"hidden",name:"_method",value:d.toLowerCase()}));var f=b.data;if("string"==typeof f)a.each(f.split("&"),function(b,c){var d=c.split("=");e.append(a("<input>",{type:"hidden",name:d[0],value:d[1]}))});else if("object"==typeof f)for(key in f)e.append(a("<input>",{type:"hidden",name:key,value:f[key]}));a(document.body).append(e),e.submit()}function j(){return(new Date).getTime()}function k(a){return a.replace(/\?_pjax=[^&]+&?/,"?").replace(/_pjax=[^&]+&?/,"").replace(/[\?&]$/,"")}function l(a){var b=document.createElement("a");return b.href=a,b}function m(b,c){return b&&c?c.container=b:c=a.isPlainObject(b)?b:{container:b},c.container&&(c.container=n(c.container)),c}function n(b){if(b=a(b),b.length){if(""!==b.selector&&b.context===document)return b;if(b.attr("id"))return a("#"+b.attr("id"));throw"cant get selector for pjax container!"}throw"no pjax container for "+b.selector}function o(a,b){return a.filter(b).add(a.find(b))}function p(b){return a.parseHTML(b,document,!0)}function q(b,c,d){var e={};if(e.url=k(c.getResponseHeader("X-PJAX-URL")||d.requestUrl),/<html/i.test(b))var f=a(p(b.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),g=a(p(b.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));else var f=g=a(p(b));if(0===g.length)return e;if(e.title=o(f,"title").last().text(),d.fragment){if("body"===d.fragment)var h=g;else var h=o(g,d.fragment).first();h.length&&(e.contents=h.contents(),e.title||(e.title=h.attr("title")||h.data("title")))}else/<html/i.test(b)||(e.contents=g);return e.contents&&(e.contents=e.contents.not(function(){return a(this).is("title")}),e.contents.find("title").remove(),e.scripts=o(e.contents,"script[src]").remove(),e.contents=e.contents.not(e.scripts)),e.title&&(e.title=a.trim(e.title)),e}function r(b){if(b){var c=a("script[src]");b.each(function(){var b=this.src,d=c.filter(function(){return this.src===b});if(!d.length){var e=document.createElement("script");e.type=a(this).attr("type"),e.src=a(this).attr("src"),document.head.appendChild(e)}})}}function s(a,b){for(A[a]=b,C.push(a);B.length;)delete A[B.shift()];for(;C.length>e.defaults.maxCacheLength;)delete A[C.shift()]}function t(a,b,c){var d,e;A[b]=c,"forward"===a?(d=C,e=B):(d=B,e=C),d.push(b),(b=e.pop())&&delete A[b]}function u(){return a("meta").filter(function(){var b=a(this).attr("http-equiv");return b&&"X-PJAX-VERSION"===b.toUpperCase()}).attr("content")}function v(){a.fn.pjax=b,a.pjax=e,a.pjax.enable=a.noop,a.pjax.disable=w,a.pjax.click=c,a.pjax.submit=d,a.pjax.reload=f,a.pjax.defaults={timeout:650,push:!0,replace:!1,type:"GET",dataType:"html",scrollTo:0,maxCacheLength:20,version:u},a(window).on("popstate.pjax",h)}function w(){a.fn.pjax=function(){return this},a.pjax=i,a.pjax.enable=v,a.pjax.disable=a.noop,a.pjax.click=a.noop,a.pjax.submit=a.noop,a.pjax.reload=function(){window.location.reload()},a(window).off("popstate.pjax",h)}var x=!0,y=window.location.href,z=window.history.state;z&&z.container&&(e.state=z),"state"in window.history&&(x=!1);var A={},B=[],C=[];a.inArray("state",a.event.props)<0&&a.event.props.push("state"),a.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/),a.support.pjax?v():w()}(jQuery),function(a){"function"==typeof module?module.exports=a(this.jQuery||require("jquery")):this.NProgress=a(this.jQuery)}(function(a){function b(a,b,c){return b>a?b:a>c?c:a}function c(a){return 100*(-1+a)}function d(a,b,d){var e;return e="translate3d"===f.positionUsing?{transform:"translate3d("+c(a)+"%,0,0)"}:"translate"===f.positionUsing?{transform:"translate("+c(a)+"%,0)"}:{"margin-left":c(a)+"%"},e.transition="all "+b+"ms "+d,e}var e={};e.version="0.1.2";var f=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};return e.configure=function(b){return a.extend(f,b),this},e.status=null,e.set=function(a){var c=e.isStarted();a=b(a,f.minimum,1),e.status=1===a?null:a;var g=e.render(!c),h=g.find('[role="bar"]'),i=f.speed,j=f.easing;return g[0].offsetWidth,g.queue(function(b){""===f.positionUsing&&(f.positionUsing=e.getPositioningCSS()),h.css(d(a,i,j)),1===a?(g.css({transition:"none",opacity:1}),g[0].offsetWidth,setTimeout(function(){g.css({transition:"all "+i+"ms linear",opacity:0}),setTimeout(function(){e.remove(),b()},i)},i)):setTimeout(b,i)}),this},e.isStarted=function(){return"number"==typeof e.status},e.start=function(){e.status||e.set(0);var a=function(){setTimeout(function(){e.status&&(e.trickle(),a())},f.trickleSpeed)};return f.trickle&&a(),this},e.done=function(a){return a||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(a){var c=e.status;return c?("number"!=typeof a&&(a=(1-c)*b(Math.random()*c,.1,.95)),c=b(c+a,0,.994),e.set(c)):e.start()},e.trickle=function(){return e.inc(Math.random()*f.trickleRate)},e.render=function(b){if(e.isRendered())return a("#nprogress");a("html").addClass("nprogress-busy");var d=a("<div id='nprogress'>").html(f.template),g=b?"-100":c(e.status||0);return d.find('[role="bar"]').css({transition:"all 0 linear",transform:"translate3d("+g+"%,0,0)"}),f.showSpinner||d.find('[role="spinner"]').remove(),d.appendTo(document.body),d},e.remove=function(){a("html").removeClass("nprogress-busy"),a("#nprogress").remove()},e.isRendered=function(){return a("#nprogress").length>0},e.getPositioningCSS=function(){var a=document.body.style,b="WebkitTransform"in a?"Webkit":"MozTransform"in a?"Moz":"msTransform"in a?"ms":"OTransform"in a?"O":"";return b+"Perspective"in a?"translate3d":b+"Transform"in a?"translate":"margin"},e}),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],f="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";d.className="fit-vids-style",d.id="fit-vids-style",d.style.display="none",d.innerHTML=f,e.parentNode.insertBefore(d,e)}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d=d.not("object object"),d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(a){"use strict";function b(){a(".main").fitVids()}b()}(jQuery);var asyncButtons=function(a,b){var c,d=a.getElementsByTagName(b)[0],e=a.createDocumentFragment(),f=function(d,f){a.getElementById(f)||(c=a.createElement(b),c.src=d,f&&(c.id=f),e.appendChild(c))};f("http://apis.google.com/js/plusone.js"),f("//platform.twitter.com/widgets.js"),d.parentNode.insertBefore(e,d)}(document,"script");