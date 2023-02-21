import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wiki-search-bar',
  templateUrl: './wiki-search-bar.component.html',
  styleUrls: ['./wiki-search-bar.component.css'],
})
export class WikiSearchBarComponent {
  inputItem: string = '';
  @Output() submittedItem = new EventEmitter();
  onSubmit(el: any) {
    this.inputItem = el.target.value;
  }
  onSubmitForm(el: any) {
    el.preventDefault();
    el = this.inputItem;
    this.submittedItem.emit(this.inputItem);
  }
}
