---
layout: post
title: "Truncating string with CSS"
date: 2014-02-08 05:00:00
categories: blog
description: Because sometimes CSS > JS
---

Sometimes you need to truncate a string, to fit it on a space.

Let's say we have this scenario:

<p data-height="187" data-theme-id="0" data-slug-hash="KIDsq" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/AgtLucas/pen/KIDsq'>KIDsq</a> by AgtLucas (<a href='http://codepen.io/AgtLucas'>@AgtLucas</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

But actually, you don't want that `<p>` tag to break the line, actually you want to break the string to fit in one line.

So, you can use CSS to do this:

{% highlight css %}
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
{% endhighlight %}

And you're done:

<p data-height="268" data-theme-id="0" data-slug-hash="tHKlx" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/AgtLucas/pen/tHKlx'>tHKlx</a> by AgtLucas (<a href='http://codepen.io/AgtLucas'>@AgtLucas</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

This is really useful!

<script async src="//codepen.io/assets/embed/ei.js"></script>