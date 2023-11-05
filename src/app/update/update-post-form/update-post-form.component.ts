import { Component, EventEmitter, Output } from '@angular/core';
import { PostData } from 'src/app/PostData';

@Component({
  selector: 'app-update-post-form',
  templateUrl: './update-post-form.component.html',
  styleUrls: ['./update-post-form.component.css']
})
export class UpdatePostFormComponent {

  title:string = ''
  body:string = '';
  reactions:string = '';
  userId:number = 0;
  tagOne:string='';
  tagTwo:string='';
  tagThree:string='';

  @Output()
  emitUpdatedPost:EventEmitter<PostData> = new EventEmitter<PostData>();

  sendUpdatedPost(){
    let updatePostData:PostData = {title:this.title, body:this.body, reactions:this.reactions, userId:this.userId, tags:[this.tagOne, this.tagTwo, this.tagThree]};
    this.emitUpdatedPost.emit(updatePostData);
  }

}
