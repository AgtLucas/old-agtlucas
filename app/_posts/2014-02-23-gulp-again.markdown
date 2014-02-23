---
layout: post
title: "Gulp again"
date: 2014-02-23 11:50:00
categories: blog
description: A new look over Gulp
---

Thanks for some people that pointed out my mistakes in my <a href="http://agtlucas.com/blog/2014/01/04/gulp.html" target="_blank">last post about Gulp</a>, I've decided to take a new look over Gulp and so I did it.

The Gulp itself had some changes since the last time that I had played with it, but nothing very different.

Now I get the point, we must chain the tasks to make them work better, AKA, one after another and so on.

#### Sample:

{% highlight js %}
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

/**
 * Styles task
 */
gulp.task('styles', function () {
  return gulp.src('assets/scss/style.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(gulp.dest('build/css'));
});

/**
 * JS task
 */
gulp.task('compress', function () {
  return gulp.src('assets/js/**/*.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

/**
 * Watch task
 */
gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err)
    };

    gulp.watch('assets/scss/*.scss', ['styles']);

    gulp.watch('assets/js/**/*.js', ['compress']);
  })
});

/**
 * Default task
 */
gulp.task('default', ['watch'], function () {
  gulp.start('styles', 'compress');
});
{% endhighlight %}

Is simpler than Grunt in my opinion, and it's clearly fast.

### Further Reading:

* <a href="https://github.com/yeoman/generator-gulp-webapp" target="_blank">Yeoman + Gulp</a>
* <a href="http://markdalgleish.github.io/presentation-build-wars-gulp-vs-grunt/" target="_blank">Build Wars: Gulp vs Grunt</a>
* <a href="http://markgoodyear.com/2014/01/getting-started-with-gulp/" target="_blank">Getting started with Gulp</a>

Thanks <a href="https://github.com/gummesson" target="_blank">Ellen Gummesson</a> and <a href="https://github.com/weblancaster" target="_blank">Michael Lancaster</a>, for the tips and help!