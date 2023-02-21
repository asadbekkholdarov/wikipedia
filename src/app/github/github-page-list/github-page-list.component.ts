import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-page-list',
  templateUrl: './github-page-list.component.html',
  styleUrls: ['./github-page-list.component.css'],
})
export class GithubPageListComponent {
  @Input() gitInfo: any = {};
}
