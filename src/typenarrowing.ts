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

function package(size:"normal"|"premium"|"prime" | number){
    if (size === "normal"){
        return `materails usage : enough`
    }
    if (size === "premium" || size === "prime"){
        return `materials usage : need`
    }
    return `package order #${size}`
}

class consumer{
    package(){
        return `documents need`
    }
}

class constructor{
    package(){
        return `materials need`
    }
}
function Package(user : consumer | constructor){
    if (Package instanceof consumer){
        return Package.package();
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

function entry (enter : user){
    switch (enter) {
        case "dev":
            return `welcome dev`
            break;
        case "owner":
            return `welcome owner`
            break;
        case "worker":
            return `welcome worer`
            break;
    
        default:
            break;
    }

}