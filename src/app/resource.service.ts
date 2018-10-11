import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResourceService {
    constructor(private http: HttpClient) { }

    get(param) {
        return this.http.get("http://localhost:8000/api", {
            params: {
                title: param,
            }
        });
    }

    post(model) {
        return this.http.post("http://localhost:8000/add", model);
    }
}