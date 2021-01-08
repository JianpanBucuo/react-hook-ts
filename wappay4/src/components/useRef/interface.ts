export function identity(arg: number): number {
    return arg
}

function identity2<T>(arg: T[]):number {
    return arg.length
}

const  myIdentity: <U>(arg:U[]) => number = identity2
myIdentity([1,2])

interface GenericIdentityFn<T> {
    (arg: T[]):T
}

interface LengthWise {
    length: number
}
function loggingIdentity<T extends LengthWise>(arg: T):T {
    console.log(arg.length)
    return arg  
}

function getProperty<T,K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
 