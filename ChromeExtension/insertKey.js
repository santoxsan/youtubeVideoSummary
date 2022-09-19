function insertKey(){
    
    // const apikey = localStorage.getItem("openaiAccessKey")
    
    const value = document.querySelector('#inputKey').value
    localStorage.setItem("openaiAccessKey",value)
    

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: value}, function(response) {
          console.log(response);
          document.getElementById("button").innerText='Ready!'
          document.getElementById("button").style.background ='#808080';
        });
      });

      


}
window.onload = function () {
    document.getElementById("button").onclick = insertKey;
    

}

