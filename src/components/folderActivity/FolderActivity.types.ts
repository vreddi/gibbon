export type FeedEventType = 'createFolder' |
  'addVideo' |
  'removeVideo' |
  'addTag' |
  'removeTag';

export type Event = {
  author: string;
  type: FeedEventType;
  dateTimeStamp: string;
  title?: string;
  link?: string;
  thumbnail?: string;
};
