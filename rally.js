
// The onClicked callback function.
function onClickHandler(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    var newURL = "https://rally1.rallydev.com/slm/rally.sp?#/search?keywords=" + info.selectionText;
    chrome.tabs.create({ url: newURL });

};

chrome.contextMenus.onClicked.addListener(onClickHandler);


chrome.runtime.onInstalled.addListener(function() {

  var contexts = ["selection"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Search With Rally" ;
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
    console.log("'" + context + "' item:" + id);
  }

  
});
