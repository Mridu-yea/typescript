let response : any = "request"

//forceful assertion of datatype
let sitenumber:number = (response as string).length

type user = {
    type : string
};

let userapproval = '{"type":"dev"}';
let approvalstatus = JSON.parse(userapproval) as user

console.log(approvalstatus); // type : string 

const diagram = document.getElementById("enter_diagram") as HTMLInputElement

let value : any
value = "one thousand"
value = 1000
value.toUpperCase();

let nvalue : unknown
nvalue = "one thousand"
nvalue = 1000

if (nvalue === "string"){
    nvalue.toUpperCase()
}

try {
    
} catch (error) {
    if (error instanceof Error)
        console.log(error.message);
        
    console.log("error",error);
    
}

type Role = "admin" | "worker" | "owner"

function roledirecting(role : Role) : void{
    if( role === "admin"){
        console.log("redirecting to admin dashboard");
        return
    }
    if ( role === "worker"){
        console.log("redirecting to worker dashboard");
        return
    }
    role;
}




