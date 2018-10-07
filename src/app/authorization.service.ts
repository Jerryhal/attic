import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "./user.model";

@Injectable()
export class AuthorizationService {
    constructor(private http: HttpClient) { }

    public accessToken: string;

    login(model: User) {
        return this.http.get("http://localhost:8000/login", {
            params: {
                username: model.username,
                password: model.password
            }
        }).subscribe(result => {
            this.accessToken = <string>result;
            return true;
        }, err => {
            return false;
        });
    }

    signup(model: User) {
        return this.http.post("http://localhost:8000/signup", model)
            .subscribe(result => {
                if (<boolean>result === true) {
                    return true;
                } else {
                    return false;
                }
            }, err => {
                return false;
            });
    }
}