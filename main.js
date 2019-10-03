function subject() {
  var sub = ['maths', 'english', 'science', 'geography', 'history'];
  var arrLen = sub.length;
  var arrVal = 0;
  document.getElementById('subject-span').innerHTML = sub[0];
  setInterval(() => {
    arrVal ++;
    document.getElementById('subject-span').innerHTML = sub[arrVal % arrLen];
    //console.log('Interval')
  }, 1000);
}
