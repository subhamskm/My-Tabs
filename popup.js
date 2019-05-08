let opentabs = document.getElementById('opentab');

opentabs.onclick = function (element) {
    console.log("clicked");
    var hrefs = ["https://www.google.com/", "https://www.facebook.com", "https://www.youtube.com/", "https://www.gmail.com"];

    chrome.storage.sync.get({ urls: [] }, function (result) {
        var hrefs = result.urls;
        for (i = 0; i < hrefs.length; i++) {
            if (i == 0) {
                chrome.tabs.update({ "url": hrefs[i] });
            }
            else {
                chrome.tabs.create({ "url": hrefs[i] });
            }
        }
    });
};

let savetab = document.getElementById('savetab');

savetab.onclick = function (element) {
    chrome.storage.sync.get({ urls: [] }, function (result) {
        var urls = result.urls;
        chrome.tabs.query({ 'active': true, 'currentWindow': true }, function (tabs) {
            var newurl = tabs[0].url;
            urls.push(newurl);
            chrome.storage.sync.set({ urls: urls }, function () {
                chrome.storage.sync.get('urls', function (result) {
                    console.log(result.urls);
                });
            });
        });
    });
};