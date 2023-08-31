import { IAlbum } from './album';
import { IAppComment } from './appComment';

export interface IPhoto {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  likes?: number;
  comments?: IAppComment[];
  album?: IAlbum;
  albumId?: number;
  userId?: string;
  baseUrl?: string;
  baseName?: string;
}
