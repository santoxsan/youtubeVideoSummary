
import { getContext, getCaptionOptions, getCaption } from './services.js';

export const lambdaHandler = async ({url, openaiAccesKey}) => {

    const { id } = await getContext(url);
    const { subtitles } = await getCaptionOptions(id);
    const caption = await getCaption(subtitles[0].url);

    return { message:caption,openaiAccesKey}
};
