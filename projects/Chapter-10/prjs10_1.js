let pn = document.getElementById("pn"), 
    rm = document.getElementById("reminder");
pn.onfocus = function() { 
    rm.innerHTML = "Format: 123-456-7890";
};
pn.onblur = function() {
    rm.innerHTML = "";
};

