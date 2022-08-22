import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl="http::/localhost:8081/client";
 
  constructor(private httpClient: HttpClient) { }
  Addclient(client: Client) : Observable<Object> {
    console.log(client);
    return this.httpClient.post('$(this.baseUrl)', client ); 
      }
}


