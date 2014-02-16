---
layout: post
title: "Sass extend"
date: 2014-02-16 07:44:00
categories: blog
description: A really cool feature
---

A really cool stuff about Sass and other css pre-processors, are their capability and features that allow you to reuse your code.

Alongside with `@mixin`, Sass has a built in feature called `@extend`.

#### Example:

{% highlight scss %}
.foo {
  background: teal;
}

.bar {
  @extend .foo;
  // other styles
}
{% endhighlight %}

#### Output:

{% highlight css %}
.foo,
bar {
  background: teal;
}

.bar {
  // other styles
}
{% endhighlight %}

In a nutshell, it allow you to share the class properties with another class or element (or id).