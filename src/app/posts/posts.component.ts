import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // initiate posts to an empty array
  posts: any = [];
  wiki: string = 'https://en.wikipedia.org/wiki';

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log('data', posts);
    });
  }

}
