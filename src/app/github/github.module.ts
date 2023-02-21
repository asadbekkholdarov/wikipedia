import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubHomeComponent } from './github-home/github-home.component';
import { GithubSearchBarComponent } from './github-search-bar/github-search-bar.component';
import { GithubPageListComponent } from './github-page-list/github-page-list.component';


@NgModule({
  declarations: [
    GithubHomeComponent,
    GithubSearchBarComponent,
    GithubPageListComponent
  ],
  imports: [
    CommonModule,
    GithubRoutingModule
  ]
})
export class GithubModule { }
