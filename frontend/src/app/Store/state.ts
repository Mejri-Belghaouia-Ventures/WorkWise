import { Action, Actions, Selector, State, StateContext } from "@ngxs/store";
import { User } from "../model/User";
import { Injectable } from "@angular/core";
import { SetToken,SetIsAuth,SetUser,LogOut } from "./action";
import { patch } from "@ngxs/store/operators";

export class AuthModel{
    isAuth:boolean=false;
    user:User |null |undefined;
    token:String | null|undefined;
}

@State<AuthModel>({
    name:'AuthStore',
    defaults:{
        isAuth:false,
        user:null,
        token:null
    }
})

@Injectable()
export class AuthState{
    @Selector()
    static GetIsAuth({isAuth}:AuthModel){
        return isAuth;
    }

    @Selector()
    static getToken({token}:AuthModel){
        return token;
    }

    @Selector()
    static getUser({user}:AuthModel){
        return user;
    }

    @Action(SetToken)
    SetToken({getState,patchState}:StateContext<AuthModel>,{data}:SetToken){
        patchState({
            token:data
        });
    }

    @Action(SetUser)
    SetUser({getState,patchState}:StateContext<AuthModel>,{data}:SetUser){
        patchState({
            user:data
        })
    }

    @Action(SetIsAuth)
    SetIsAuth({getState,patchState}:StateContext<AuthModel>,{data}:SetIsAuth){
        patchState({
            isAuth:data
        })
    }

    @Action(LogOut)
    LogOut({setState,patchState}:StateContext<AuthModel>){
        patchState({
            isAuth:false,
            user:null,
            token:null
        })
    }
}