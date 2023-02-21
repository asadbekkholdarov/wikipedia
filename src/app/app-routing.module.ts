import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'wikipedia',
    loadChildren: () =>
      import('./wikipedia/wikipedia.module').then((e) => e.WikipediaModule),
  },
  {
    path: 'github',
    loadChildren: () =>
      import('./github/github.module').then((e) => e.GithubModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
