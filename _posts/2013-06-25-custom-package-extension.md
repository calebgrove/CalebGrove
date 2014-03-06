---
title: Associate a Custom Package Type With an App
author: Caleb Grove
date: 2013/06/25
layout: post
tags: mac
---

I was recently looking for a simple notebook app that was centered around Markdown. Unfortunately, I couldn't find one that fit my requirements. When I was listing what I would like to see in a Markdown notebook app, it struck me that all I wanted was included in many text editors: Good syntax support, and a folder/file structure in a sidebar with a simple interface.    However, I wanted a document/package based system, not a file based method of storage. I wanted the notes to be held in containers distributed throughout my project folders, and when those containers were opened, it would launch the app which would list the notes. Lo and behold, it can be done!    1. Choose the app that you want to use to view/edit the files. In my case, I chose TextMate. Locate it in Finder.
2. Control-click on the icon, and choose "Show Package Contents".
3. Find the "Info.plist" file. It is usually located just inside the "Contents" folder. Open it in your favorite text editor.
4. Paste this code inside the `CFBundleDocumentTypes = ( )` parenthesis:   
		{ 		CFBundleTypeName       = "Markdown Notebook"; // Title for the bundles		CFBundleTypeExtensions = (mdnote, mdNote); // List the extensions that you want to use		CFBundleTypeIconFile   = 'Markdown'; // Name of the icon to use. It must be found inside App/Contents/Resources/		CFBundleTypeRole       = Editor; // The role of the application for this bundle type		LSTypeIsPackage        = 1; // Is the bundle a package (folder+extension)? 1 if yes, 0 if no.		},5. Adjust to your liking and save the plist.
6. Launch Terminal and run this command to refresh the file extensions associations list:

		/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -kill -r -domain local -domain user;killall Finder;echo "The file extensions associations list cache has been emptied"  

