---
layout: post
title: "Chocolatey"
date: 2014-01-26 10:00:00
categories: blog
description: Chocolatey, a must have package manager for Windows
---

If you're a Windows user, and always missed a good package manage like <a href="http://brew.sh/" target="_blank">Homebrew for Mac</a>, or built-in options in Linux, well, you must install <a href="http://chocolatey.org/" target="_blank">Chocolatey</a>, a must have package manager for Windows!

The installation is really easy, just open up your CMD and paste the following code:

{% highlight bash %}
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin
{% endhighlight %}

And we're done, just close and open again your CMD.

To install something, like Git, just type:

{% highlight bash %}
cinst git
{% endhighlight %}

Automagically Chocolatey will download and install Git for us!

That's all.