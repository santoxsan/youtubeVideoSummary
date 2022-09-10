
import { getContext, getCaptionOptions, getCaption } from './services.js';

export const lambdaHandler = async ({url}) => {

    const { id } = await getContext(url);
    const { subtitles } = await getCaptionOptions(id);
    const caption = await getCaption(subtitles[0].url);
    console.log("🚀 ~ file: app.js ~ line 21 ~ exports.lambdaHandler= ~ data", caption )

    return { caption }
};
