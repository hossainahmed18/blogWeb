import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseUrl} from '../links'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiURL: string;
  constructor(private http: HttpClient
    ) {
      this.apiURL = baseUrl
     }
    getAllPost(role){
       this.http.get(this.apiURL+`/posts/${role}`);
    }
    getSinglePost(id){
      this.http.get(this.apiURL+`/singlepost/${id}`);
    }
    updatePost(id,body){
      this.http.put(this.apiURL+`/singlepost/${id}`,body);
    }
    createPost(body){
      this.http.put(this.apiURL+`/posts`,body);
    }
    deletePost(id){
      this.http.delete(this.apiURL+`/singlepost/${id}`);
    }
}
