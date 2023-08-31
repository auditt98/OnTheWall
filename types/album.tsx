import { IAppComment } from "./appComment";
import { IPhoto } from "./photo";
import { IUser } from "./user";

export interface IAlbum {
	id?: number;
	name?: string;
	users?: IUser[];
	photos?: IPhoto[];
	CreatedAt?: string;
	UpdatedAt?: string;
	Likes?: number;
	Comments?: IAppComment[];

}

export interface INewAlbum extends IAlbum {
	name: string;
}