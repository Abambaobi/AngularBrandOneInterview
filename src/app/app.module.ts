import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddAllPostComponent } from './add-all-post/add-all-post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { AddPostFormComponent } from './add-post/add-post-form/add-post-form.component';
import { AddedPostComponent } from './add-post/added-post/added-post.component';
import { UpdatePostFormComponent } from './update/update-post-form/update-post-form.component';
import { UpdatedPostComponent } from './update/updated-post/updated-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddAllPostComponent,
    SinglePostComponent,
    DeletePostComponent,
    AddPostFormComponent,
    AddedPostComponent,
    UpdatePostFormComponent,
    UpdatedPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomepageComponent]
})
export class AppModule { }
