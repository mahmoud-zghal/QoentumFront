import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import { Pays } from "models/pays";

@Injectable({
    providedIn: "root"
})
export class PaysService {

    private REST_API_SERVER = "http://localhost:8088/api/pays"
    
    constructor(private httpService: HttpClient) { }
    
    getAllPayses(): Observable<Pays[]> {
        return this.httpService.get(`${this.REST_API_SERVER}/getAllPays`).pipe(
            map((res: any) => res));
    }
    
    createPays(pays: Pays): Observable<Pays> {
        return this.httpService.post<Pays>(`${this.REST_API_SERVER}/createPays`, pays);
    }
    
    updatePays(id: number, value: Pays) {
        return this.httpService.put(`${this.REST_API_SERVER}/updatePays/${id}`, value);
    }
    
    deletePays(id: number): Observable<Pays> {
        return this.httpService.delete<Pays>(`${this.REST_API_SERVER}/deletePays/${id}`);
    }
    
    
    
}
