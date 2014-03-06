---
title: Bookmarklet for Page Speed Insights
author: Caleb Grove
date: 2013/09/02
layout: post
description:
tags: web-dev
robots:
---

Getting tired of having to fire up Chrome every time you want to run PageSpeed Insights because Google hasn't created an extension for your favorite browser? Have no fear, a universal bookmarklet is here! Just drag the link you want to your bookmarks bar.

To launch PageSpeed Insights in a new tab with the current page's URL:  
[→ Run PageSpeed](javascript:(function()%7B%20window.open('https://developers.google.com/speed/pagespeed/insights/?url='+encodeURIComponent(location.href));%20%7D)();)

To launch PageSpeed Insights in the current tab with the page's URL:  
[→ Run PageSpeed](javascript:location.href='https://developers.google.com/speed/pagespeed/insights/?url='+encodeURIComponent(location.href))

You are most welcome.