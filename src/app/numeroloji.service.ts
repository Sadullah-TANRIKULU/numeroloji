import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NumerolojiService {

  readonly satisAPIUrl = "https://api.istanbulhairstudio.co.uk/";

  constructor(private http: HttpClient) { }

  // NUMEROLOJİ
  inspectGet(body: any): Observable<any> {
    return this.http.post<any>(this.satisAPIUrl + `numeroloji/userSave`, body);
  };
  inspectVal(): Observable<any> {
    return this.http.get<any>(this.satisAPIUrl + `numeroloji/val`);
  };


}
