import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments=[
    {"id":1,"name":"IT"},
    {"id":2,"name":"CM"},
    {"id":3,"name":"IDS"}
  ];

  showDetai(id){
    return DepartmentListComponent.name;
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onselect(department){
      this.router.navigate(['/department',department.id]);
  }

}
