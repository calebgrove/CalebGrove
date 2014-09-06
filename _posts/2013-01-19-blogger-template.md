---
title: Building Blogger Templates in Freeway
author: Caleb Grove
date: 2013/01/19
tags: freeway
layout: post
---

![Blogger and Freeway Pro 6 Logos](/images/freeway-and-blogger.png)
	
Although integrating Blogger into your Freeway-created website seems easy at first, there are lots of small nuances that go unmentioned in the official documentary. Here, I will attempt to provide a single, complete, go-to resource for using the Blogger actions.	
	
This tutorial assumes you are using Freeway Pro 5.5, and have a basic knowledge of the Freeway workflow. Now, let's get started!

## What the Blogger Actions Do

As the subtitle above says, we're going to start by talking about what the Blogger Actions do, and what they don't do, as this tends to cause a lot of confusion.	

* They DO create a template for Blogger.

* They DON'T put a Blogger blog on your website (Softpress puts it well: The Blogger Templates suite of Freeway Actions makes it very simple to "brand" a page hosted on Blogger.com's servers so it looks like all the other pages in your site.)

	Note: You still have to upload the files from Freeway to your web server, as that is where all the images and other resources will be stored. The Blogger template will just point to them, much like an HTML email.
	{: .note}

* They DON'T style everything (meaning that if you want the blog *really* custom you'll have to add custom CSS; see the end of this post.)

That second point is where most of the confusion comes from. People sometimes expect the Blogger actions to "embed" a blog on their website, when really all the actions do is generate a Blogger template from the page you created in Freeway. If you are still confused, please read this section again, as everything hinges on this simple fact.	

## Building the Template

### Initial Configuration

Before we get down to the actual construction, we have to get everything all set up.

#### In Freeway 

1. Set the page to XHTML strict. To do this, click on the page title in the sidebar, and in the HTML generation settings pane (3rd from the left) change the output to "XHTML Strict".

2. In the "File" menu, click on "Document Setup". In the upload tab, you should enter the web address and FTP details of where you are going to upload the files, **NOT the something.blogspot.com address that Blogger gives you**. What you enter here will depend on whether your blog is standalone, or if it is part of a larger website.
	
	* Standalone: This address should directly reflect where you want the resources to be stored. Let's say you want to have these files stored in a folder named "blog" that you created with an FTP application. This address will then look like `example.com/blog/`.
	
	* Part of a larger website (and therefor a Freeway document with other pages): Create a new folder in Freeway's page listing pane, title it "blog", and place the template page inside it. Set the URL to `example.com`.

#### In Blogger

1. Go to blogger.com
2. Create a new blog and choose one of the "Simple" themes.

### Construction

Now that we understand what the actions do, it's time to build the template within Freeway. For one simple reason, this is trickier than just sketching in the elements: the page **must** grow and shrink with the blog content. Otherwise, the blog text will overflow its containers and create a mess. There are two ways to create a page that will grow from within Freeway. The first is to use the RPL (Relative Page Layout) action that comes bundled with Freeway 5.5. The other is to build the page inline (aka box-model). Which you choose will depend on your personal preference. Here's a breakdown of the pros/cons of each system and also how they work:
	
#### Inline Construction

This method of construction is the most bullet-proof system available right now. What you're doing is inserting all of the page elements in a text-flow. The page will grow just like a document of text grows as you add more content.	

**Pros:**

* Bulletproof
* Higher level of control
	
**Cons:**

* Difficult to master
* More time to create
	
**How to:** There is really no reason for me to teach this here, as FeebleEagle (aka past Freeway wizard Dan Jasker) wrote [this excellent tutorial on Freewaytalk](http://www.freewaytalk.net/thread/view/31133). I've turned his tutorial into a skeleton blogger template which you can style. Download the inline version of Scribus [here](http://calebgrove.com/download/Scribus.zip).	

#### RPL Construction

What the RPL action does is take a page created in the typical Freeway method (sketching in the elements and dragging them around) and attempt to intelligently make it inline. The problem is that the action won't always know how you want the page to grow, which can have harmful side-effects. Most of these can be avoided by applying the "Remove from Relative Page Layout" action to the troublesome elements, but use this sparingly as it *might* break the page as it grows.	
	
**Pros:**	

* Easy to add to retrofit to a pre-existing page
* Build in the usual Freeway manner
	
**Cons:**	

* Less control over how the page grows
	
**How to:** This is really simple! Build the page as you would a static page in Freeway, and sketch in the actions where you want them to display. Customize the actions styling in the Actions window. Apply the RPL (Relative Page Layout) action to the page. Preview the page and see if everything looks okay. If there is some erratic behavior, you have two options for trying to fix it:	

* Adjust the "Overlap" slider in the action interface. First, bring it up to 50 and preview. If that fixes the issue, bring it down by 10 and preview again. Keep doing this until the page breaks again. Then move the slider up 10 to the last working configuration. If 50 doesn't fix it, move it up by 10 and preview. If you get to 100 and the page is still working, it's time to go to the second method (below).
* Apply the "Remove from Relative Page Layout" action to the element that is causing the trouble. To find which element it is will require some trial and error. Apply the action to an item, preview. If that doesn't fix it, apply to a different item. Keep doing this until you fix the problem. Make sure you aren't applying the Remove from RPL action to a container of the Blogger actions themselves though, as that will defeat the purpose of using the RPL action. If none of these work, then you're stuck building it with the Inline method outlined above.

Alternatively, you can download a RPL version of Scribus (a skeleton Freeway/Blogger template) from [here](http://calebgrove.com/download/ScribusRPL.zip), and style to taste.

### Adding More Widgets

This is all fine and dandy, but what if you want to use some of the Blogger widgets that don't have their own action? It's actually quite simple, you just have to have the Blogger Profile and/or the Blogger Archive action(s) placed inline into a sidebar.	

1. Draw a HTML element (if you're using the RPL method) or insert it into the text flow for an inline model. Name it "sidebar".
2. Double-click on just as if you wanted to type some text into it. An I-bar should appear.
3. In the menu bar, navigate to Insert>Action Item>Blogger Profile or Blogger Archive.
4. Stretch the element to use the entire width of the "sidebar" HTML item.
5. Select the "Sidebar" HTML item and deselect it's height. To do this, go into the inspector and click on the icon right next to the height field.

When you upload the website in Freeway, copy the code to Blogger, and switch to the "Layout" page in the blog's settings you should see your widgets off the the side, and right next to them a "Add a Gadget" link!	

## Using the Template

Now that you've got an uber-awesome template built in Freeway, you have to get that to your blog. The most important thing to understand is that you still have to upload the site files to a web server somewhere as all that Freeway hands to Blogger is the code, not the resources.	

### Publishing Workflow

1. Upload from Freeway to your web server (<span class="key">⌘</span><span class="key">U</span>)
2. Open the Actions window (Topbar > Window > Actions).
3. Select any of the Blogger actions on the page and click on the "Copy to Clipboard" button.
4. Go to [Blogger](http://www.blogger.com/blogger.com) and choose your blog from the listing.
5. Click on the "Template" tab in the sidebar.
6. Press the "Edit HTML" button just under the little preview of the blog. A warning will pop-up, dismiss it.
7. Delete everything from the editing window, and hit Command-V to paste the code from Freeway in.
8. Click the "Save" button. Another dialog will pop-up informing you that there are widgets on your blog that aren't included in the template. Choose to delete them.
9. View your blog!
If you followed the directions above to add more widgets, you can do so now. Simply go to the "Layout" tab, and add to your liking!	

### Custom Domain

You've now got a really awesome looking blog, that really looks just like part of your website! However, once glance at the URL will show that it really isn't. What to do? Set up Blogger to work with your own domain! To do this, start by going to the blog's settings page. Under "Publishing" you will see an option to add a custom domain. Click on it, then click on the "Switch to Advanced Settings" link. Follow the directions!	

> Note: You'll have to use a subdomain like blog.something.com instead of something.com/blog.

## Tips and Tricks

### Web Fonts

If you are using [Google Web Fonts](http://www.softpress.com/kb/questions/276/Using+Google+Web+Fonts) on your blog, or other external stylesheets, you'll have to add a `/` (forward-slash) just before the `>`. For example...

	<link href='http://fonts.googleapis.com/chickenliver' rel='stylesheet' type='text/css'>
	
becomes...

	<link href='http://fonts.googleapis.com/chickenliver' rel='stylesheet' type='text/css'/>

## Custom CSS

Unfortunately, the Blogger actions are pretty lightweight and don't include a lot of styling as they should. This means that you will have to add some of your own CSS to really get it to "fit".

First, you have to figure out what selector you need to style the element. In Safari, open the web inspector, click on the crosshairs button, then mouseover the page until you have the right element highlighted. Click, and you should see the relevant HTML highlighted in the web inspector pane. You should be able to see the class or ID of the element. For example, `<div class="post-outer">` has the class of `post-outer`.
	
Hop over to Freeway, and enter the selector in the "Tag" field of the style editor. If the selector is a class, prefix it with a `.`, if it's an id, use `#`. Immediately tab into the "Name" field, hit the delete key, then tab out of that. You want that "Name" field empty! Click on the extended button and add your styling.	
With that said, here are a few selectors I found particularly helpful:	

* `.post-title` - This will style the post titles. I use it to tweak the bottom-margin.
* `.date.header` - Much like the above, but this one is for the dates.
* `.comments` - For some odd reason Blogger's default font here is Times. Use this to override that and choose your own font.
* `[class^="widget"]` - This selector will style all the Blogger widgets on the page. This is useful if you are adding widgets through Blogger and want to give them a uniform margin or font-family.
* `.body` - I use this tag to apply a font to all the unstyled text on the blog (of which there is a lot of!) for a more uniform appearance.
* `.date-outer` - This is actually the wrapper of each blog post. Using this you can add space between each post, outline them, or give them a background and drop-shadow (like this blog!).

And that's that!
