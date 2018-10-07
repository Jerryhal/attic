import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "./user.model";

@Injectable()
export class AuthorizationService {
    constructor(private http: HttpClient) {}

    public token;

    login(model: User) {
        return this.http.post("http://localhost:8000/login", model).subscribe(result => {
            this.token = result;
        });
    }

    signUp(model) {
        return this.http.post("http://localhost:8000/url", model);
    }
}