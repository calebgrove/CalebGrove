---
layout:     post
title:      Responsive Text in Freeway 7
date:       2014-09-04
tags: freeway responsive
---

[Download the demonstration Freeway document.](/download/Responsive-Text.freeway)
{:.download.freeway}

**Update:** Since I wrote this article, Softpress has released an update for Freeway that allows you to create responsive text using a nifty GUI. This is much better than the methods outlined below. [See their knowledgebase article on the topic](http://www.softpress.com/kb/questions/509/Changing+style+attributes+at+breakpoints).
{:.note}

Softpress Systems has recently released [Freeway Pro 7.0](http://www.softpress.com/freeway-pro/), their tool that allows designers to create websites visually. The flagship feature in this update is the ability to create responsive websites *without writing code*.

Yet, as well all know, that is only *mostly* true. There will always be things that you will need to code by hand - regardless of which tool you use. Responsively resizing text is one of those for Freeway Pro 7 right now. It can be done, but not by using any of Freeway's WYSIWYG tools.

Fortunately, responsive-izing text actually pretty straightforward, even if though it is not built-in functionality. While there are numerous methods to achieve roughly the same effect, we will only be looking at the two techniques that I find to be the most "designer-who-doesn't-like-code" friendly.

The first method employs Freeway's awesome **Extended** dialog. While this is the easiest way, it's quite limited in practice. The second technique will require some modification of code, but it's far more flexible and powerful. Read through both, [deconstruct the demo document](http://cl.ly/XKtR/download/Responsive%20Text.freeway), and try it on your own.

Also, this tutorial assumes that you are using sane styling practices and are using [Freeway's style system instead of the inspector to style your text](http://www.softpress.com/kb/questions/230/Creating+Custom+CSS+Styles+in+Freeway).

## Using the Extended Dialog

The first thing that you need to know is that any text style that you are using that sets the size of the text needs to be applied to a HTML item that contains the text, not to the text itself. In other words, you can’t highlight text and apply the style that way, the style needs to instead be added to the parent HTML item.

Now, once you have that done, it’s time to make it _responsive_. First, activate the breakpoint you want to resize the text at. Now, right-click on the HTML item that contains the text, and in the menu click **Extended**. Hop over to the `<div style>` tab. Add this entry:

|  Name   |  Value  |
|   - -   |   - -   |
| `font-size` | `20px` |

Of course, change `20px` to whatever you want it to be. This can even be a `em` value if you roll that way.

Preview the site in your browser and shrink the window. You should see the font size shrink when you hit that point.

The biggest limitation with this method is that it can’t be applied globally (unless you are doing it to a master page). It will only change the font size of the element that you have it applied to. Also, styles must be added to the HTML container, not the text itself, or your extended value won’t override it at the breakpoint.

## Using Custom CSS

Using your own CSS to adjust font-size is easier than you would think.

First, apply your text style however you would like to in Freeway. Jot down the name of the style, you will need it in a second.

Now, we need to write the CSS. In Freeway’s menubar, go to **Page > HTML Markup… > Before </head>**. If you want to font size adjustment to be global, you will need to do this on a master page.

Paste this in:

    <style>

    /* 1100px breakpoint */
    @media screen and (max-width:1000px) {
        .mystyle { font-size: 30px; }
    }

    /* 768px breakpoint */
    @media screen and (max-width:768px) {
        .mystyle { font-size: 20px; }
    }

    </style>

Some things to note:

* Change `.mystyle` to the name of the text style in Freeway that you want to adjust, of course, keeping the dot prefix.
* Tweak the breakpoint sizes to suite what you want - and even add your own, but just make sure that the breakpoints are sorted in descending size (so the larger breakpoints should be first).
* Of course, change the font-size to taste.

The nice thing about this setup is that any text on the page that uses the `mystyle` style will obey your custom font sizes, and if you do this to a master page, or use an external stylesheet (*fancy*) any text across your site that uses the style will obey your will.

## End Notes

Which method you choose is up to you. As a rule of thumb, the first method is best if you are just trying the change the font size of one unique element in your website (like a bit of huge text on the homepage), while the latter method is far better if you need to adjust the size of large amounts of text across the website.

Of course, there are nicer, prettier ways of doing this ([relative font size units like `em`](http://cssway.thebigerns.com/products/flexible-typography/)), but I find that the above methods are the most Freeway and noob friendly. Once you are comfortable changing pixel-based dimensions, look into using the more advanced techniques - they can be really nice and easy once you understand them.
