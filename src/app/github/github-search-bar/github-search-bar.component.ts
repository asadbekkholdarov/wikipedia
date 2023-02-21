import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-search-bar',
  templateUrl: './github-search-bar.component.html',
  styleUrls: ['./github-search-bar.component.css'],
})
export class GithubSearchBarComponent {
  user = '';
  @Output() submittedUser = new EventEmitter();
  onInput(el: any) {
    this.user = el.target.value;
  }
  onSubmit(el: any) {
    el.preventDefault();
    el = this.user;
    this.submittedUser.emit(this.user);
  }
}
