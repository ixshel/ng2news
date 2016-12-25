import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

// services
import { PostsService } from './posts.service';

// define routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // add routes for the app
  ],
  providers: [PostsService], // add the posts services
  bootstrap: [AppComponent]
})
export class AppModule { }
