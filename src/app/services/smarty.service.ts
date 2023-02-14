import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SmartyService {
  GoogleMapApi = 'AIzaSyBLS61WDbiCfXIZ5dv9FWfBrPmWVa44bIY';
  localKey = '147509184860349356';
  authKey = '147509183712721272';
  authKeyAnd = '&key=147509183712721272';
  // authKey = '147509184135905995';
  authId = `&auth-id=6b6533ca-6c82-4050-7351-a8c9608d42e7`;
  authToken = '&auth-token=WHaV2mmPXCxtYedAtRr7';
  lookupUrl = 'https://us-street.api.smartystreets.com/street-address';
  autoUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?search=';
  aptUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup';
  autoLookupUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup';
  autoLookupQuery = '&search=123+mai&include_only_cities=chicago%2Cil&include_only_states=mi&prefer_states=il';
  referer = '-H referer: http://localhost:4200';
  ws = ' ';
  refUrl = `${this.autoLookupUrl}?key=${this.localKey}${this.autoLookupQuery}${this.ws}${this.referer}`

  // refUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?key=147509187321264857&search=123+mai&include_only_cities=chicago%2Cil&include_only_states=mi&prefer_states=il\' -H \'referer: http://localhost:4200';

  constructor(public http: HttpClient) {
  }

  getAddress(val: any) {
    const {street_line, secondary, city, state, zipcode} = val;
    const sl = street_line.replace(/\s/g, '+');
    const sc = secondary.replace(/\s/g, '+');
    const cty = city.replace(/\s/g, '+');
    const st = state.replace(/\s/g, '+');
    // const zp = zipcode.replace(/\s/g, '+') || null;
    return this.http.get(`${this.lookupUrl}?street=${sl}+${cty}+${st}${this.authId}${this.authToken}`);
  }

  lookup() {
    return this.http.get(`${this.refUrl}`);
    // return this.http.get(`${this.refUrl}${this.authId}${this.authToken}`);
  }

  ontest() {
    // return console.log(this.Lookup);
  }

  autoStreet(term: string): any {
    return this.http.get<any>(`${this.autoUrl}${term}${this.authId}${this.authToken}&source=all`)
      .pipe(map(data => data.suggestions))
  }

  autoSecond(val: any) {
    const ws = "";

    const {street_line, secondary, city, state, zipcode, entries} = val;
    const sl = street_line.replace(/\s/g, '+');
    const sc = secondary.replace(/\s/g, '+');
    const cty = city.replace(/\s/g, '+');
    const st = state.replace(/\s/g, '+');
    const zp = zipcode.replace(/\s/g, '+');

    const qq1 = '?search=' + street_line + ws + secondary + " " + city + ", " + state + " " + zipcode + '&selected=' + street_line + ws + secondary + " " + city + ", " + state + " " + zipcode;
    return this.http.get<any>(this.aptUrl + '?search=' + sl + '&selected=' + sl + '+' + sc + '+' + '(' + entries + ')' + '+' + cty + '+' + st + '+' + zp + this.authId + this.authToken)
  }

}
