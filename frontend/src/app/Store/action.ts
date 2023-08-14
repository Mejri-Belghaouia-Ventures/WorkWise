import { User } from "../model/User";


export class SetToken{
    static readonly  type="[Auth] SetToken";
    constructor(public data :String | null){}
}

export class SetUser{
    static readonly type="[Auth] SetUser";
    constructor(public data :User | null){}
}

export class SetIsAuth{
    static readonly type="[Auth] SetIsAuth";
    constructor (public data:boolean){}
}

export class LogOut{
    static readonly type="[Auth] LogOut";
}