---
layout:     post
title:      Sane Styles
date:       2015-03-10
tags:       freeway styles
categories: freeway
---

It’s time to talk about your sanity. To talk about retaining your sanity. To talk about sane styles.

Launch Freeway, and open your most recent project. In the menubar, go to **Edit > Styles**. See that list on the left? What does it look like? If it looks this...

![list of properly names styles](/images/insane-styles.png)

 ...you are working with insane styles, and need help. Fortunately, you’ve come to the right place, let’s clean this mess up.

Softpress has a very nice a detailed article on this same thing in their knowledgebase. [Check it out](http://www.softpress.com/kb/questions/230/Creating+Custom+CSS+Styles+in+Freeway), by following both tutorials you will walk away with a much better understanding of how this very useful tool works.
{: .note}

## Huh?

In Freeway, every single text appearance setting combo becomes a “style”. Did you make your font orange? A style just got created. Made it bold? A style just got created. Made it orange *and* bold? A style just got created.

You can view (and edit) all of these styles via the style editor, which is accessible via the menubar under **Edit > Styles**.

**Insane styles** are added to the list by Freeway. Whenever you change the type settings through the inspector, Freeway will create a new style. Because Freeway can’t read your mind, it will name the styles `style1`, `style2`, `style3`, and so on.

**Sane styles** are added to the list of styles by *you*. They require a little bit of forethought and self discipline, but pay off greatly in long-term time savings, and your sanity. **They will enable you to instantly make global changes to all of the type across your entire website**, which is incredibly useful when your client decides to change from Lato to Clear Sans midway through your construction process. Sane styles are like master pages for your typography.

## Why be sane?

The biggest advantage to using sane styles is that it makes it incredibly fast and easy to change the style of large portions of the text across your website. Did your client suddenly decide they want the text on their website a bright pink? Easy-peasy, 4 clicks later their wish has been turned into reality. How about making all of the second level headers non-bold? Just as easy! This becomes increasingly critical when a project grows past the 10 page mark. Who wants to waste hours of their time clicking-clicking-selecting-clicking-clicking because they decided to change their default font? I don’t know about you, but I’d rather be mountain biking.

It will also help make you a better designer by nudging you toward using consistent and intelligent typographic choices across your website. There is nothing worse than seeing a run of red Comic Sans in a paragraph of black Open Sans. 

## How do I use sane styles?

1. **Step away from the inspector.** Now. Going forward, you will cease to acknowledge that it exists for text styling purposes. If you ever use the inspector to make changes to your type, Freeway will instantly start creating insane styles, so just say no.

    ![A screenshot of the inspector with the font options blanked out.](/images/bad-inspector.png)
    
2. **Plan your typography.** Before you create your styles, you should at least have a rough idea of the typefaces, sizes, colors, weights and line-height that you will be using. This step should be easy if you have a branding style-guide, if you don’t, this is a great time to [create one](http://www.earlybirdstrategy.com/brand-style-guide/).

3. **Begin with a fresh Freeway document.** Don’t try and fix an existing document yet, let’s start with a fresh slate.

4. **[Get your web-fonts configured](http://www.softpress.com/kb/questions/276/Using+Google+Web+Fonts).**

5. **Go to the style editor.** While you can find it under the **Edit** menu, I recommend learning the keyboard shortcut: <span class="key">⌃</span><span class="key">⌘</span><span class="key">E</span>

6. **Check out the default styles.** You will see that Freeway already has six styles already set up for you. Let’s take a look at those, but don’t customize them yet:

    * `p`: This style correlates to the `<p>` HTML element, which wraps full paragraphs of text on the page.
    
    * `h1`: This styles the `<h1>` HTML element. This style will only be used once per page, just for the top level header. Keep in mind that it shouldn't be used for your company name, but for the title of the page. For example, the `<h1>` for this page is "Sane Styles".
    
    * `h2` and `h3`: These are used to style sub-headers on the page. Using these intelligently will give your document a sense of hierarchy. There are no limits to how many times you may use these on a page.
    
    * `em`: This styles the `<em>` HTML element, which is short for "emphasis". Generally speaking, you won't need to customize this style – it's already set to *italic* which is the standard way of showing emphasis.
    
    * `strong`: This is the brother to `em`. It styles the `<strong>` element. You will rarely need to customize this style, it's set to **bold** text, which is the standard method of communicating strong (important) text.

7. **Create your baseline style**. Click on the **+** at the bottom-left of the style editor window to add a style. In the **Tag** field, enter `body`. Press the tab key once, hit the delete key, and press tab again. This should leave the **Name** field blank.

    ![A screenshot of a correctly configured body style.](/images/body-style.png)
    
    This style will apply to *all* the text across your website because it targets the `<body>` HTML element, which contains the page, so it's important to set this up correctly. To add a setting, click on the **+** button to the right of the **Character**, **Text Effects**, or **Paragraph** headings. A quick word about each of these is in order:

    - **Character** has settings under it that affect the styling of the characters. Most of the settings that you will be working with will be under this heading, such as font, color, weight, style, case, etc.
    
    - **Text Effects** contains special text effects, like shadow, background, opacity, and others. Generally speaking, you should avoid using most of these settings for the users sake, and many of the settings will only work for graphic text anyway.
    
    - **Paragraph** has settings that apply on a paragraph-by-paragraph basis, like align (left, right, center, or justify), line-height ("leading"), and indent. If you have a paragraph setting applied, you can only apply the style to entire paragraphs, not short sections of text inside a paragraph.

8. **Time to customize!** Let’s start with the newly-created `body` style, as it will become the baseline/default style. In the right side of the style editor, you should see any styles that have been set, which in this case will be nothing (some of the styles, like headers, already have some settings applied for you).

    ![Properly setup body style.](/images/body-configured.png)

    Let's set the default font, size, and color for now. Generally speaking, you want to offload as much of the styling power to the `body` style as you can. It will set the baseline styles across your entire website, all of the other styles will just tweak the settings of the `body` style.

    To the right of **Character**, click on the **+** button and choose **Font**. You will see two dropdown menus appear. The top one will apply to regular HTML text, and the bottom one will apply when the text will end up being a graphic. Set both to the font of your choosing.
    
    Do the same for the size and color, and any other settings you want be set as the default.
    
9. **Rinse and repeat for the heading styles.** Something to note, though, is that the styles you applied to `body` will trickle-down to the heading styles. That means that unless you override them in each style, the headers will just pick up the settings from `body`. This is very handy, as it means that you only have to tweak a few settings, like size, for each style instead of starting over again. OK out of the style editor when you think you are happy.

10. **On a blank page in your Freeway document, and type in some filler text.** Type, don’t paste. Pasting text will cause Freeway to create an insane style, which is not what we need right now. If you want to paste text, you will first need to clean it by pasting it into a plain-text editor first, or using a text-cleaning utility. Your text should immediately inherit the `body` style (and the `p` style, unless you are working with a list or some other specialty element).

11. **Apply the h1 style to some of the text.** Highlight it, then open the inspector. Switch to the right-most tab. Now, click on the **+** icon next to **Text** and choose **h1**.

    ![Select h1 in the dropdown.](/images/select-h1.png)
    
    You will notice a little ¶ to the left of the style name, that means that it is a style that can only be applied to entire paragraphs, not just a section of text inside a paragraph. In Freeway, a paragraph is a string of text separated with a return. You will only see this when you are dealing with headers or alternately styles that have some of the settings set under the **Paragraph** heading in the style editor.
    
12. **Do the same for `h2` and `h3` to flex your new-found muscles.** Just for fun, apply the `h3` style to three different blobs of text, then open the style editor and change the color. Check it out – all three of them will have been updated to the new color! This is the beauty of using sane styles. ♥

## I need more variety!

Six or seven styles are not enough for most projects. For example, on [jvidartdesign.com](http://jvidartdesign.com), I needed an additional style for the bright red “SOLD” on the [artwork pages](http://jvidartdesign.com/galleries/2015/newyear1.html). Fortunately, it’s easy to add your own custom styles:

1. Open the style editor.
2. Click on the **+** button at the bottom-left of the window.
3. Name your style intelligently. Don’t name it something like `red`, for if the project requirements changed and you had to change the color to blue, it could get really confusing. A better name would be `sold`, if you were using the example above. Don’t use a tag name unless you know what you are doing (see the brain dump below).
4. Style to taste. Remember that it inherits the styling of `p`, so only change the settings that you must.
5. Apply it. Done!

## Closing brain dump

* If you have any questions or comments, feel free to shout them out at [the corresponding Freewaytalk thread](http://freewaytalk.net/thread/view/159812).

* For styles that use a name rather than a tag (if you noticed, all of the default styles use the tag field rather than the name field in the style editor, but custom styles can use the name field), you can apply the style to the containing HTML item instead of directly to the text. This is super-useful when you want all of the text inside a HTML item to have a different default style than the rest of the text on the website. In fact, it’s usually *preferred* to apply the style to the container rather than to apply the style directly to the text. It results in less code bloat and is easier to work with.

* If you look in the style editor, and see that you accidentally introduced some insane styles, you should remove them. However, if the style is applied to text, you want to be sure that you can delete the style without messing up your website. One easy way to do this is to set the color of the insane style to magenta. It should now be easy to find where you have the style on the website.

* You may be wondering *what the heck is the difference between “tag” and “name”?* That would be very understandable.

   Here’s the technical explanation: When you apply a “tag” style to some text in Freeway, it will actually wrap the text in the tag that you entered in the HTML output. For example, when you apply the `h1` style to some text, it changes the HTML output to this:

        <h1>Some text</h1>
    
    That is why it's important that you only create tag-based styles that correlate to an actual HTML element. Otherwise, you will end up with HTML that doesn't validate. When you use a tag style you are actually changing the semantics of the output, which can have quite a difference in how robots see your website.
    
    On the other hand, a style with just a name doesn't change any semantics. Instead, it just adds a CSS class (a fancy name for a styling hook) into the HTML. If you apply a style with just a name to a run of text, it will create a `<span>` to mark up the text, which has no semantic influence:
    
        <span class="myStyle">Some text</span>
    
    If you apply the style to a HTML item, it will attach the class to the HTML item. This is typically a `<div>` (another element with no semantic meaning), unless you are using one of the fancy HTML5 elements:
    
        <div class="myStyle">
            <p>Some text</p>
        </div>