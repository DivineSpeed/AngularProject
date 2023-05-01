import { Component, NgModule } from '@angular/core';
import { employetype } from '../models/employetype';

import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})

export class AuthentificationComponent {
  public email!: string;
  public employes:employetype[]=[];
  public errorMessage:string | null =null;
  public employe: employetype | undefined;
 
  //injecter le service
  constructor (private activateRoute:ActivatedRoute,
    private employeesService:EmployeesService,
    private router:Router) {
  }

  ngOnInit():void{ 
  }
  public clickconnecter() {
    if (this.email) {
      this.employeesService.getEmployeeEmail(this.email).subscribe(data => {
        if (Array.isArray(data)) {
          this.employe = data[0];
        } else {
          this.employe = data;
        }
        console.log(this.employe?.title);
  
        if (this.employe?.title === "rh") {
          this.router.navigate(['./home' ]);
        }
        if (this.employe?.title === "employe") {
          this.router.navigate(['./HomePage/:email' + this.email]);
        }
        if (this.employe?.title === "chef de projet") {
          this.router.navigate(['./ProjlistComponent/:email' + this.email]);
        }

      }, error => {
        this.errorMessage = error;
      });
    }
  }
  
  
}
