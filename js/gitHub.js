var gitHub;

var api = 'https://api.github.com/users/yaredkb';

function setup(){
  createCanvas (400,400);

  var button =select('.btn.btn-white-fill');
  button.mousepressed(gitHubAsk);
}
 function gitHubAsk(){
  var url -api;
  loadJSON(url, gotData);
 }