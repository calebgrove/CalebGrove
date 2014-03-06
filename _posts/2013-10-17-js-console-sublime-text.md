---
title: JavaScript Console in Sublime Text
description: This description will go in the meta description tag
author: Caleb Grove
date: 2013/10/17
tags: web-dev
robots:
layout: post
---

I've been spending a lot of time learning JavaScript over at [Code School](http://codeschool.com). As a very hands-on learner, I needed a fast and elegant way to write the code and view the console output at the same time, preferably within a native application. [Sublime Text](http://www.sublimetext.com) to the rescue! Take a peek at the result:

![Sublime Text Showcasing Javascript Console](/images/js-console-sublime-text-window.png)

There are two slightly different methods to achieve the same result: using JSC (a command-line tool in OS X), or Node.js (cross-platform). If you are running a Mac and don't have Node.js installed, I would recommend using JSC. It's baked right into OS X; the setup is very simple.

## Using JSC

1. In Sublime Text, go to "Tools" > "Build System" > "New Build System…".

2. Replace the placeholder code with this:

		{
		"cmd": ["jsc", "$file"],
		"selector": "source.js"
		}
	
3. Save the file as `JavaScript.sublime-build`.

4. To run a JavaScript file, either type <span class="key">⌘</span><span class="key">B</span> or go to "Tools" > "Build" in the menubar.

One important note: use `debug()` instead of `console.log()` with JSC.
{:.note}

## Using Node.js

Using Node.js is a little more involved, but not by much:

1. Download and install Node.js from the [project homepage](http://nodejs.org/).

2. In Sublime Text, go to "Tools" > "Build System" > "New Build System…".

3. Replace the placeholder code with this:

		{
		"cmd": ["node", "$file"],
		"selector": "source.js"
		}

	If you get `[Errno 2]` in the console when you run the JavaScript, include the path to Node instead of just `node` on line 2. On a Mac, this will probably be `/usr/local/bin/node`.
	{:.note}

4. Save the file as `Node.sublime-build`.

5. To run a JavaScript file, either type <span class="key">⌘</span><span class="key">B</span> (Mac) or go to "Tools" > "Build".