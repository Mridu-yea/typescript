type cbill = {
    type : string ;
    num : number ; 
    approval : boolean
}
type mbill = {
    type : string ;
    num : number ; 
    approval : boolean
}
function clientbill(bill : cbill){
    console.log("one incoming client bill");
    
}
function shopbill(bill : mbill){
    console.log("one incoming material bill");
    
}

type client = {
    name : string;
    payment? : number
}

const u1 : client = { name : "tanish" , payment : 200}

type userpack = {
    readonly packnum : string
    version : number
}
const up : userpack = {
    packnum : "prime",
    version : 2
}
