var replacements = [];
var replaced = "Trump";
var replacer = "Cheeto";
replacements.push([new RegExp(replaced),replacer]);
replaced = "Sessions";
replacer = "Dumbo";
replacements.push([new RegExp(replaced),replacer]);

var it = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT);
var node;
while (node = it.nextNode()) {
  console.log(node);
}

// $("body *").each(function() {
//   //Pull out child elements
//   var tmp = $(this).children().remove();
//   //Pull out text for manipulation
//   var text = $(this).text();
//   for (var pair in replacements) {
//     //Replace one text with the other
//     text = text.replace(replacements[pair][0],replacements[pair][1]);
//   }
//   //Reassemble the element in the DOM
//   $(this).text(text);
//   $(this).append(tmp);
// });
