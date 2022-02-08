import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})

export class AddRecordComponent implements OnInit {

  addForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    dob: ['', Validators.required],
    role: ['', Validators.required],
    phones: this.fb.array([
      this.fb.control('')
    ]),
    gender: ['', Validators.required]
  });

  public ValueList: any = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    debugger
    if (localStorage.getItem('dataSource')) {
      this.ValueList = localStorage.getItem('dataSource');
      this.ValueList = JSON.parse(this.ValueList);
    }
    const newValue = {
      'name': this.addForm.value.name,
      'address': this.addForm.value.address,
      'dob': this.addForm.value.dob,
      'role': this.addForm.value.role,
      'phones': this.addForm.value.phones.join(),
      'gender': this.addForm.value.gender
    }

    this.ValueList.push(newValue);
    localStorage.setItem('dataSource', JSON.stringify(this.ValueList));
  }

  get phones() {
    return this.addForm.get('phones') as FormArray;
  }

  addphones() {
    this.phones.push(this.fb.control(''));
  }

}
