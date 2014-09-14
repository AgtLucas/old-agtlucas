---
layout: post
title: "How to use RequireJS with Rails"
date: 2014-09-14 08:00:00
categories: blog
description: My year so far, a little late...
---

Hello there,

Well, it's september and I didn't post nothing since July. :/ Let's do this!

## RequireJS + Rails

So, a few days ago I was playing with a Rails project and I started to think how to implement <a href="http://requirejs.org/" target="_blank">RequireJS</a> with Rails. For those who don't know what the heck it's RequireJS, here's a little overview from his website:

> RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.

## The requirejs-rails Gem

Fortunately, there's a Gem that makes ease to implement RequireJS in a Rails project, check out <a href="https://github.com/jwhitley/requirejs-rails" target="_blank">here</a>.

## Using requirejs-rails Gem

You'll need to install the Gem, so add it in your Gemfile:

{% highlight ruby %}
gem 'requirejs-rails'
{% endhighlight %}

Run `bundle update` and `bundle install` and we'll be ready to go!

Next step, create a `requirejs.yml` file in the `config` folder. This file will be our configuration file, where we can put our paths and shim. Take a look in the example bellow.

{% highlight yaml %}
paths:
  # File paths and names
  delta: 'delta'
  application: 'application'

  jquery: 'jquery'
  jquery_ujs: 'jquery_ujs'
  turbolinks: 'turbolinks'

shim:
  # http://requirejs.org/docs/api.html#config-shim
  jquery:
    exports: 'jquery'
  jquery_ujs:
    deps: ['jquery']

# Default app name
modules:
  - name: 'application'
{% endhighlight %}

Now it's time to remove all Sprockets directives, like `//= require jquery` from your js files.

You can write your scripts using the <a href="https://github.com/amdjs/amdjs-api/blob/master/AMD.md" target="_blank">Asynchronous Module Definition (AMD)</a> like so:

{% highlight javascript %}
// delta.js file
define(['jquery', 'jquery_ujs', 'turbolinks'], function ($) {

  'use strict';

  var delta = {};

  delta.init = function () {
    this.addLoader('p');
    this.removeLoader('a');
  };

  delta.addLoader = function (element) {
    console.log($(element));
  };

  delta.removeLoader = function (element) {
    console.log($(element));
  };

  return delta.init();

});
{% endhighlight %}

Calling `delta.js` file in your `application.js` file:

{% highlight javascript %}
// application.js file
require(['delta'], function () {

});
{% endhighlight %}

Doing that, just run `rake assets:precompile` and we're done!

## Odd thing

If you're using <a href="https://rails-assets.org/" target="_blank">Rails Assets</a>, there's a bug with the last version of requirejs-rails Gem, I found this but don't know how to fix yet, the only solution for me was to downgrade the Gem to `0.9.3` version. <a href="https://github.com/jwhitley/requirejs-rails/issues/188" target="_blank">Here's the issue</a>.

## Wrapping up

RequireJS is a great solution to write modularized and decoupled JavaScript, but sometimes it can be unnecessary. I recommend you to take a look and test it, not only RequireJS, but <a href="http://browserify.org/" target="_blank">Browserify</a> also, after all, we are not forced to use these solution.

Cya!