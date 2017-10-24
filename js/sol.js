$(document).ready(function (){
chrome.storage.local.get('value', function(res) {
          // Notify that we saved.
		  console.log(res.value);
         $("#sol").text(res.value);
		})
})