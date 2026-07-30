export interface Station {

    id:number;

    code:string;

    name:string;

    province:string;

    district:string;

    waterType:string;

    latitude:number;

    longitude:number;

    device:string;

    lastSync:string;

    status:"Hoạt động"|"Bảo trì"|"Mất kết nối";

}