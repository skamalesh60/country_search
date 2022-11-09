import {Component, OnInit} from '@angular/core';
import {CommonService} from "../services/common.service";
import {RegionList} from "../region-list";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  region: any = '';
  public RegionListModel: RegionList;
  regionLists: any = [];
  selectedCountry: any = '';
  countryLists: any = '';

  constructor(private service: CommonService) {
    this.RegionListModel = new RegionList();
  }

  getCountryList(): any {
    this.selectedCountry = '';
    this.service.getCountriesList(this.region).subscribe(response => {
      this.countryLists = response;
    });
  }

  clear(): any {
    this.region = '';
    this.selectedCountry = '';
  }

  getCountryDetails(): any {
    let countryDetails: any = [];
    for (let i = 0; i < this.countryLists.length; i++) {
      if (this.countryLists[i].name == this.selectedCountry) {
        countryDetails.push(this.countryLists[i]);
      }
    }
    this.service.getCountryDetailsService(countryDetails);
  }

  ngOnInit(): void {
    this.regionLists = this.RegionListModel.value;
  }
}
