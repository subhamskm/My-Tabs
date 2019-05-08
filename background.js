// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

    var hrefs = ["https://www.google.com/", "https://www.facebook.com", "https://www.youtube.com/", "https://www.gmail.com"];
  
        for(i=0; i<hrefs.length; i++){
          console.log(hrefs[i]);
          if(i==0){
            chrome.tabs.update({"url": hrefs[i]});
          }
          else{
            chrome.tabs.create({"url": hrefs[i]});
          }
        }
  });
