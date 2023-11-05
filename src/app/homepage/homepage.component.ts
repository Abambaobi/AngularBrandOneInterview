import { Component } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { PostData } from '../PostData';

@Component({
  selector: 'app-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private fetchService:FetchService){

  }
  // ADD ALL POST
posts:any;

// RETURNED ADDED POST
addedPost:any;

// RETURNED ADDED POST
updatedPost:any;

// RETURNED SINGLE POST
returnedSinglePost:any;

// RETURNED DELETED POST
returnedDeletedPost:any;

// ERROR MESSAGE
errorMessage:any;

// SINGLE POST ID
singlePostId:(number|null)=null;

// UPDATE POST ID
updatePostId:(number|null)=null;

// DELETE POST ID
deletePostId:(number|null)=null;

showError:boolean = false;

showLoading:boolean = false;
showAllPost:boolean = false;

showAddPostForm:boolean = false;
showAddedPost:boolean = false;

showSinglePost:boolean = false;
showUpdatedPost:boolean = false;
showUpdatePostForm: boolean = false;
showDeletedPost:boolean = false;


handleEmmitedData(newPost:PostData){
this.addPost(newPost);
}



fetchAllPost(){
  this.showSinglePost = false;
  this.showUpdatedPost = false;
  this.showUpdatePostForm = false;
  this.showDeletedPost = false;
  this.showAllPost = false;
  this.showAddPostForm = false;
  this.showAddedPost = false;
  this.showError = false;

  this.showLoading = true;

  this.fetchService.getAllPost("https://dummyjson.com/posts").subscribe(
    (post)=>{
      this.showLoading = false;
      this.showError = false;
      this.showAllPost = true;
      this.posts=post.posts
    },

    (error)=>{
    this.showLoading = false;
    this.showError = true;
    this.errorMessage = error;
    }
  )
  }

  addPostForm(){
    this.showSinglePost = false;
    this.showUpdatedPost = false;
    this.showUpdatePostForm = false;
    this.showDeletedPost = false;
    this.showAllPost = false;
    this.showLoading = false;
    this.showAddedPost = false;
    this.showError = false;

    this.showAddPostForm = true;
  }


  addPost(newPost:PostData){
    this.showSinglePost = false;
    this.showUpdatedPost = false;
    this.showUpdatePostForm = false;
    this.showDeletedPost = false;
    this.showAllPost = false;
    this.showAddedPost = false;
    this.showAddPostForm = false;
    this.showError = false;

    
    this.showLoading = true;

    this.fetchService.addPost('https://dummyjson.com/posts/add',newPost).subscribe(
      (addedPost)=>{
        this.showLoading = false;
        this.showError = false;
        this.addedPost = addedPost;
        this.showAddedPost = true;
    },
    (error)=>{
    this.showLoading = false;
    this.showError = true;
    this.errorMessage = error;
    }
    )
  }

  // FETCH SINGLE POST
fetchSinglePost(){
  this.showUpdatedPost = false;
  this.showUpdatePostForm = false;
  this.showDeletedPost = false;
  this.showAllPost = false;
  this.showAddedPost = false;
  this.showAddPostForm = false;
  this.showSinglePost = false;
  this.showError = false;

  this.showLoading = true;
  
  this.fetchService.getOnePost(`https://dummyjson.com/posts/${this.singlePostId}`).subscribe((singlePost)=>{
  this.showLoading = false;
  this.showError = false;
  this.returnedSinglePost = singlePost;
  this.showSinglePost = true;
  },

  (error)=>{
  this.showLoading = false;
  this.showError = true;
  this.errorMessage = error;
  }
)
}

updatePostForm(){
  this.showSinglePost = false;
  this.showUpdatedPost = false;
  this.showDeletedPost = false;
  this.showAllPost = false;
  this.showAddPostForm = false;
  this.showAddedPost = false;
  this.showLoading = false;
  this.showError = false;

  this.showUpdatePostForm = true;
}

updatePost(updatePostData:PostData){
  this.showSinglePost = false;
  this.showUpdatedPost = false;
  this.showUpdatePostForm = false;
  this.showDeletedPost = false;
  this.showAllPost = false;
  this.showAddPostForm = false;
  this.showAddedPost = false;
  this.showError = false;

  this.showLoading = true;

  this.fetchService.putPost(`https://dummyjson.com/posts/${this.updatePostId}`, updatePostData).subscribe(
    (returnedUpdatedData)=>{
      this.showLoading = false;
      this.showError = false;
      this.updatedPost = returnedUpdatedData;
      this.showUpdatedPost = true;
    },

    (error)=>{
    this.showLoading = false;
    this.showError = true;
    this.errorMessage = error;
    }
    )
}

deletePost(){
  this.showSinglePost = false;
  this.showUpdatedPost = false;
  this.showUpdatePostForm = false;
  this.showDeletedPost = false;
  this.showAllPost = false;
  this.showAddPostForm = false;
  this.showAddedPost = false;
  this.showError = false;

  this.showLoading = true;

this.fetchService.deletePost(`https://dummyjson.com/posts/${this.deletePostId}`).subscribe((deletedPost)=>{

this.showLoading = false;
this.showError = false;
this.returnedDeletedPost = deletedPost;
this.showDeletedPost = true;
},

(error)=>{
this.showLoading = false;
this.showError = true;
this.errorMessage = error;
}
)
}
}
