function store(){
		chrome.tabs.create({url: chrome.extension.getURL('sol.html#asWindow')});
}