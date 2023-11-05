import { Component, Input } from '@angular/core';
import { PostData } from 'src/app/PostData';

@Component({
  selector: 'app-updated-post',
  templateUrl: './updated-post.component.html',
  styleUrls: ['./updated-post.component.css']
})
export class UpdatedPostComponent {

  @Input()
  post:any;
}
