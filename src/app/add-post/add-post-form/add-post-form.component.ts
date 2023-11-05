import { Component, EventEmitter, Output } from '@angular/core';
import { PostData } from 'src/app/PostData';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent {
    title:(string)=''
    body:(string)='';
    reactions:(string)='';
    userId:(number)=0;
    tagOne:(string)='';
    tagTwo:(string)='';
    tagThree:(string)='';


    @Output()
    emmitPost:EventEmitter<PostData> = new EventEmitter<PostData>()



    sendAddedPost(){
      let newPostData:PostData = {
        title:this.title, body:this.body, reactions:this.reactions, userId:this.userId, tags:[this.tagOne, this.tagTwo, this.tagThree]
      }
      this.emmitPost.emit(newPostData);
  }
}
