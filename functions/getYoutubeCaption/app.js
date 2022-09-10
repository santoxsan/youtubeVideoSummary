
exports.lambdaHandler = async ({url}) => {
    console.log("🚀 ~ file: app.js ~ line 21 ~ exports.lambdaHandler= ~ data")
    const response= await fetch(url, {
        method: 'POST',
        headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Referer': url,
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'es,es-ES;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cookie': '_ym_uid=16628252861073067449; _ym_d=1662825286; _ym_isad=1; _ym_visorc=w'
        },
        body: `url=${url}`
    })
    const data = await response.text()
    console.log("🚀 ~ file: app.js ~ line 21 ~ exports.lambdaHandler= ~ data", data)

    return response
};
