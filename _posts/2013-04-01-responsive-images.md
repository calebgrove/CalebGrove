---
title: Responsive Images in Freeway
author: Caleb Grove
date: 2013/04/01
tags: responsive freeway
layout: post
---

One of the most important principles behind responsive websites is that they should be usable and look great on all devices without having to serve up a different website version. This means that you are considering all your users and their goals, not just a select group of desktop dwellers.

Today we will be looking at optimizing your images for responsive websites built in Freeway Pro. We will be working specifically with [Backdraft](http://backdraft.onrampwebdesign.com), but this should apply to all responsive websites.

## Loading...

One of the bigger problems that we run into with responsive websites is a potentially hefty load time. It seems that the best way to shrink the load time would be to serve smaller sized graphics to smaller devices. Sadly, at this time there is no way to do this just within HTML. While the W3C is working on a way to implement this, we have to use workarounds.

Enter [Adaptive Images](http://adaptive-images.com) by Matt Wilcox. This uses PHP to scale the images for the device. This is particularly handy if you have some huge graphics on your website (like the hero image module in Backdraft). Instead of your mobile visitor downloading a 1200px wide graphic that gets scaled by the browser to 360px wide, your server automagically creates and caches different image versions and sends them to the correct devices. This means much faster load times!

To use, download [Adaptive Images](http://adaptive-images.com), open the `adaptive-images.php` file in your favorite text editor, and replace line 15 with this:

~~~~ javascript
$resolutions = array(1159, 928, 700, 570, 480); // the resolution break-points to use (screen widths, in pixels, customized for Backdraft)
~~~~

Save, then move `adaptive-images.php` to the root of your server (where the index.html file is placed), and deposit this just after the <head> tag on all your pages (use the master page for ultimate convenience)...

~~~~
<script>document.cookie='resolution='+Math.max(screen.width,screen.height)+'; path=/';</script>
~~~~

...then add this code to your `.htaccess` file:

~~~~ apache
# BEGIN ADAPTIVE IMAGES
<IfModule mod_rewrite.c>
	Options +FollowSymlinks
	RewriteEngine On
	RewriteCond %{REQUEST_URI} !assets
	RewriteRule \.(?:jpe?g|gif|png)$ adaptive-images.php
</IfModule>
# END ADAPTIVE IMAGES
~~~~

Your mobile users should see a marked improvement in load time!

Another thing you should be doing for all your websites, responsive or not, is to run Freeway's image outputs through [ImageOptim](http://imageoptim.com). It's free, easy, and will reduce your image file size without decreasing quality. You have no excuses.
{:.note}

## Retina Ready

Retina (or just really high DPI) displays have become the norm in the world of mobile devices. This is now a fact of life and as most such things, has both bad and good news. The bad news: regular raster graphics, like .png, .jpeg, .gif, and .ico, will look just terrible on these screens, especially when you employ the method outlined above. The good news: This is easy to fix.

Just serving up 2x graphics is easy peasy. You will want to create the image at 2x the size that is will be displayed at, then import as a pass-through. However, you are then requiring all your users to download the @2x version which consumes bandwidth and slows loading. Not what you want to do at all!

Never fear, for Adaptive Images also conditionally serves up retina quality graphics! All you have to do is use this in the `<head>` instead of the above script:

	<script>document.cookie='resolution='+Math.max(screen.width,screen.height)+("devicePixelRatio" in window ? ","+devicePixelRatio : ",1")+'; path=/';</script>

Keep in mind that this will drastically increase the load time for retina devices, so this alternate script is best used for image-light websites.

For .ico images, like a favicon, use Icon Slate to create a favicon that has both 32px and 16px components (the icon creator that comes with Xcode will create an .ico that Chrome destroys). Retina devices will use the 32px resource, while traditional displays will utilize the 16px version.

## Introducing SVG

Scaleable Vector Graphics are often seen as the magic pill for responsive and retina imagery. They are not really images in the strictest sense, as they are text-based and are drawn by the browser. This makes them infinitely scalable, sharp at all sizes, and super lightweight. Also, they can even be modified via CSS for you code wizards out there!

SVGs are best used for vector based images. Sorry, but they won't work for photographs! If you want to create a SVG, you will need a program that works with vectors. My favorite is Sketch.

The one downside is that they won't work in IE8 and older versions of Android. However, [Walter Davis](http://walterdavisstudio.com) has come through with a spectacular action that will create a jpeg fallback. Download the action here. To use it, simply export the SVG at the same size as the graphic box that you are going to place it in, then from within Freeway select the box, and choose "File > Import". Choose the SVG, and import it (not as a passthrough!). Apply the action to the graphic item, and *prest-o-change-o*, you have a jpeg fallback!