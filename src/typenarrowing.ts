function site(detail : string | number){
    if(typeof detail === 'string'){
        return `site name : ${detail} , ongoing`
    }
    return `site number : ${detail} ongoing`
}

function approval(mail?:string){
    if(mail){
        return `site mail incoming`;
    }
    return `no mails`
}

function package1(size:"normal"|"premium"|"prime" | number){
    if (size === "normal"){
        return `materails usage : enough`
    }
    if (size === "premium" || size === "prime"){
        return `materials usage : need`
    }
    return `package order #${size}`
}

class consumer{
    packagee(){
        return `documents need`
    }
}

class constructor{
    packagee(){
        return `materials need`
    }
}
function Package(user : consumer | constructor){
    if (user instanceof consumer){
        return user.packagee();
    }
}

type site = {
    name : string
    number : number
}
//function issite(obj:any):obj is site{
//    return(
//        typeof obj ==="object" &&
//        obj !== null &&
//        typeof obj.name == "string" &&
//        typeof obj.number == "number "
//    )
//}

type dev = { type : "admin" ; pass : number }
type owner = {type : "owner" ; pass : number}
type worker = {type : "head" ; pass : number}

type user = dev | owner | worker

function entry (enter : user) : void{
    switch (enter.type) {
        case "admin":
            console.log(`welcome dev`);
             
            break;
        case "owner":
            console.log(`welcome owner`);
             
            break;
        case "head":
            console.log(`welcome worer`);
            
            break;
    
        default:
            break;
    }

}