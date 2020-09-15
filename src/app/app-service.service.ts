import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  defaultCall(){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100',httpOptions)
  }

  launchCall(){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true',httpOptions)
  }

  landCall(){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&land_success=true',httpOptions)
  }

  yearLaunchCall(year){
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`,httpOptions)
  }



}
