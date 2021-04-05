import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css'],
})
export class FilterBoxComponent implements OnInit {
  constructor(private server: ServerService) {}
  ngOnInit(): void {}

  filterObj = {
    year: null,
    launch: null,
    landing: null
  };
  btnHighlight = {
    year: null,
    launch: null,
    landing: null
  }

  years = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];
  update_yr(year: any,e:any) {
  this.filterObj.year =  this.filterObj.year===year ? null : year ;
  this.change(e.target, "year");
    this.update();
  }
  update_launch(status: any,e:any) {
    this.filterObj.launch = this.filterObj.launch===status ? null : status;
    this.change(e.target,"launch");
    this.update();
  }
  update_landing(status: any,e:any) {
    this.filterObj.landing = this.filterObj.landing===status ? null : status;
    this.change(e.target, "landing");
    this.update();
  }
  update() {
    this.server.filter(this.filterObj);
  }

  change(elem , prev){
    elem.style = "background-color: #30b430";
    if(this.btnHighlight[prev]) this.btnHighlight[prev].style = "background-color: rgb(178, 236, 178)";
    this.btnHighlight[prev] = elem;
  }


}
