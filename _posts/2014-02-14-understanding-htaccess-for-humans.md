---
layout:     post
title:      Understanding .htaccess - for Humans
date:       2014-02-14
tags: web-dev
---

I'll be helping a new web designer with one of his first websites, and one (or more) of these questions will inevitably be asked:

* "How do I create a redirect?"
* "How do I hide the page file extension for cleaner URLs?"
* "How do I enable compression and caching?"

All these problems can be solved by utilizing the power of the .htaccess file. Too often I find that this file confuses and scares those who could benefit greatly from it. In this post, we will look at what this file is, how to use it, and then I'll share some useful snippets at the end.

## What It Is
In one sentence, the .htaccess file is a **server configuration file** that works on a **directory level**. I doubt this explanation helped you very much, so let's unpack it.

First, it is a **server configuration file**. Web servers are complex pieces of software, and contain a lot of options that allow you to customize almost every aspect of how they serve files. You can access and adjust the vast majority of these options using the .htaccess file.

Second, it works on a **directory level**. Any changes to the server's configuration through a .htaccess file apply to all files and folders in the directory that you place the file in. If you were to put the file in `example.com/folder1/`, the configurations that you set through it will apply to `example.com/folder1/index.html`, `example.com/folder1/about.php`, `example.com/folder1/folder2/`, but **not** to `example.com/index.html` or `example.com/anotherfolder/`.

.htaccess is an invisible system file (that is what the dot before the filename denotes). Hence, it is hidden by FTP clients by default. To work with it, you will need to tell your FTP client to show invisible files (usually in **View > Show Invisible files**).

## How To Use It
The first step is to determine what directories you want the .htaccess file to apply to. In most cases you will want to apply it to the entire site, and if this is so, just place it inside the `public_html` or `www` folder alongside your homepage `index.html` file.

Navigate to the chosen directory using your favorite FTP client (I like [Forklift](http://www.binarynights.com/forklift/); if you are a student, ask about their discount). Set your FTP client to show invisible files.

If the .htaccess file already exists, open it using your favorite text editor ([TextWrangler](https://itunes.apple.com/us/app/textwrangler/id404010395?mt=12) will do the job nicely), and copy-paste the configuration code you want into it, then save.

On the other hand, if there is no .htaccess file, you will need to create one. The easiest way to do this is to create a new file using your favorite text editor on your local machine, name it `htaccess.txt`, upload it to your server, then rename it to `.htaccess`. (If you were to name it `.htaccess` on your hard drive, the computer would recognize it as a system file and make it invisible.)

You should see any changes take effect immediately.

Be careful! If you misconfigure your .htaccess file, it could take your entire site offline or break core functionality. Make sure you test everything thoroughly after making a change.
{:.note}

## Useful Snippets
You can do a **lot** with the .htaccess file, and a quick Google search will reveal people pulling off all sorts of weird stunts with it. Here are a few snippets that I find particularly helpful!

### Permanent Redirects
For when you need to redirect a request for one page to another. A 301 redirect will pass along SEO juice from the old page to the new page.

~~~ apache
# 301 permanent redirect
Redirect 301 /oldpage.html     http://www.example.com/newpage.html
~~~

### WWW to Non-WWW
By default, most web servers will serve your website for both `example.com` and `www.example.com`. This is not ideal, as search engines will view those two URLs as separate, and duplicate, pages. This snippet will redirect `www.example.com` to `example.com`.

~~~ apache
# Redirect www to non-www
<ifmodule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.example\.com$ [NC]
RewriteRule ^(.*)$ http://example.com/$1 [L,R=301]
</ifmodule>
~~~

### Custom Error Pages
If you have built [custom error pages](/four-oh-four-page), this snippet will redirect those errors to your custom pages. Just change the `/NNN.html` part to the respective paths of any error pages you create.

~~~ apache
# Error page redirects
ErrorDocument 400     /400.html
ErrorDocument 401     /401.html
ErrorDocument 403     /403.html
ErrorDocument 404     /404.html
ErrorDocument 500     /500.html
~~~

### Hide File Extensions
Want a nice, clean, and concise URL without creating a ton of directories? Sure thang! This snippet will allow HTML pages to be served extension-less and redirect any requests for the `.html` version to the new, clean, URLs.

~~~ apache
# Hide .html extension
<ifmodule mod_rewrite.c>
Options +FollowSymLinks -MultiViews
DirectorySlash Off
RewriteEngine On
RewriteCond %{SCRIPT_FILENAME}/ -d
RewriteCond %{SCRIPT_FILENAME}.html !-f
RewriteRule [^/]$ %{REQUEST_URI}/ [R=301,L]
RewriteCond %{ENV:REDIRECT_STATUS} ^$
RewriteRule ^(.+)\.html$ /$1 [R=301,L]
RewriteCond %{SCRIPT_FILENAME}.html -f
RewriteRule [^/]$ %{REQUEST_URI}.html [QSA,L]
</IfModule>
~~~

### Set Cache Expiration
This will tell the browser how long it should cache the page and it's resources, and should help increase your Page Speed Insights ranking. Obviously, change the cache length to suite your website.

Bonus tip: During development, set the expires time to something like `"access 5 minutes"` to save you and your client some frustration. Just be sure to revert this back before production!
{: .note }

~~~ apache
# Set cache expiration
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access 1 year"
ExpiresByType image/jpeg "access 1 year"
ExpiresByType image/gif "access 1 year"
ExpiresByType image/png "access 1 year"
ExpiresByType text/css "access 1 month"
ExpiresByType application/pdf "access 1 month"
ExpiresByType text/x-javascript "access 1 month"
ExpiresByType application/x-shockwave-flash "access 1 month"
ExpiresByType image/x-icon "access 1 year"
ExpiresDefault "access 7 days"
</IfModule>
~~~

### Deflate Files
If [Page Speed Insights](/page-speed-bookmarklet) is telling you that you need to enable compression, this snippet will do the trick by instructing your server to serve compressed files.

~~~~ apache
# Deflate files
<ifmodule mod_deflate.c>
AddOutputFilterByType DEFLATE text/text \
text/html \
text/plain \
text/xml \
text/css \
image/svg+xml \
font/opentype \
application/x-javascript \
application/javascript \
application/x-font-ttf \
application/xhtml+xml \
application/xml \
</IfModule>
~~~~
