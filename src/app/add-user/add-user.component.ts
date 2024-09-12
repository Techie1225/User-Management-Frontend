import { Component } from '@angular/core';
import { user } from '../user';
import { Observable } from 'rxjs';
import { userService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';





@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
  ,
  styleUrls: ['./add-user.component.css']
})
export class AdduserComponent //implements OnInit//
{

  constructor(
    private userService: userService,
    private router: Router,

  ) {

  }


  submitform!: NgForm;
  private baseURL = "http://localhost:8080/api/v1/users";
  user: user = new user();
  




  saveuser() {
    this.userService.adduser(this.user).subscribe(data => {
      console.log(data);
      this.goTouserList();
    },
      error => console.log(error));
  }

  goTouserList() {
    this.router.navigate(['/show-all-users']);
  }

  ngOnInit(): void { }
  onSubmit() {
    console.log(this.user);


    this.saveuser();
  }


}









