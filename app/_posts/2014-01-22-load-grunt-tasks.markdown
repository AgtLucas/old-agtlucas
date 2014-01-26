---
layout: post
title: "Load Grunt Tasks"
date: 2014-01-22 20:55:00
categories: blog
description: Using Load Grunt Tasks plugin
---

TL;DR

Let's say you have a Gruntfile like this:

{% highlight javascript %}
'use strict';

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Compass
    compass: {
      // foo...
    },

    // RequireJS
    requirejs: {
      // foo...
    },

    // Connect
    connect: {
      options: {
        // foo...
      }
    },

    // Watch
    watch: {
      // configuration...
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['connect', 'watch']);
}
{% endhighlight %}

No problem, right? Yeah, but take a look in how many `grunt.loadNpmTasks` we have, for each plugin that we're using, we need to enable them in our Gruntfile. This can be really painful when we're using a lot of plugins.

To solve "this problem", we can use a plugin (oh rly?) to load all our plugins in our Gruntfile, this plugin by <a href="https://github.com/sindresorhus" target="_blank">Sindre Sorhus</a> is called <a href="https://github.com/sindresorhus/load-grunt-tasks" target="_blank">load-grunt-tasks</a>.

Our Gruntfile using load-grunt-tasks plugin:

{% highlight javascript %}
'use strict';

module.exports = function(grunt) {

  // Load tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Compass
    compass: {
      // foo...
    },

    // RequireJS
    requirejs: {
      // foo...
    },

    // Connect
    connect: {
      options: {
        // foo...
      }
    },

    // Watch
    watch: {
      // configuration...
    }

  });

  grunt.registerTask('default', ['connect', 'watch']);
}
{% endhighlight %}

Much better, right?