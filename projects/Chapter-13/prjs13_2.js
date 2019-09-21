function set_it() {
    let thetext = "name=";
    	thename = window.prompt("Please enter your name", "");
    	thetext += encodeURIComponent(thename); 
        expdate = ";expires=Mon, 30 Mar 2030 13:00:00 UTC";    
    thetext += expdate;
    document.cookie = thetext;
}

function read_it() {
    let mycookie = document.cookie;
        namePair = mycookie.split("=");
        greetingDiv = document.getElementById("greeting");
        greetingDiv.innerHTML = `Welcome, ${decodeURIComponent(namePair[1])}!`;
}

if (document.cookie) {
    read_it();
}
else {
    set_it();
    read_it();
}
