---
title: CSS Classes in Hype (Almost)
author: Caleb Grove
date: 2012/12/21
tags: hype css
layout: post
---

One of the current shortcomings of Tumult's [Hype](http://tumult.com/hype/) (a HTML5 animation creator) is that you can't assign CSS classes to elements. However, you can give the element a [CSS id](http://hype.desk.com/customer/portal/questions/340139-setting-custom-html-or-css-attributes-on-an-element). This doesn't seem all that awful, but imagine that you are create a web-app for mobile devices. You are doing all you can to shrink file sizes, which mean using CSS3 gradients instead of regular graphics for buttons. The other reason to go this route is that CSS3 items have no pixels, meaning that they look perfect on a Retina display.

![Screenshot showing a blurry image of a button, and a crisp CSS created button](http://1.bp.blogspot.com/-jjfXZ05dh7M/UKq2hMyI4QI/AAAAAAAAChQ/NdsAVmoqumc/s1600/3733_418548538217377_454820923_n.png){:.aside}

See that picture? It's a screenshot of two identical-until-blown-up buttons. The one on the left is created using about 9 lines of CSS code, whereas the one on the right is a 72dpi image, which weighs in at 4kb (both created using [Sketch](http://www.bohemiancoding.com/sketch/), which exports CSS attributes. SWEET!).

You obviously want to roll with CSS. Throughout your web-app, you need about 20 identical buttons. This is where it begins to get annoying. Because Hype only supports CSS ids which are unique to only one element, it seems as though you can't do this without creating a separate style rule for every single identical element. However, I am here to tell you that all is not lost.There is a little known selector in CSS, and it looks like this:

	[id^='bacon'] {/*styling here*/}
	
What this will do is apply any styling you have assigned to that selector to all elements whose id begins with `bacon`. For example, it would style `<div id="baconislife">`, `<div id="bacon4evr">`, and `<span id="baconisgood">`. You can see it in use below. Just switch through the HTML, CSS, and Result tabs.
	
To recap, this selector will enable you to style any number of elements, given their id's begins with an identical *something*. I'm sure you can now see just how useful this will be when styling multiple items in Hype. For all intents and purposes, you have classes!

Update: Hype 1.6 now supports the ability to edit the document <head> from within the program! See [this](http://tumult.com/hype/documentation/inspectors/#document) for more information. The result: you don't have to export to add the code to the <head>.
{:.note}

Now, how to implement this:

1. Pick what you want to have common between all your id's.
2. In Hype's identity inspector, give each element you want to style an id that begins with what you decided on in step one (in the text area under Unique Element ID).![Hype Inspector](http://3.bp.blogspot.com/-77e1CtghvPY/UNVEFLtajzI/AAAAAAAACvQ/b3w9m1ZWogc/s1600/Screen+Shot+2012-12-21+at+9.24.13+PM.png)
3. Export the file to a folder, making sure you have the "also save .html file" option checked. 
4. Open that .html file in your favorite text editor (I recommend the free [TextWrangler](http://www.barebones.com/products/textwrangler/) for this), and find the `<style>` tag. Just after that, insert your newly learned selector (`[id^='bacon']`) with what you picked in step one replacing `bacon`.
5. Add your declarations. 
6. Although I don't recommended this for most CSS coding, end all of your values with `!important`. This will ensure that Hype's styling does not override your custom styling.
7. Test and deploy your project just as you always have. 

Tada! You now have CSS classes (almost) in Hype!