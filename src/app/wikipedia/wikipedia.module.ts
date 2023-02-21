import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikipediaRoutingModule } from './wikipedia-routing.module';
import { WikiHomeComponent } from './wiki-home/wiki-home.component';
import { WikiSearchBarComponent } from './wiki-search-bar/wiki-search-bar.component';
import { WikiPageListComponent } from './wiki-page-list/wiki-page-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WikiHomeComponent,
    WikiSearchBarComponent,
    WikiPageListComponent,
  ],
  imports: [CommonModule, WikipediaRoutingModule, FormsModule],
})
export class WikipediaModule {}
