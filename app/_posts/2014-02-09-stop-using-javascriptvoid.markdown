---
layout: post
title: "Stop using javascript:void(0)"
date: 2014-02-09 05:00:00
categories: blog
description: It's 2014 already, let's move Web forward!
---

It's 2014 already, and people still using `<a href="javascript:void(0)"></a>` or `<a href="javascript:"></a>` for modern browsers.

The problem is, that works, I think is for that, that people still using it, but actually, this is a bad thing, doing something like that, you're putting script in a wrong place.

As Pascal Hartig said on Twitter:

<blockquote class="twitter-tweet" lang="en"><p>.<a href="https://twitter.com/fcamblor">@fcamblor</a> Easy: If there&#39;s no semantically sound href, it&#39;s not a link, it&#39;s a button. Sometimes easier said than done. e.preventDefault()</p>&mdash; Pascal Hartig (@passy) <a href="https://twitter.com/passy/statuses/432595238159650816">February 9, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

It's 2014 already, let's move Web forward!