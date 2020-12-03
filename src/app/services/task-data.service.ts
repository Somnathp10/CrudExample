import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskDataServices {
  mainurl:any;
  constructor(private http: HttpClient) { }

  // Http Options
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'

  //   })
  // }

  getAllData() {
    return this.http.get<any>(environment.mainurl+'book');
  }

  getDataById(id){
    return this.http.get<any>(environment.mainurl+'book/'+id);
  }
  updateData(req){
    return this.http.post<any>(environment.mainurl+'books',req);
  }

  DeleteId(id) {
    return this.http.delete<any>(environment.mainurl+ 'book/'+ id);
  }


  // updateCategory (requestJson) {
  //   return this.http.post<any>(environment.mainurl + 'config/categories/update', requestJson);
  // }


  // DeleteCategory(req){
  //   return this.http.get<any>(environment.mainurl+'config/categories/delete/'+req);

  // }





}
