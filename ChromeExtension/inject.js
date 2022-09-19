/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
 */
function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}
injectScript(chrome.extension.getURL('content.js'), 'body');

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      const setKey = localStorage.setItem("openaiAccessKey",request.greeting)
      console.log("🚀 ~ file: inject.js ~ line 19 ~ request", setKey)
      if (setKey)
        sendResponse({farewell: "Tranks"});
    }
  );