var thisDocument = app.activeDocument;
var textFrames = thisDocument.textFrames;
if(thisDocument.colors.item("My Swatch") == null) {
thisDocument.colors.add({name:"My Swatch", model:ColorModel.process, colorValue:[100, 0, 0, 0]});
}

for(var i = 0; i < textFrames.length; i++) {
    theseLines = textFrames[i].lines;
    for(var w = 0; w < theseLines.length; w++) {
                    theseLines[w].fillColor = thisDocument.colors.item("My Swatch");
            }
    }

