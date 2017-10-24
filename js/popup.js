
$(document).ready(function () {
			 button.onclick = function() {
 chrome.tabs.create({url: chrome.extension.getURL('sol.html#asWindow')});
  };		

	chrome.tabs.getSelected(null, function(tab) { 
		var url = tab.url; 

		if (url.indexOf("http://animevost.org/") > -1) {
			xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);
			xhr.send(null);
			
			xhr.onreadystatechange = function() {
				
				if (xhr.readyState == 4) 
				{ 
					if (xhr.responseText) 
					{
						var data = xhr.responseText;
						//console.log(data);
						var f = $('script',data).text();
					str = f.substring(f.indexOf("var data = {")-10,f.indexOf("};",f.indexOf("var data = {"))+10);
				
					str = str.split("\"");
							//console.log(str);
					var numbers = [];
				var d = 0;
3
}

					for (var i = 0;i<str.length;i++)
					{
						if(!isNaN(str[i]))
						{
							//console.log(str[i]);
							numbers[d]=str[i];
							
							
							d++;
						}
					}
					var urls = [];
						for (var i = 0;i<numbers.length;i++)
						{
							urls[i]='http://play.aniland.org/'+numbers[i]+'?player=4';
						}
					console.log(urls);
					var i = 0;
					var resStr = [];
					urls.forEach(uri => {  // эта функция дает рандом последовательность втф нахуй
  fetch(uri)
    .then(r => r.text()) // Получаем ответ как текст
    .then(data => {
      // Работа с ответом тут через data
	  var f = "filehd";
	  if($(data).find(f)==undefined)f = "file";
	  var str  = data.substring(data.indexOf(f)+9,data.indexOf('.mp4',data.indexOf(f))+4);
						resStr[i]=str+'\r\n';
						//$('#wrapper').append(str+'\r\n');
						i++;
						if(i==urls.length)
						{
									//console.log(document);
							
								var fa=resStr[1];
									
								var be = fa.substring(fa.lastIndexOf('.')-10,fa.lastIndexOf('.'));
							console.log(be);
							
							
									
		resStr.sort(function (a, b){
		var a1=a.substring(a.lastIndexOf('.')-10,a.lastIndexOf('.'));
		var b1=b.substring(b.lastIndexOf('.')-10,b.lastIndexOf('.'));
  if(numbers.indexOf(a1)<numbers.indexOf(b1))
     return -1; // Или любое число, меньшее нуля
if(numbers.indexOf(a1)>numbers.indexOf(b1))
     return 1;  // Или любое число, большее нуля
  // в случае а = b вернуть 0
  return 0
}
)	
		for(var h=0;h<urls.length;h++)
		{
        $('#wrapper').append(resStr[h]);
						}
/* var VRegExp = new RegExp(/^(\n|\u00A0)+/g);  
resStr = resStr.replace(VRegExp, ''); */  


        var theValue = resStr;
		console.log(theValue);
        // Check that there's some code there.
        // Save it using the Chrome extension storage API.
        chrome.storage.local.set({'value':theValue}, function() {
          // Notify that we saved.
          console.log('Settings saved');
		})
        
						}
    })
});

/* 					
						for(var i = 0;i<urls.length;i++)
						{
			xhr1 = new XMLHttpRequest();
			xhr1.open("GET", urls[i], false);
			xhr1.send(null);
				xhr1.onreadystatechange = function() {
				if (xhr1.readyState == 4) 
				{ 
			console.log(xhr1.status);
					if (xhr1.responseText) 
					{
						var dat = xhr1.responseText;
						var str  = dat.substring(dat.indexOf('filehd')+9,dat.indexOf('.mp4',dat.indexOf('filehd'))+4);
						$('#wrapper').append(str+'\n');
					}
				}
				}
						} */
							//$('#wrapper').append(numbers);
						

						
					
				}
			}
		}
		else {
			$('#wrapper').html('«десь нет аудио-файлов!');
		}
	});

	
});
