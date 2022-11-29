
import { getContext, getCaptionOptions, getCaption, removeCaracterUntilTokenCount } from './services.js';

const CHARACTER_COUNT = 3743;


export const lambdaHandler = async ({url, openaiAccessKey, isLongSummary}) => {

    const { id } = await getContext(url);
    const { subtitles } = await getCaptionOptions(id);
    const firstSubtitles=subtitles[0]
    const caption = await getCaption(firstSubtitles.url);
    const minifiedCaption = caption.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, '');
    const textCut = removeCaracterUntilTokenCount(minifiedCaption, CHARACTER_COUNT);

    
    const countryCode = firstSubtitles.code.match(/(es)/) ? 'es' : 'en';

    return { message:textCut, openaiAccessKey, countryCode, isLongSummary}
};
    