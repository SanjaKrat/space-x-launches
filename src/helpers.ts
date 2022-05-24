import { Option } from "./types";

export const dateGenerator = (date: Date) => {
  const day = `${date.getDate().toString().length < 2 ? `0${date.getDate()}` : `${date.getDate()}`}`;
  const month = `${(date.getMonth() + 1).toString().length < 2 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`}`;
  return `${day}.${month}.${date.getFullYear()}`
}

export const getYoutubePreview = (youtubeId: string) => `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

export const queryCreator = (dateFrom: string, dateTo: string, success: string) => {
  const options: Option = {
    date_utc: {
      $gte: dateFrom,
      $lte: dateTo
    }
  }
  if (success !== 'all') {
    success === 'success' ? options.success = true : options.success = false;
  }
  return options;
}