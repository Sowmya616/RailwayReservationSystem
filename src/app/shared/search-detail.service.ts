import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchDetail } from './search-detail.model';
import { SearchTrain } from './search-train';

@Injectable({
  providedIn: 'root'
})
export class SearchDetailService {

  constructor(private http:HttpClient) { }

  formData: SearchDetail= new SearchDetail();
  readonly baseUrl = 'https://localhost:44367/Train/Search';

  postSearch(searchTrain:SearchTrain){
  
    return this.http.post(this.baseUrl,searchTrain);
  }
}
