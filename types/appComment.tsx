import { IAlbum } from './album';
import { IPhoto } from './photo';

export interface IAppComment {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  content?: string;
  album?: IAlbum;
  albumId?: number;
  userId?: string;
  photo?: IPhoto;
  photoId?: number;
}
