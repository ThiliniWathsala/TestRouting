import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
//import {DepartmentListComponent} from '../department-list/department-list.component';
 
@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  public departmentId;

  ngOnInit() {
    //  let id=parseInt(this.route.snapshot.paramMap.get('id'));
      //this.departmentId=id;

      this.route.paramMap.subscribe((params:ParamMap)=>{
        let id = parseInt(params.get('id'));
        this.departmentId=id;

      
      })
    }
   

  onPrevious(){
    let pid=this.departmentId-1;
    this.router.navigate(['/department',pid]);
  }
  
  onNext(){
    let nid=this.departmentId+1;
    this.router.navigate(['/department',nid]);
  }

 


}
