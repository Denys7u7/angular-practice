import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss'],
})
export class PostComponentComponent implements OnInit {
  posts?: any[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAll().subscribe({
      next: (response: any) => (this.posts = response),
      error: (error: Response) => {
        if (error.status === 404) alert('Dont found data');

        console.log(error);
      },
    });
  }

  createPost(titleInput: HTMLInputElement) {
    const title: string = titleInput.value;
    titleInput.value = '';
    this.postService.create({ title }).subscribe({
      next: (response: any) => {
        this.posts?.unshift(response);
      },
      error: (error: Error) => {
        /* if (error.status === 400) alert('Bad request');
        else alert('An unexpected error ocurred.'); */
        console.log(error);
      },
    });
  }
}
