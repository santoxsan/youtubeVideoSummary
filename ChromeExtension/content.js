

EjecutarAnalisis = async (isLongSummary) => {
  const openaiAccessKey = localStorage.getItem('openaiAccessKey')
  if (!openaiAccessKey){
    alert('There is no OpenAI access key. Please set it in the options page.')
    return;
  }
 await fetch(
    'https://tecmg2cpl5.execute-api.sa-east-1.amazonaws.com/Prod/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        url: window.location.href,
        openaiAccessKey: openaiAccessKey,
        isLongSummary
      }) ,
    }
  );
};
setInterval((x) => {
    try {


     const selectShort = document.querySelectorAll(
        '#text.style-scope.ytd-button-renderer.style-default.size-default'
      )
        const selectLong = document.querySelectorAll(
            '#text.style-scope.ytd-button-renderer.style-default.size-default'
          );
          //Elimina el window del trial
        
          if (selectShort && selectShort.length > 2 ) {
            document.querySelector("ytd-engagement-panel-section-list-renderer").remove()
            document.querySelector('#engagement-panel-scrim').remove()
            document.querySelector('#panels').remove()

            selectShort[3].innerText = 'Resumir Corto';
            document.querySelectorAll("ytd-button-renderer.style-scope.ytd-menu-renderer.force-icon-button.style-default.size-default")[1].onclick = () => EjecutarAnalisis("short");

        }

          if (selectLong && selectLong.length > 2 ) {
            document.querySelector('ytd-popup-container').remove();
            selectLong[1].innerText = 'Resumir Largo';
            document.querySelectorAll("ytd-button-renderer.style-scope.ytd-menu-renderer.force-icon-button.style-default.size-default")[0].onclick = () => EjecutarAnalisis("long");
        }
    } catch (error) {
        console.log(error);
    }
}, 1000);

