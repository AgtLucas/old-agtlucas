---
layout: post
title: "CSS Variables"
data: 2014-01-08 08:50:00
categories: blog
description: An introduce to CSS Variables
---

The CSS variables is a experimental technology, still a <a href="http://dev.w3.org/csswg/css-variables/" target="_blank">editor's draft on W3C</a>.

> This module introduces cascading variables as a new primitive value type that is accepted by all CSS properties, and custom properties for defining them.

### How to use?

{% highlight css %}
:root {
  var var-much-dark: #000;
}

p {
  color: var(much-dark);
}
{% endhighlight %}

Easy, isn't? Ok, not so easy and simple as Sass/Less/Stylus, but I think it's a great start.

### Can I use this today?

Sure you can, but you shouldn't. The only browsers that support CSS variables today are Firefox Nightly (29+), Chrome (Using Version 31.0.1650.63).

If you would like to test, <a href="http://agtlucas.github.io/css-variables/" target="_blank">here's a sample that I've made</a>.

### Further Reading:

* <a href="http://dev.w3.org/csswg/css-variables/" target="_blank">Editor's Draft</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">Using CSS variables - MDN</a>