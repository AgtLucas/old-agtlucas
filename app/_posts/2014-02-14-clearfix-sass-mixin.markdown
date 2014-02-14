---
layout: post
title: "Clearfix Sass Mixin"
date: 2014-02-14 08:55:00
categories: blog
description: Simple mixin to use Clearfix (by Nicolas Gallagher)
---

If you're like me and use Sass, probably you know the mixin above, but if you don't, no problem.

In 2011, <a href="https://twitter.com/necolas" target="_target">Nicolas Gallagher</a> present us with <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">his clearfix hack approach</a>, since then this hack has getting very, very popular, and been present in almost every site that I visit every day.

Here's the mixin:

{% highlight scss %}
@mixin cf() {
  &:after,
  &:before {
      content: "";
      display: table;
  }
  &:after {
      clear: both;
  }
}
{% endhighlight %}

Usage:

{% highlight scss %}
.foo {
  @include cf();
}
{% endhighlight %}

Simple as had to be!