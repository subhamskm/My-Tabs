// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var hrefs = ["https://www.google.com/", "https://www.facebook.com"];
  
        for(i=0; i<hrefs.length; i++){
          console.log(hrefs[i]);
          /*if(i==0){
            chrome.runtime.sendMessage({"message": "update_current_tab", "url": hrefs[i]});
          }
          else{*/
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": hrefs[i]});
          //}
        }
      }
    }
  );