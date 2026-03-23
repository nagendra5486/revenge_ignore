
import {User} from './user_details_model';



let user:User = {
    name:'nagendra',
    age:33,
    doyouhavecar:true,
    data:'hello',
}
console.log(user);

class Person {
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;

    }
        greet(){
            console.log('helo '+this.name);
        }
    
}


let p =new Person("nagendra", 33);

p.greet();





