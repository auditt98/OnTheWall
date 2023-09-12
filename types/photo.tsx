import { IAlbum } from './album';
import { IAppComment } from './appComment';
import { IUser } from './user';

export interface IPhoto {
  id?: number;
  created_at?: string;
  updated_at?: string;
  base_name?: string;
  base_url?: string;
  user_id?: string;
  user?: IUser;
  presigned_url?: string;
  likes_count?: number;
  comments?: IAppComment[];
}
