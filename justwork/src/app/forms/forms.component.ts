import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  details:any
  constructor() { }

  onSubmit(val:any){
console.log(val)
  }

  ngOnInit(): void {
    this.details= new FormGroup({
      title:new FormControl(""),
      description: new FormControl(""),
      Male: new FormControl(""),
      Female: new FormControl(""),
      any: new FormControl(""),
      qualification:new FormControl(""),
      skills: new FormControl(""),
      salary: new FormControl(0)


    })
  }

}
