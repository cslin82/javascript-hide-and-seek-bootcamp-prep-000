function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  var targets = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < targets.length ; i++) {
    targets[i].innerHTML = n + parseInt(targets[i].innerHTML);
  }
}