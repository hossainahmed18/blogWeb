import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from'../auth.service'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts=[
        {
          title:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body : 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          id: 1,
          author: 'me',
          status: 'approved',
        },
        {
          title:'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body : 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          id: 2,
          author: 'he',
          status: 'approved',
        },
        {
          title:'dolorem eum magni eos aperiam quia',
          body : 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
          id: 3,
          author: 'we',
          status: 'approved',
        },
        {
          title:'nesciunt iure omnis dolorem tempora et accusantium',
          body : "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
          id: 4,
          author: 'she',
          status: 'approved',
        },
        {
          title:'in quibusdam tempore odit est dolorem',
          body : 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio',
          id: 5,
          author: 'me',
          status: 'approved',
        },
        {
          title:'voluptate et itaque vero tempora molestiae',
          body : 'eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam',
          id: 6,
          author: 'we',
          status: 'approved',
        }
   ]
   overlay=false;

  constructor(private authService:AuthService) { 

  }

  ngOnInit() {
      console.log(this.authService.getUserData('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmMiLCJ1c2VyTmFtZSI6ImFiYyIsInJvbGUiOiJ1c2VyIiwianRpIjoiOTJiZWRhNDItZGY3NS00ZGJkLTlhZWYtZTA5MmNmNDA1NDc2IiwiZXhwIjoxNjAxMDMxNDcxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMzNi8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDMzNi8ifQ._MgbX1L1FD_g_w7K3atqzSg3WN62-R1y-U6QPS7blK8'))
  }
  formActive(){
     console.log("overlay")
     this.overlay=true
  }
  hideLofForm(){
    this.overlay=false
  }

}
