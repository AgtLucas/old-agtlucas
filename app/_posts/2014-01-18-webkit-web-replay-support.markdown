---
layout: post
title: "WebKit Web Replay Support"
date: 2014-01-18 02:50:00
categories: blog
description: WebKit Replay Support video
---

Later this week, <a href="https://twitter.com/brrian" target="_blank">Brian Burg</a> announced through <a href="https://lists.webkit.org/mailman/listinfo/webkit-dev" target="_blank">webkit-dev list</a>, web replay support on WebKit:

<blockquote>
  “Hello all,

  I’m excited to announce that I’ve begun work on upstreaming web replay support into WebKit. Web replay functionality allows developers to debug their web applications by exactly recording interactions with a web program, and then replaying the resulting execution at will. A prototype implementation has integration with the Web Inspector, and supports many important web features.

  Most replay-related code will be behind the ENABLE(WEB_REPLAY) flag. It will be off by default until folks feel that the feature is ready for feedback through nightly builds.”
</blockquote>

Here's a quick video explaining a bit of this promising feature:

<iframe width="648" height="486" src="//www.youtube.com/embed/ugHAzyQ6H00" frameborder="0" allowfullscreen></iframe>

And here a lot of more information:

* <a href="http://homes.cs.washington.edu/~mernst/pubs/record-replay-uist2013.pdf" target="_blank">A high-level technical description of the prototype</a>
* <a href="https://github.com/burg/timelapse/wiki" target="_blank">Prototype's wiki</a>

Can't wait!