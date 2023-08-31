import { IAlbum } from "./album";
import { IAppComment } from "./appComment";
import { IPhoto } from "./photo";

export interface IUser {
  id: string;
	profilePicture: string;
	albums: IAlbum[];
	photos: IPhoto[];
	comments: IAppComment[];
}
