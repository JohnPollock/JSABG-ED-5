let getphone = document.getElementById("getphone");
getphone.addEventListener("submit", function(event) {
  	let phone = document.getElementById("phone").value, 
      	tomatch = /^\d{3}-\d{3}-\d{4}$/;
  	event.preventDefault();
  	if (!tomatch.test(phone)) {
    	alert("Invalid phone number entered. Valid format is XXX-XXX-XXXX.");
 	}
}, false);
