EjecutarAnalisis = async (isLongSummary) => {
 await fetch(
    'https://5kqxnlooj7.execute-api.sa-east-1.amazonaws.com/Prod/',
    {
      method: 'POST',
      body:JSON.stringify({
        url: window.location.href,
        openaiAccessKey: "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",
        isLongSummary
      }) ,
    }
  );
};
let done;
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

