import fetch from 'node-fetch';

export const getContext = async (url) => {
    const response = await fetch(`https://downsub.com/?url=${url}`, {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-encoding": "gzip, deflate",
          "accept-language": "es,es-ES;q=0.9,en-US;q=0.8,en;q=0.7",
          "cache-control": "no-cache",
          "cookie": "panoramaId_expiry=9963287478758; ",
          "pragma": "no-cache",
          "sec-ch-ua": "Google Chrome",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "Windows",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36"
        },
        "referrer": "https://downsub.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dmu40cEBSOFI%26ab_channel%3DHolaMundo",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors"
      });
    const rawHTML = await response.text()
    const context = rawHTML.split('context=\'')[1].split('\'')[0];

    return JSON.parse(atob(context));
}

export const getCaptionOptions = async (id) => {
    const response = await fetch(
        `https://get-info.downsub.com/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "sec-ch-ua":
              '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "Windows",
            "sec-fetch-site": "same-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "accept-encoding": "gzip, deflate",
            "accept-language": "es,es-ES;q=0.9,en-US;q=0.8,en;q=0.7",
          },
        }
      );
      
    const json = await response.json();
    return json;
}

export const getCaption = async (id) => {
    const response = await fetch(
        `https://subtitle.downsub.com/?title=none&url=${id}&type=txt`);
    const text = await response.text();
    console.log("🚀 ~ file: services.js ~ line 71 ~ getCaption= ~ text", text)
    return text;
}