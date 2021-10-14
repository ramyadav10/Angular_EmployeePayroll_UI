import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl:'./add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  onchange:any;
  employee:Employee =new Employee("","","",0,"");
  message:any;

  constructor(private service: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employee;
  }

  public registerNow(){
    let response=this.service.doRegistration(this.employee);
    response.subscribe(data =>{this.message=data} )
    console.log(this.message);
  }
}
