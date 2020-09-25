import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post={
    title:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body : 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    id: 1,
    author: 'me',
    status: 'approved',
  }
  comments=[
    {
        commenter: 'me me',
        commentBody:'aaa aaa aaa aa aaaa'
    },
    {
      commenter: 'he he',
      commentBody:'bbb bbb bbb bbb bbb'
  },
  {
    commenter: 'shee she',
    commentBody:'ccc ccc ccc ccc ccc'
},
{
  commenter: 'we we',
  commentBody:'ddd ddd ddd ddd ddd'
},
{
  commenter: 'you you',
  commentBody:'zzz zzz zzz zzz zzz'
}
  ]

  showcomments=false;
  showcommentbox=false;

  constructor() { }

  ngOnInit() {
  }

  openComments(){
    this.showcomments=!this.showcomments
  }
  openCommentBox(){
    this.showcommentbox=!this.showcommentbox
  }


}
