import { Photo } from "./Photo";

export interface Album {
  userId?: number;
  id?: number;
  title: string;
  thumbnail?: Photo;
  thumbnailUrl: string;
  fotos?: Array<Photo>;
}
