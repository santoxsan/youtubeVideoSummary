EjecutarAnalisis = async () => {
 await fetch(
    'https://pqpxc42ao8.execute-api.sa-east-1.amazonaws.com/prod/summaryapi',
    {
      method: 'POST',
      body:JSON.stringify({
        input: 
          `{"url":"${window.location.href}","openaiAccesKey":"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"}`,
        stateMachineArn:
          'arn:aws:states:sa-east-1:750741739043:stateMachine:YoutubeVideoSummary',
      }) ,
    }
  );
};
let done;
setInterval((x) => {
    try {
        const select = document.querySelectorAll(
            '#text.style-scope.ytd-button-renderer.style-default.size-default'
          );
          //Elimina el window del trial
          if (select && select.length > 2) {
            document.querySelector('ytd-popup-container').remove();
            select[1].innerText = 'Resumir';
            document.querySelectorAll("ytd-button-renderer.style-scope.ytd-menu-renderer.force-icon-button.style-default.size-default")[0].onclick = () => EjecutarAnalisis();
        }
    } catch (error) {
        console.log(error);
    }
}, 1000);

