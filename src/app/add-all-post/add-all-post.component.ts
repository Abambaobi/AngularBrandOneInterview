import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-all-post',
  templateUrl: './add-all-post.component.html',
  styleUrls: ['./add-all-post.component.css']
})
export class AddAllPostComponent {

@Input()
posts:any;

}
