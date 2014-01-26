---
layout: post
title: "Using Flexbox - Part I"
date: 2014-01-12 20:38:00
categories: blog
description: Using Flexbox
---

Yesterday <a href="http://agtlucas.com/blog/2014/01/11/flexbox.html" target="_blank">I talked a little about CSS Flexible Box Layout Model</a>, and today I'll show you how to use Flexbox (I'll try).

Take a look at the image below:

<img src="/img/flexbox.jpg" alt="Flexbox">

To achieve that with flexbox, you should do something like this:

{% highlight css %}

.flex-container {
  display: flex;
}

.flex-item {
  background: gray;
  height: 400px;
  margin: 5px;
}

.mini-box {
  width: 200px;
}

.mega-box {
  width: 400px;
}

{% endhighlight %}

That's it... stay tuned for the Part II.