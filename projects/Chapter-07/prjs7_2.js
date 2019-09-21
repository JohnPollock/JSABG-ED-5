let computer_parts = [ 
    ["Monitors", "LCD Screens", "Vibrant Colors"], 
    ["Motherboards", "Fast"], 
    ["Chips", "Pentium", "Very Fast"], 
    ["Hard Drives", "100-500 GB", "Fast Reading"], 
    ["DVD-ROMs", "Burn CDs", "Burn DVDs", "Listen to both!"], 
    ["Cases", "All Sizes", "Choice of Colors"], 
    ["Power Supplies", "We can get one for any computer!"]   
]; 
let i = 0; 
let j = 0;
for (i = 0; i < computer_parts.length; i++) {
    for (j = 0; j < computer_parts[i].length; j++) {
        if (j === 0) {
            document.write(computer_parts[i][j] + ": ");
        } else if (j === computer_parts[i].length -1) {
            document.write(computer_parts[i][j] + "<br>"); 
        } else { 
            document.write(computer_parts[i][j] + ", ");
        } 
    }
}
