function bartype<T>(item : T):T[]{
    return [item]
}
bartype("steel")

interface bill<t>{
    content : t
}
const billnum: bill<number> = {content : 100}