import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import { Region } from "models/region";

@Injectable({
    providedIn: "root"
})
export class RegionService {

    private REST_API_SERVER = "http://localhost:8088/api/regions/"
    
    constructor(private httpService: HttpClient) { }
    
    getAllRegions(): Observable<Region[]> {
        return this.httpService.get(`${this.REST_API_SERVER}/getAllRegions`).pipe(
            map((res: any) => res));
    }
    
    createRegion(region: Region): Observable<Region> {
        return this.httpService.post<Region>(`${this.REST_API_SERVER}/createRegion`, region);
    }
    
    updateRegion(id: number, value: Region) {
        return this.httpService.put(`${this.REST_API_SERVER}/updateRegion/${id}`, value);
    }
    
    deleteRegion(id: number): Observable<Region> {
        return this.httpService.delete<Region>(`${this.REST_API_SERVER}/deleteRegions/${id}`);
    }
    
    
    
}