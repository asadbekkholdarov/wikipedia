import { Component, OnInit } from '@angular/core';
import { WikipediaService } from 'src/app/wikipedia.service';
@Component({
  selector: 'app-wiki-home',
  templateUrl: './wiki-home.component.html',
  styleUrls: ['./wiki-home.component.css'],
})
export class WikiHomeComponent implements OnInit {
  term = '';
  wikis: any[] = [];
  constructor(private wikipediaService: WikipediaService) {}
  getItem(el: any) {
    this.term = el;
    this.wikipediaService
      .search(this.term)
      .subscribe((res: any) => (this.wikis = res.query.search));
  }
  ngOnInit() {}
}
