import { IAppComment } from "./appComment";
import { IPhoto } from "./photo";
import { IUser } from "./user";

export interface IAlbum {
	id?: number;
	name?: string;
	users?: IUser[];
	photos?: IPhoto[];
	created_at?: string;
	updated_at?: string;
	likes?: number;
	comments?: IAppComment[];
	likes_count?: number;
}

export interface INewAlbum extends IAlbum {
	name: string;
}