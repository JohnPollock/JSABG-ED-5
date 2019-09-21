let items = 0, 
    msg = "", 
    city = window.prompt("What is the name of your city?", "");
if ( (city === null) || (city === "") ) {
  msg = "No city entered. Cannot determine delivery availability.";
}
else {
  switch (city) {
    case "Johnstown" : 
      msg = "We can have items delivered to you in 3 days.";
      items = 10;
      break;
    case "Donville" : 
      msg = "We can have items delivered to you in 1 week.";
      items = 5;
      break;  
    case "Danieltown" : 
      // fall through
    case "Martyville" : 
      msg = "We can have items delivered to you in 2 weeks."; 
      items = 2; 
      break;
    default : 
      msg = "Sorry! We do not deliver to your city yet.";  
      items = 0;
  }
}
document.write(msg);
if (items > 0) {
  document.write("<p>We can deliver up to " + items + " items to your city.</p>");
  document.write("<p>Print this out, write your item numbers below, and mail it to us to order.</p>");
  for (let count = 1; count <= items; count++) {	
    document.write(count + ". __________<br>");
  }
}
