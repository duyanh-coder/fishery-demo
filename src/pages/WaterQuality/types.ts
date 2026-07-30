export interface WaterQuality{
    id:number;
    station:string;
    province:string;
    district:string;
    waterType:string;
    measureTime:string;
    ph:number;
    do:number;
    temperature:number;
    salinity:number;
    nh3:number;
    turbidity:number;
    status:string;
}