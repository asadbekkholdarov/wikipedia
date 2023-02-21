import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/github.service';
import { Response } from 'src/app/gitHubResponse.interface';
@Component({
  selector: 'app-github-home',
  templateUrl: './github-home.component.html',
  styleUrls: ['./github-home.component.css'],
})
export class GithubHomeComponent implements OnInit {
  username = '';
  gitInfo: {} = {};
  constructor(private githubService: GithubService) {}
  getUsername(el: any) {
    this.username = el;
    this.githubService
      .getUser(this.username)
      .subscribe((res: Response) => (this.gitInfo = res));
  }
  ngOnInit(): void {}
}
