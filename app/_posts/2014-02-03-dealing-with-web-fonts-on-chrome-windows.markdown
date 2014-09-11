---
layout: post
title: "Dealing with Web Fonts on Chrome Windows version"
date: 2014-02-03 07:55:00
categories: blog
description: How to deal of bad render of web fonts on Chrome Windows version
---

One of the most notable difference in web fonts is when you open your site with that beautiful font on Chrome Windows version. Is really, really ugly and bad renderezid, in fact, on Windows 8 it's not too bad!

You can fix that using a lot of workarounds!

You can set `-webkit-text-stroke` as an alternative to [g]old `text-shadow`, or, you can do something like that:

{% highlight css %}
/* Your @font-face */
/* foo bar */

/* Little hack */
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
      font-family: ‘MyWebFont’;
      src: url(‘webfont.svg#svgFontName’) format(‘svg’);
  }
}
{% endhighlight %}

This is not meant that will solve your problem, it depends of your case and web font, but, can solve!

### Further Reading:

* <a href="http://www.fontspring.com/blog/smoother-rendering-in-chrome-update" target="_blank">Smoother Rendering in Chrome</a>