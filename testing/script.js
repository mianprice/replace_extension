var replacements = [];
var replaced = "Trump";
var replacer = "Cheeto";
replacements.push([new RegExp(replaced),replacer]);
replaced = "Pellentesque";
replacer = "Hello";
replacements.push([new RegExp(replaced),replacer]);
$(document).ready(function() {
  $("body *").each(function() {
    //Pull out child elements
    var tmp = $(this).children().remove();
    //Pull out text for manipulation
    var text = $(this).text();
    console.log(replacements);
    for (var pair in replacements) {
      console.log(replacements[pair]);
      //Replace one text with the other
      text = text.replace(replacements[pair][0],replacements[pair][1]);
    }
    //Reassemble the element in the DOM
    $(this).text(text);
    $(this).append(tmp);
  });
});
