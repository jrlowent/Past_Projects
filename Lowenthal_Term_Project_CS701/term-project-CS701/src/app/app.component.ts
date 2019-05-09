import { Component, OnInit, } from '@angular/core';

import { GithubjobsService } from 'src/app/services/githubjobs.service'

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'Job Search Map';
  private geocoder: any;//initialize geocoder object var
  jobs: any;//for search results and map
  jobsFromStorage: any;//for jobs from localStorage, in "Loaded Jobs container"
  jobsLocalStorage: any = [];//for creating new array in localstorage

  lat: number = 35.2271;//needed to initialize AGM map
  lng: number = -80.8431;//needed to initialize AGM map

  constructor (private githubJobsService: GithubjobsService) {};

  private initGeocoder() {
    //initializes Google Geocoder service
    console.log('Init geocoder!');
    this.geocoder = new google.maps.Geocoder();
  }

  ngOnInit(): void {
    //retrieve jobs from local storage
    let savedJobsString: string = window.localStorage.getItem("savedJobs");
    if (savedJobsString !== null) {//check to make sure jobs are saved
      let savedJobsJSON: any = JSON.parse(savedJobsString);
      this.jobsFromStorage = savedJobsJSON;    
    }
  };

  getJobs(locationArg: string): void {
    //this.githubJobsService.getGithubJobs(skillArg, locationArg)
    locationArg = locationArg.trim();
    if (locationArg.search(" ") !== -1 || locationArg.search(",") !== -1) {
      locationArg = locationArg.replace(/ /g, "%2B");//replace space with encoded character
      locationArg = locationArg.replace(/,/g, "%2C");//replace comma with encoded character
    };
    this.githubJobsService.getGithubJobs(locationArg)
      .subscribe(data => 
      {
        console.log(data);
        this.jobs = data;
        this.initGeocoder();
        for (let i = 0; i < this.jobs.length; i++) {
        //for (let i = 0; i < this.jobs.length; i++) {
          if (i == 10) {//limit for geocoder service calls within one second is 10
            break;
          } else {
            this.geocoder.geocode({'address': data[i].location}, (results, status) => {
              //geocodes; adds latitude and longitude coordinates to each job object
              if (status == google.maps.GeocoderStatus.OK) {//if geocode successful
                console.log(`Geocoding successful for ${data[i].title}`);
                let lat: number = results[0].geometry.location.lat();
                let lng: number = results[0].geometry.location.lng();
                data[i].lat = lat;
                data[i].lng = lng;
              } else {
                console.log('Error - ', results, ' & Status - ', status);
              };
            });
          };   
      };
      console.log(JSON.stringify(this.jobs));
    });
  };

  //source for drag & drop: https://medium.com/@svsh227/implement-drag-and-drop-in-angular-2-4-5-6-f27f210a0245
  drag(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  allowDrop(ev: any) {
    ev.preventDefault();
  };

  drop(ev: any) {  
    let draggedJobId = ev.dataTransfer.getData("text");
    let savedJobsString: any = window.localStorage.getItem("savedJobs");
    if (savedJobsString === null) {//if not in local storage, make new key and add item
      for (let i = 0; i < this.jobs.length; i++) {//loop through jobs in search results
        if (this.jobs[i].id == draggedJobId) {//checks JSON data for match based on id
          this.jobsLocalStorage.push(this.jobs[i]);
          let jobsStr = JSON.stringify(this.jobsLocalStorage);
          window.localStorage.setItem("savedJobs", jobsStr);
          break;
        };
      };
      this.jobsFromStorage = this.jobsLocalStorage;//updates loaded jobs container
    } else {
      let savedJobs: any = JSON.parse(savedJobsString);//parses data from local storage
      for (let i = 0; i < this.jobs.length; i++) {//loop through jobs in search results
        if (this.jobs[i].id == draggedJobId) {//checks search results data for match based on id
            savedJobs.push(this.jobs[i]);
            let savedJobsStr = JSON.stringify(savedJobs);//makes the data a string for storage
            window.localStorage.setItem("savedJobs", savedJobsStr);
            this.jobsFromStorage = savedJobs;//push to loaded jobs container
            break;
          };
      };
    };
  };
  
  deleteJob(id: string): void {
    let savedJobsString: string = window.localStorage.getItem("savedJobs");
    let savedJobsJSON: any = JSON.parse(savedJobsString);   
    for (let i = 0; i < savedJobsJSON.length; i++) {
      if (savedJobsJSON[i].id == id) {
        //removes from local storage
        savedJobsJSON.splice(i, 1);
        let jobsString = JSON.stringify(savedJobsJSON);
        window.localStorage.setItem("savedJobs", jobsString);
      };
    };
    for (let i = 0; i < this.jobsFromStorage.length; i++) {
      if (this.jobsFromStorage[i].id == id) {
        //removes from loaded jobs list
        this.jobsFromStorage.splice(i, 1);
      };
    };
  };
};
