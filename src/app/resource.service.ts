import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResourceService {
    constructor(private http: HttpClient) { }
    get() {
        return this.http.get("http://localhost:8000/url");
    }

    post(model) {
        return this.http.post("http://localhost:8000/url", model);
    }
}