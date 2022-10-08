import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchDetailService } from '../shared/search-detail.service';
import { NgForm } from '@angular/forms';
import { SearchTrain } from '../shared/search-train';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  date?:any;
public searchTrain=new SearchTrain('','',this.date);
  constructor(private _service: SearchDetailService) { }

  ngOnInit(): void {}

  
  onSubmit() {
    this._service.postSearch(this.searchTrain).subscribe(
      value =>{
        console.log(value);
      },
    error =>{
      console.log(error.error.msg);
    }
      
    )
      
    }
  }
  

