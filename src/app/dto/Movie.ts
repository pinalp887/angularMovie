export class Movie{
    public id:number;
    public name:string;
    public durationTime:string;
    public fileName:string;
    public fileType:string;
    public rate:number;
    public casts:[{
        id:number;
        name:string;
        dob:Date;
        hobby:string
    }];
    public details:string;
    public category:string;
    public isShowable:number;
    public status:number;
    public fileDto:{
        fname: string;
        base: string;
    }
}