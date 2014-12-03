var body = document.getElementsByTagName('body')[0];
var darkToggle = document.getElementById('dark');
var lightToggle = document.getElementById('light');

function bakeCookie(name, value, lifespanInDays){
	document.cookie = name + '=' + escape(value) + '; max-age=' + 60 * 60 * 24 * lifespanInDays +'; path=/;';
	//console.log('We baked the ' + name + ' cookie for ' + lifespanInDays + ' days.');
}

function eatCookie(cookieName){
	bakeCookie(cookieName, '', -1)
}

function takeCookie(cookieName){
  var results = document.cookie.match ( '(^|;) ?' + cookieName + '=([^;]*)(;|$)' );
  if (results) {
  	//console.log('We found the ' + cookieName + 'cookie!');
	return(unescape(results[2]));
	} else {
	//console.log('We could not find the ' + cookieName + ' cookie.');
	return null;
	}
}

function readModeToggle(arg) {
	if (this.id === 'dark' || arg === 'darkMode'){
		body.classList.add('darkmode');
		darkToggle.classList.add('current');
		lightToggle.classList.remove('current');
		if(this.id === 'dark'){
			bakeCookie('readingMode', 'dark', 3);
		}
	} else if (this.id === 'light' || arg === 'lightMode'){
		body.classList.remove('darkmode');
		eatCookie('readingMode');
		lightToggle.classList.add('current');
		darkToggle.classList.remove('current');
	}
}

if (takeCookie('readingMode')){
	readModeToggle('darkMode')
}
	
darkToggle.onclick = readModeToggle;
lightToggle.onclick = readModeToggle;
