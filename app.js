function generateHashtag() {
    let str = document.getElementById('hash').value
  
    const strWithCamelCase = str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  
    const strWithHashtag = `#${strWithCamelCase.trim()}`;
    if (str.trim() === '' || str.length > 30){
      return false;
    } else{
      document.getElementById('okay').innerHTML = strWithHashtag;
    }
}

document.getElementById('fff').addEventListener('click', generateHashtag);

var button = document.getElementById('copy');
button.addEventListener('click', function () {
  var ta = document.getElementById('okay'); 
  var range = document.createRange();
  range.selectNode(ta); 
  window.getSelection().addRange(range); 
  try { 
    document.execCommand('copy'); 
  } catch(err) { 
    console.log('Can`t copy'); 
  } 
  window.getSelection().removeAllRanges();
});  
