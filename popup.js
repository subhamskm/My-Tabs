let changeColor = document.getElementById('opentab');

/*chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});*/

changeColor.onclick = function (element) {
    /*let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });*/
    var hrefs = ["https://www.google.com/", "https://www.facebook.com", "https://www.youtube.com/", "https://www.gmail.com"];

    for (i = 0; i < hrefs.length; i++) {
        console.log(hrefs[i]);
        if (i == 0) {
            chrome.tabs.update({ "url": hrefs[i] });
        }
        else {
            chrome.tabs.create({ "url": hrefs[i] });
        }
    }
};