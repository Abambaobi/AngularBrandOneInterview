import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { PostData } from '../PostData';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  getAllPost(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError((error:any)=>{
       throw Error("Check your Internet")
      })
      
      )
  }

  addPost(url:string, data:PostData){
    return this.http.post(url, data).pipe(
      catchError((error)=>{
        throw Error("Poor internet or invalid data")
      })
    )
  }
  
  getOnePost(url:string): Observable<PostData>{
    return this.http.get<PostData>(url).pipe(catchError((error:any)=>{
      throw Error("Poor internet or invalid ID")
    }))
  }

  putPost(url:string, data:PostData):Observable<PostData>{
    return this.http.put<PostData>(url,data).pipe(catchError((error:any)=>{
      throw Error("Poor internet or invalid data")
    }))
  }

  deletePost(url:string):Observable<PostData>{
    return this.http.delete<PostData>(url).pipe(catchError((error:any)=>{
      throw Error("Poor internet or invalid ID");
    }));
  }
}
