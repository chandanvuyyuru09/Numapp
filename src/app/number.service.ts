import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class NumberService{
  
  constructor(private _httpClient:HttpClient){

  }

  save(object){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpClient.post('http://localhost:3000/api/records',JSON.stringify(object),{headers:headers});
  }

  getAll(){
    return this._httpClient.get('http://localhost:3000/api/records');
  }

}