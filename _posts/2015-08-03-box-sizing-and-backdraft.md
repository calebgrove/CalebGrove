---
layout:     post
title:      The Box Sizing Action & Backdraft
date:       2015-08-03
tags:       freeway backdraft
categories: freeway
---

One of the most-common stumbling blocks in [Backdraft](http://getbackdraft.com) is the [Box Sizing action](http://actionsforge.com/actions/box-sizing-fw7). People have never seen it before and don’t know what it does, or why it’s even there. The full explanation is quite lengthy, so I figured it would fit best in a blog post.

First of all, according to the CSS spec, padding actually **adds** to the size of a box – contrary to how your mind works. For example, if you hand-code a HTML box with the width set to 300px, then give it 20px of padding, the actual width of the box in the browser will now be 340px (`width` + `left padding` + `right padding`):

![Example of box-sizing:padding-box](/images/padding-box.svg)

This is easy to deal with in a non-flexible environment – just figure in the size that the padding will add and reduce that from the `width` setting. In fact, Freeway does this automatically when you add padding to a box:

![Example of box-sizing:padding-box recalculated](/images/padding-box-recalculated.svg)
{: #img-recalculated}

However, this becomes a problem when the box is set to a percent-width with fixed (pixel) padding. For example, if you have a box with a width of 50%, and 20px of padding, it will be 440px wide if its parent is 800px wide (hence, the box will actually be **55%** of the width of its parent). If its parent is only 400px wide, it will now be 240px wide (**60%**).

![Example of box-sizing:border-box](/images/percent-width-padding-box.svg)
![Example of box-sizing:border-box](/images/percent-width-padding-box-small.svg)

Did you catch how the overall width percentage increased (**55%** to **60%**)? While the width of the box did get narrower, the padding did not decrease (it's adding 20px to the width regardless of the size of the box). This is why simply reducing the width - as Freeway does - doesn't work properly here. The box will still get too big when the screen becomes smaller.

There is a very simple fix if you are hand-coding: `box-sizing: border-box`. This tells the browser's rendering engine that padding should not add to the width of an element. If a box has its width set to `400px` with 20px of padding, the box will still only be 400px wide – the 20px of padding will be **inside** it. The box will always be the size that you set it to be.

![Example of box-sizing:border-box](/images/border-box.svg)

That's fine and dandy, but Freeway doesn't work that way right now, and probably won't in the near future (this is not an informed statement, but rather a guess).

Nor can you just add the CSS code to your Freeway document and make it work, because Freeway automatically reduces the width  so that it tricks you into thinking that padding isn't adding to the overall width by reducing the `width` setting (see [illustration #2](#img-recalculated)). This means that once you apply the CSS code, all of your boxes will now be too small.

<hr>

As a workaround, Softpress created the [Box Sizing action](http://actionsforge.com/actions/box-sizing-fw7), which applies `box-sizing: border-box` to the item that it's applied to, and then recalculates the width so that the end result matches what you see in the construction view.

And that is what the Box Sizing action is all about.

**P.S. -** The Box Sizing action requires a fixed-width page at each and every breakpoint for it to properly calculate the correct new width value. This obviously poses a problem for flexible/responsive websites, so Softpress has created the [Flexible Page action](http://actionsforge.com/actions/flexible-page), which simply makes the output page flexible again.
{: .note}