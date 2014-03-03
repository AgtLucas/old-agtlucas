---
layout: post
title: "IE 10 Grey Background on anchors tag"
date: 2014-03-03 07:20:00
categories: blog
description: Avoid this weird stuff
---

Maybe, if you use <a href="http://necolas.github.io/normalize.css/" target="_blank">Normalize</a> you never realised but, on IE 10 +, there's a weird behaviour on anchor tags.

When you click on a link/anchor tag without any background, IE 10 add a grey background, it's weird but it's easy to solve:

{% highlight css %}
a:active {
  background-color: transparent;
}
{% endhighlight %}

And you're done. :)