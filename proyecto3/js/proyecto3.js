
window.onload = function() {

    const body = document.querySelector('body');
    const textColor = document.querySelector('#textColor');
    const button = document.querySelector('button');

    const colorArrays = ["Aliceblue","Antiquewhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","Blanchedalmond","Blue","Blueviolet","Brown","Burlywood","Cadetblue","Chartreuse","Chocolate","Coral","Cornflowerblue","Cornsilk","Crimson","Cyan","Darkblue","Darkcyan","Darkgoldenrod","Darkgray","Darkgreen","Darkkhaki","Darkmagenta","Darkolivegreen" ,"Darkorange","Darkorchid","Darkred","Darksalmon","Darkseagreen","Darkslateblue","Darkslategray","Darkturquoise ","Darkviolet","deeppink","Deepskyblue","Dimgray","Dodgerblue","Firebrick","Floralwhite","Forestgreen","Fuchsia","Gainsboro","Ghostwhite","Gold","Goldenrod","Gray","Green","Greenyellow","Honeydew","Hotpink","Indianred","Palegreen","Paleturquoise","Palevioletred","Papayawhip","Peru","Pink","Plum","Powderblue","Purple","Red","Rosybrown","Royalblue","Saddlebrown","Salmon","Sandybrown","Seagreen","Seashell","Sienna","Silver","Skyblue","Slateblue","Slategray","Snow","Springgreen","Steelblue","Tan","Teal"];

    button.addEventListener('click', function() {
        let randomColor = colorArrays[Math.floor(Math.random() * colorArrays.length)];
        body.style.backgroundColor = randomColor;
        textColor.textContent = randomColor;
    });
}


