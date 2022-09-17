
import { getContext, getCaptionOptions, getCaption } from './services.js';

export const lambdaHandler = async ({url, openaiAccessKey, isLongSummary}) => {

    const { id } = await getContext(url);
    const { subtitles } = await getCaptionOptions(id);
    const firstSubtitles=subtitles[0]
    const caption = await getCaption(firstSubtitles.url);
    const countryCode = firstSubtitles.code.match(/(es)/) ? 'es' : 'en';
    return { message:caption, openaiAccessKey, countryCode, isLongSummary}
};
