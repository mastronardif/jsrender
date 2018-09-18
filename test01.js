var jsrender = require('jsrender');
//$ nohup: ignoring input and redirecting stderr to stdout
jsrender.views.tags("fullName", "{{:first}} {{:last}}"); // Register custom tag

var tmpl = jsrender.templates('./templates/card.timeentry.001.html'); // Compile template

var data=[
  {
    "name": "Frank Mastronardi",
    "nickname": "FM",
    "showNickname": true
  },
  {
    "name": "Susan",
    "nickname": "Sue",
    "showNickname": false
  }
];

//r html = tmpl({person: {first: "Jim", last: "Varsov"}}); // Render
var html = tmpl(data); 

console.log(html);