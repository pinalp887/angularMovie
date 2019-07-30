import { Time } from '@angular/common';

export class ShowRegister {
    public id: number;
    public movie: {
        id: number;
        name: string;
        durationTime: string;
        fileName: string;
        fileType: string;
        rate: number;
        details: string;
        category: string;
        isShowable: number;
        status: number;
    }
    public screen: {
        id: number;
        screenName: string;
        platiniumSeats: string;
        silverSeats: string;
        goldSeats: string;
    }
    public bookedSeats: [];
    public paymentType: string;
    public date: Date;
    public platiniumPrice: number;
    public silverPrice: number;
    public goldPrice: number;
    public time: Time;
}