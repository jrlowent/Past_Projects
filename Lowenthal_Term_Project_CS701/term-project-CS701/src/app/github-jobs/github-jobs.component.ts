import { Component, OnInit } from '@angular/core';

import { GithubjobsService } from '../services/githubjobs.service'

@Component({
  selector: 'app-github-jobs',
  templateUrl: './github-jobs.component.html',
  styleUrls: ['./github-jobs.component.css']
})
export class GithubJobsComponent implements OnInit {

  // jobs: any;

  // // initMap(){
  // //   new initMap();
  // // }

  //constructor (private githubJobsService: GithubjobsService) {};
  constructor () {};

  // getJobs(skillArg: string, locationArg: string): void {
  //   console.log(skillArg + ", " + locationArg);
  //   this.githubJobsService.getGithubJobs(skillArg, locationArg)
  //   .subscribe(result => {//original term: software
  //     console.log(result);
  //     this.jobs = result;
  //     console.log(JSON.stringify(this.jobs));
  //   });
  // };

  ngOnInit(): void{};
}
