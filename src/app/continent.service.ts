import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import { Continent } from "models/continent";

@Injectable({
    providedIn: "root"
})
export class ContinentService {

  private REST_API_SERVER = "http://localhost:8088/api/continent"
    
    constructor(private httpService: HttpClient) { }
    
    getAllContinents(): Observable<Continent[]> {
        return this.httpService.get(`${this.REST_API_SERVER}/getAllContinent`).pipe(
            map((res: any) => res));
    }
    
    createContinent(continent: Continent): Observable<Continent> {
        return this.httpService.post<Continent>(`${this.REST_API_SERVER}/createContinent`, continent);
    }
    
    updateContinent(id: number, value: Continent) {
        return this.httpService.put(`${this.REST_API_SERVER}/updateContinent/${id}`, value);
    }
    
    deleteContinent(id: number): Observable<Continent> {
        return this.httpService.delete<Continent>(`${this.REST_API_SERVER}/deleteContinent/${id}`);
    }
    
    
    
}
