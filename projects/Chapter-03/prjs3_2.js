var myheading = "<h1>This is My Web Page!</h1>",
linktag = "<a href=\"http://www.webxpertz.net\">Web Site Link!</a>",
sometext = "This text can be affected by other statements.",
begineffect = "<em>",
endeffect = "</em>",
beginpara = "<p>",
endpara = "</p>";
document.write(myheading);
document.write(begineffect + sometext + endeffect);
document.write(beginpara + linktag + endpara);
document.write(beginpara + sometext + endpara);
