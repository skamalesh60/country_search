import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private url = "https://restcountries.com/v2/region/";

  private countryDetails = new BehaviorSubject<any>({});
  selectedCountry = this.countryDetails.asObservable();

  constructor(private http: HttpClient) {
  }

  getCountriesList(region: string): Observable<any> {
    let url = this.url + region;
    return this.http.get(url);
  }

  getCountryDetailsService(countryDet: string) {
    this.countryDetails.next(countryDet);
  }
}
