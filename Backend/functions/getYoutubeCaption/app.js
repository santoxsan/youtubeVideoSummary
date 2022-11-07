
import { getContext, getCaptionOptions, getCaption } from './services.js';
const MAX_WORDS = 1850;


export const lambdaHandler = async ({url, openaiAccessKey, isLongSummary}) => {

    const { id } = await getContext(url);
    const { subtitles } = await getCaptionOptions(id);
    const firstSubtitles=subtitles[0]
    const caption = await getCaption(firstSubtitles.url);
    // remove \n and spaces
    const captionToAnalyzeWords = caption.split(' ');
    const captionToAnalyzeWordsToUse = captionToAnalyzeWords.length > MAX_WORDS ? captionToAnalyzeWords.slice(0, MAX_WORDS) : captionToAnalyzeWords;
    const captionToAnalyzeToUse = captionToAnalyzeWordsToUse.join('');
    
    const minifiedCaption = captionToAnalyzeToUse.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, '');
    const countryCode = firstSubtitles.code.match(/(es)/) ? 'es' : 'en';

    return { message:minifiedCaption, openaiAccessKey, countryCode, isLongSummary}
};
    