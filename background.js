chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getInterval")
      sendResponse({ interval: (localStorage['refresh-interval'] || 1) * 1000 });
    else
      sendResponse({});
});