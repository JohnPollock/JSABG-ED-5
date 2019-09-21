setTimeout(function() {
	let stay = confirm("Do you want to continue using this Web site?");
	if (stay === false) {
		window.location = "http://www.google.com";
	}
}, 20000);
