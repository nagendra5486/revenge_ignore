export interface User{
    name:string;
    age:number;
    doyouhavecar:boolean;
    data:any;
}


export interface Employee extends User{
    empid:number;
    salary:number;
}

