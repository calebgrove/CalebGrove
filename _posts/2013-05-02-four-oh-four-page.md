---
title: Creating a 404 Error Page
author: Caleb Grove
date: 2013/05/02
layout: post
description:
tags: web-dev freeway
robots:
---

Nothing's worse than following a link to a website and finding your browsers default 404 page. From a UX perspective, those pages are *evil*. It's bad enough that the page doesn't exist, but there is no easy way for the visitor to try and find the page they were looking for, or even navigate to your home page!	

Create a custom 404 error page with Freeway is really easy, so let's get started:

1. Create a new page, and name it something like "This page doesn't exist!"
2. Change the filename of the page to `404.html`
3. Build the page. At there very least, it should have:	
	* A non-technical explanation of what went wrong (bonus points if it's humorous!).
	* A call-to-action. This might just be a link to your home page, or a [search field](http://www.softpress.com/kb/questions/131/Putting+a+simple+search+feature+on+a+website).
	* The navigation menu and website title.
	* The default website footer.
4. Add this line to your [.htaccess file](understanding-htaccess-for-humans):
	
		ErrorDocument 404 http://example.com/404.html

	Obviously, change `example.com` to your domain. The .htaccess file is located at the domain root (the same place as your `index.html` file). Keep in mind that the .htaccess file is usually invisible, so you will have to set your FTP client to show hidden files to see it. If it doesn't exist, create a new file using your favorite text-editor, save it as `htaccess.txt`, then after you upload it to your server rename it to `.htaccess`. For more information on working with this file, read [Understanding .htaccess - for Humans](understanding-htaccess-for-humans).

5. Go a test it!
