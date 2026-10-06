const clients : string [] = ["c1","c2"]

type user = {
    type : string
    pass : number 
}
const login : user[] = [
    {type : "dev" , pass : 1}
]

enum barsize{
    SMALL,
    MED,
    LARGE
}
const bar = barsize.LARGE
