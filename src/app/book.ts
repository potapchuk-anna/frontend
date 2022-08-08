import {Review} from "./review";

export interface Book{
  id: number;
  title: string;
  cover?:string;
  genre:string;
  author: string;
  content:string;
  reviewsNum:number;
  reviews?: Review[];
  rating:number;
}
