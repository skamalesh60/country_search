import {Component, OnInit} from '@angular/core';
import {CommonService} from "../services/common.service";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  countryDetailsData: any = '';

  constructor(private service: CommonService) {
  }

  ngOnInit(): void {
    this.service.selectedCountry.subscribe((value) => {
      this.countryDetailsData = value;
    })
  }
}
