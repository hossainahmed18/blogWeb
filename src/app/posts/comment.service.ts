import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseUrl} from '../links'

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiURL: string;
  constructor(private http: HttpClient
    ) {
      this.apiURL = baseUrl
     }
     getComments(id){
      this.http.get(this.apiURL+`/comments/${id}`);
    }
    updateComment(id,body){
      this.http.put(this.apiURL+`/comments/${id}`,body);
    }
    createComment(body){
      this.http.put(this.apiURL+`/comments`,body);
    }
    deleteComment(id){
      this.http.delete(this.apiURL+`/comments/${id}`);
    }
}
