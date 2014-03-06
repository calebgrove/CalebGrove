---
title: Flexible Images in Freeway
author: Caleb Grove
date: 2013/02/12
layout: post
tags: freeway responsive
---

I was working on a top-secret project when I struck a conundrum. You see, I needed a *flexible-width image* that would work in **all** browsers.  
  
The typical method of achieving this is the either use the Flexible Image action by Softpress, or to open the extended dialog and entering this:

![Freeway "Extended" dialog with width set to 100% and height set to auto](http://1.bp.blogspot.com/-VCNh3vbl6-c/URp2sX8Z1EI/AAAAAAAAC0E/PVsACrPibys/s1600/Screen+Shot+2013-02-12+at+9.06.25+AM.png)

These seem fine and dandy: Safari, Chrome, and Firefox on a Mac? Check. Chrome and Firefox on Windows 7? Check. IE8 and IE9 on Windows 7? Uh...Not cool.  
  
  
Here is the [mobile version](http://spokanecivilwar.com/m/) of [spokanecivilwar.com](http://spokanecivilwar.com/) in Chrome on Win 7:  

![Screenshot showing flexible width image working properly in Chrome](http://1.bp.blogspot.com/-F6hJbhRK4nc/URp3xYznvOI/AAAAAAAAC0Q/JWLkzu7Utt0/s640/Screen+Shot+2013-02-12+at+9.10.43+AM.png)

And here it is in IE9:

![Screenshot showing flexible image collapsing in IE 9](http://2.bp.blogspot.com/-ig2H5QMecGU/URp3xLgNAnI/AAAAAAAAC0M/3iCBYP_e7sw/s640/Screen+Shot+2013-02-12+at+9.10.06+AM.png)

See any difference? The image, when using height:auto; flattens to a 1 pixel high pancake in IE. On a mobile-only site I wouldn't worry about this, as all the mobile browsers are fairly advanced and display the image properly. When this is being implemented on a desktop website however, it's really important that your images don't do this! Remember, IE8 and IE9 account for almost [50% of all browser usage](http://www.smashingmagazine.com/2012/07/09/old-browsers-are-holding-back-the-web/)!

How do we work around this predicament? Simple. Right-click on the image in question, and click on "extended" in the menu. Now, go to the "img style" tab, and click "add". In the name field, enter width and for the value use `auto`. Now, do the same for `height: auto;` and `max-width:100%;`. It should look like this:![](http://3.bp.blogspot.com/-7OZmo_bP5Wc/UT6m0QO379I/AAAAAAAAC2E/RS4XtlgtH5E/s640/Screen+Shot+2013-03-11+at+8.52.52+PM.png)

As always, test it out to verify that it's working. You now should have a IE friendly flexible-width image!