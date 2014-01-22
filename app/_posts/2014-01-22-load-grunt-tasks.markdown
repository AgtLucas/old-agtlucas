---
layout: post
title: "Load Grunt Tasks"
date: 2014-01-22 20:55:00
categories: blog
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

    // TODO: Make RequireJS work properly
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