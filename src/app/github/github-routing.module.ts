import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubHomeComponent } from './github-home/github-home.component';

const routes: Routes = [{ path: '', component: GithubHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
