var body = document.getElementsByTagName('body')[0];

function takeCookie(cookieName){
  var results = document.cookie.match ( '(^|;) ?' + cookieName + '=([^;]*)(;|$)' );
  if (results){
		//console.log('We found the ' + cookieName + ' cookie!');
		return(unescape(results[2]));
	} else {
		//console.log('We could not find the ' + cookieName + ' cookie.');
		return null;
	}
}

if (takeCookie('readingMode') !== null){
	body.classList.add('darkmode');
}