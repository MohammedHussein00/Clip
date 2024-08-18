import { IUser } from "src/app/user/userModels/iuser";

export interface IVideo {
    id:number,
    title:string,
    thumbnailUrl:string,
    videoUrl:string,
    userId:string,
    user:IUser,
    created:Date,
}
