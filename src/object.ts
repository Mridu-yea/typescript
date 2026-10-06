type  packages = {
    name : string,
    price : number,
    num : number ,
    user : string,
    status : "approved" | "pending"
}

const client = (enter : Partial<packages>) => {
    console.log("new client incoming");
    
}

client({num : 0})
const client2 = (enter : Required<packages>) => {
    console.log("new client incoming");
    
}
//client2({num : 0}) requires every value

type client = Pick<packages , "num" | "status">
const client3 : client= {
    num : 0,
    status : "pending"
    
}


