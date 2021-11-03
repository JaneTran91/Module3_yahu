function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oeMGjSdCgx":
        Script1();
        break;
      case "6WlR5QlWMX9":
        Script2();
        break;
      case "6ESemSHSUIR":
        Script3();
        break;
      case "5dCvc4JzUZ4":
        Script4();
        break;
      case "67M1sOpmxQi":
        Script5();
        break;
      case "6DmyxhwuYMz":
        Script6();
        break;
      case "6OsVzQihxJy":
        Script7();
        break;
      case "5fLXJJS3yId":
        Script8();
        break;
      case "5lkudFzBqdz":
        Script9();
        break;
      case "5XPLneia72k":
        Script10();
        break;
      case "6qJ6Ta3kLEg":
        Script11();
        break;
      case "5tXJVrT962n":
        Script12();
        break;
      case "5V16qEP18H7":
        Script13();
        break;
      case "6j1RY8jhyjY":
        Script14();
        break;
      case "5vM5pivFhMI":
        Script15();
        break;
      case "6kdhKJ2qw17":
        Script16();
        break;
      case "6gGMndSHEf7":
        Script17();
        break;
      case "62iS29GjIdX":
        Script18();
        break;
      case "5Y7csqTwxB9":
        Script19();
        break;
      case "6hWvRLYAQ5O":
        Script20();
        break;
      case "6pdncvxmODA":
        Script21();
        break;
      case "5dc7cZFLjTQ":
        Script22();
        break;
      case "6luM0GMj1HD":
        Script23();
        break;
      case "6NvSz6b6vVp":
        Script24();
        break;
      case "6JpU0MOd1GH":
        Script25();
        break;
      case "5gG0ba72GbA":
        Script26();
        break;
      case "5kw6saSPq8Y":
        Script27();
        break;
      case "6gh7cKpQnyP":
        Script28();
        break;
      case "5dPLw7jqxV7":
        Script29();
        break;
      case "5zGDKrNcRDZ":
        Script30();
        break;
      case "5a2L6kDB89p":
        Script31();
        break;
      case "6T60U24sJqh":
        Script32();
        break;
      case "6m81SetAE2x":
        Script33();
        break;
      case "6ZzRxzr4cQV":
        Script34();
        break;
      case "6LDTIxjICtP":
        Script35();
        break;
      case "6Sg5vEUwew9":
        Script36();
        break;
      case "5juzoVzFGTq":
        Script37();
        break;
      case "6cmyM9qzBo6":
        Script38();
        break;
      case "5dM5a1lRNjw":
        Script39();
        break;
      case "5b5TKiRONjP":
        Script40();
        break;
      case "6iaU1iVAVgV":
        Script41();
        break;
      case "68B6V6vH3hV":
        Script42();
        break;
      case "634qtMJTkSR":
        Script43();
        break;
      case "6Ze3tRE488j":
        Script44();
        break;
      case "5oUCMtbf29F":
        Script45();
        break;
      case "68scB8Rl1Vb":
        Script46();
        break;
      case "6ovnkKUe5wW":
        Script47();
        break;
      case "5gylGDHBgki":
        Script48();
        break;
  }
}

function Script1()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script2()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script3()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script4()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script5()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script6()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script7()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script8()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script9()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script10()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script11()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script12()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script13()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script14()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script15()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script16()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script17()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script18()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script19()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script20()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script21()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script22()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script23()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script24()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script25()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script26()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script27()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script28()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script29()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script30()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script31()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script32()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script33()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script34()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script35()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script36()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script37()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script38()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script39()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script40()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script41()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script42()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script43()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script44()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script45()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script46()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script47()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script48()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

