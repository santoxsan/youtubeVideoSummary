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

EjecutarAnalisis = async (isLongSummary) => {
    const openaiAccessKey = localStorage.getItem('openaiAccessKey')

    if (!openaiAccessKey){
      alert('There is no OpenAI access key. Please set it in the options page.')
      return;
    }
    const tablink = await new Promise((resolve, reject) => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            resolve(tabs[0].url);
        });
    });
   await fetch(
    'https://tecmg2cpl5.execute-api.sa-east-1.amazonaws.com/Prod/',
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
        // url is the youtube url not the extension url
          url: tablink,
          openaiAccessKey: openaiAccessKey,
          isLongSummary
        }) ,
      }
    );
  };

window.onload = function () {
    const openAiAccessKey= localStorage.getItem('openaiAccessKey')
    document.getElementById("inputKey").value = openAiAccessKey
    if (openAiAccessKey){
        document.getElementById("button").innerText='Ready!'
        document.getElementById("button").style.background ='#808080';
    }

    document.getElementById("inputKey").addEventListener("input", function() {
       if(document.getElementById("inputKey").value){
        document.getElementById("button").innerText='Save'
        document.getElementById("button").style.background ='#4CAF50';
       }
       else{
        document.getElementById("button").innerText='Insert access key'
        document.getElementById("button").style.background ='var(--color-primary-default)';
       }	
    });

    document.getElementById("button").onclick = insertKey;
    document.getElementById("buttonLongSummary").onclick = () => EjecutarAnalisis("long");
    document.getElementById("buttonShortSummary").onclick = () => EjecutarAnalisis("short");
}

