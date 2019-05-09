import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Job } from "./job";
//import { map } from 'rxjs/operators';
//import { MapsAPILoader } from '@agm/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubjobsService {

  constructor(private http: HttpClient) { }

  getGithubJobs(locationArg: string): Observable<any> {  

    let url: string = `https://jobs.github.com/positions.json?location=${locationArg}`;
    console.log(url);
    return this.http.jsonp('location_of_server_script' + url, 'callback');
  }; 
};
