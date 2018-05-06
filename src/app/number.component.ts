import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NumberService } from './number.service';
import { Record } from './record';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styles: [`
    .bold{
      font-weight:bold;
    } 
  `],
  providers:[NumberService]
})
export class NumberComponent implements OnInit {

  records:Record[] = [];
  constructor(private _numberService:NumberService) { }

  ngOnInit() {
   this.getAllRecords();
  }

  getAllRecords(){
    this._numberService.getAll().subscribe(records =>{
      this.records = records as Record[];
    },err => console.log(err));
  }

  handleSubmit(numbersForm:NgForm){
   this._numberService.save(numbersForm.value).subscribe(record =>{
     this.records.push(record as Record);
   });
  }


}
