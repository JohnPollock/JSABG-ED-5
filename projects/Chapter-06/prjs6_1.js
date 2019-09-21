let msg = "", 
    city = window.prompt("What is the name of your city?", "");
if ( (city === null) || (city === "") ) {
  msg = "No city entered. Cannot determine delivery availability.";
}
else {
  switch (city) {
    case "Johnstown" : 
      msg = "We can have items delivered to you in 3 days.";
      break;
    case "Donville" : 
      msg = "We can have items delivered to you in 1 week.";
      break;  
    case "Danieltown" : // fall through
    case "Martyville" : 
      msg = "We can have items delivered to you in 2 weeks.";  
      break;
    default : 
      msg = "Sorry! We do not deliver to your city yet.";  
  }
}
document.write(msg);
