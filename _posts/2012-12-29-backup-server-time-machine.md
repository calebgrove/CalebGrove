---
title: Backup Your Server With Time Machine
description: Please, please like me.
author: Caleb Grove
date: 2012/12/29
tags: web-dev
layout: post
---

Server backups: One of those behind-the-scene jobs that seem to be only an encumbrance with no glory, meaning that it gets pushed on the back burner until that date when a hacker invades your server and erases all your work. By then it's too late though, and you've a hoard of clients on your back demanding that you get their website back up ASAP.  
  
Several months ago, I was experimenting with an AppleScript that would automate some of my publishing workflow. I wasn't careful enough though, because when I ran it, the first thing it did was try to replace EVERYTHING on my server with the folder to be published. Fortunately I had copies of most of the stuff on my hard drive, but it was a nerve-wracking 5+ hours until I had everything working again.  
  
Creating backups of a server using the traditional method (logging into the admin panel, and going though a bunch of dialogs) is never very easy or convenient, and overall leaves much to be desired. You end up with a ton of archives, with no easy way to navigate/restore.
  
I began to look for an automatic, fast, and easy method to create backups.  

## The Solution:

I thought about what the ideal backup setup would be, and then it struck me: **Time Machine!** For those of you who aren't using a Mac, Time Machine is an awesome application that comes bundled with the OS which makes backing up your hard drive easy and automatic. You can launch the application and enter a space-inspired interface where you can view all the history of a certain file/folder on your mac, then restore it from any point in history that you wish.

The only issue is that files have to be on your physical hard drive for it to back them up. You *could* just use a FTP application to manually sync your server to a folder on your drive once a day, but remember, I wanted it to work automatically, which means scheduling. 

## How To:
Pick your poison:  
[Transmit](#transmit)  
[Forklift](#forklift)  
[Yummy FTP](#yummy-ftp)  

### Transmit

[Transmit](https://panic.com/transmit/) comes packaged with some sweet automator actions, so we'll harness one of those.

1. Launch Automator, and choose "Calendar Alarm" from the dialog.

2. From the actions list in the left sidebar, find the "Synchronize" action, and drag it into the workflow canvas.

3. Set it up. The key parts for our purpose are to set the sync direction to **Download**, compare to **Modification Date**, and have **Delete Orphaned Destination Items** checked.

	![Screenshot showing the "Synchronize" automator action.](/images/transmit-backup-setup.png)
	
4. Save the workflow. Another dialog should come up, asking you to name the calendar alarm. Give it a meaningful title, such as "Server Backup Workflow". Hit the save button!

5. Calendar.app will launch. Chose to edit the new event. Set it to repeat daily at some crazy time in the middle of the night.

### Forklift

[Forklift](http://binarynights.com/forklift/) is my FTP app of choice, but it doesn't have any Automator actions or supports Applescripting. However, it does have "Synclets", which will achieve our purpose.

1. In Forklift, navigate to your local backup folder in the left pane, and your server root in the right.

2. With your server pane activated, go to **File > Sync too...** in the menu bar. Mirror these settings:

	![Forklift sync settings with "Sync subfolders", "Sync invisible items", "Determine time offset automatically", "Add items", "Delete orphaned items", and "Update Items with older modification date" checked, and "Filter items" left unchecked.](/images/forklift-backup-setup.png)
	
3. Click **Save as synclet**, and save it to your hard drive.

4. In Calendar.app, create a new event, set to repeat every day at a crazy time during the night.

5. Give the event an alarm set to **Open file (At time of event)**. Pick the synclet that you created in step 3 as the file.

### Yummy FTP

Although it has a sorta' ugly interface, [YummyFTP](https://itunes.apple.com/us/app/yummy-ftp/id492068728?mt=12) is rock solid and packed with an advanced feature set, including good Applescript Support.

1. Launch Automator, and choose "Calendar Alarm" from the dialog.

2. From the actions library (left sidebar), find the "Run Applescript" action, and drag it into the workflow canvas.

3. Paste this script into the text area, making sure that you have changed `"bookmark name"` and `"path/to/local/folder"`.  

		tell application "Yummy FTP"
			set bookmark to "bookmark name"
			activate
			connect bookmark
			using connection bookmark list remote folder "/"
			using connection bookmark list local folder "/Users/Username/folder/path/"
			with timeout of 32766 seconds
				using connection bookmark synchronize "Update Mac"
			end timeout
			disconnect bookmark
		end tell
			
4. Save the workflow. Another dialog should come up, asking you to name the calendar alarm. Give it a meaningful title, such as "Server Backup Script". Hit the save button!

5. Calendar.app will launch. Chose to edit the event "Server Backup Script". Set it to repeat daily at some crazy time in the middle of the night.

## Conclusion

And you're done! You now will have a copy of all the files on your server on your Mac, updated daily, with no more work on your part. Time Machine will do it's stuff, and you will have a super-sweet and uber-awesome way to browse and restore the files on your server.  
