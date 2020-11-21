import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infos-premium',
  templateUrl: './infos-premium.component.html',
  styleUrls: ['./infos-premium.component.css']
})
export class InfosPremiumComponent implements OnInit, OnDestroy {

  postTitle: string;
  postImg: string;
  postParagraphe: string;
  posts;
  read = false;
  obs: any;
  i = 0

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://wordpress-learning.com/wp-json/wp/v2/posts?_embed').subscribe(data => {
      this.posts = data

    })


  }

  readPost(id: any): void {
    this.read = !this.read;
    this.postTitle = this.posts[id].title.rendered;
    this.postImg = this.posts[id]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
    this.postParagraphe = this.posts[id].content.rendered;

  }
  ngOnDestroy(): void {
    this.obs.unsuscribe();
  }
}
