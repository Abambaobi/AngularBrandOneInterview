import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-added-post',
  templateUrl: './added-post.component.html',
  styleUrls: ['./added-post.component.css']
})
export class AddedPostComponent {

  @Input()
  post:any;
}
