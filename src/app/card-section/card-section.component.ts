import { Component, OnInit} from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit{

  missions = [] as any;
  filterObj:any = this.server.filter;

  constructor(private server:ServerService) { }


  ngOnInit(): void {
    this.server.mission.subscribe(res=>this.missions = res,err=>console.log(err));
  }


}
