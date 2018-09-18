import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WsTaskService {
  apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient) { }

  public doGet(url:string){
    return new Promise((resolve,reject)=>{
      this._http.get(this.apiUrl+url).subscribe(data=>{
        resolve(data)
      }),error=>{
        reject(error)
      }
    })
  }

  public doPost(url:string,object:any){
    return new Promise((resolve,reject)=>{
      this._http.post(this.apiUrl+url,object).subscribe(data=>{
        resolve(data)
      }),error=>{
        reject(error)
      }
    })
  }
}
