$(document).ready(function() {
  	$("#story").hide();
  	$("#changelink").click(function(event) {
    	event.preventDefault();   
      	$("#story").slideDown(3000, function() {
        	$("#story").fadeOut(10000);
      	});
  	});
});
