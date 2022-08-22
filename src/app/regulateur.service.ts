import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import { Regulateur } from "models/regulateur";

@Injectable({
    providedIn: "root"
})
export class RegulateurService {

    private REST_API_SERVER = "http://localhost:8088/api/regulateurs/"
    
    constructor(private httpService: HttpClient) { }
    
    getAllRegulateurs(): Observable<Regulateur[]> {
        return this.httpService.get(`${this.REST_API_SERVER}/getAllRegulateur`).pipe(
            map((res: any) => res));
    }
    
    createRegulateur(regulateur: Regulateur): Observable<Regulateur> {
        return this.httpService.post<Regulateur>(`${this.REST_API_SERVER}/createRegulateur`, regulateur);
    }
    
    updateRegulateur(id: number, value: Regulateur) {
        return this.httpService.put(`${this.REST_API_SERVER}/updateRegulateur/${id}`, value);
    }
    
    deleteRegulateur(id: number): Observable<Regulateur> {
        return this.httpService.delete<Regulateur>(`${this.REST_API_SERVER}/getAllRegulateur/${id}`);
    }
    
    
    
}
