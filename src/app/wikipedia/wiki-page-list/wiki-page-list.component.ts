import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wiki-page-list',
  templateUrl: './wiki-page-list.component.html',
  styleUrls: ['./wiki-page-list.component.css'],
})
export class WikiPageListComponent {
  @Input() term = '';
  @Input() wikis: any = [];
}
