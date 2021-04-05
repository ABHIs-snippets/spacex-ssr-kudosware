import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {

  url = `https://api.spaceXdata.com/v3/launches?limit=100`;
  mission = new Subject<any>();

  constructor(private Http: HttpClient) {
    this.Http.get(this.url).subscribe(res=>this.mission.next(res),err=>console.log(err));
  }

  filter(filterObj:any){
    let updateUrl = this.url;
if(filterObj.year) updateUrl = `${updateUrl}&launch_year=${filterObj.year}`;
if(filterObj.launch) updateUrl = `${updateUrl}&launch_success=${filterObj.launch}`;
if(filterObj.landing) updateUrl = `${updateUrl}&land_success=${filterObj.landing}`;
this.Http.get(updateUrl).subscribe(res=>this.mission.next(res),err=>console.log(err));
  }

}


