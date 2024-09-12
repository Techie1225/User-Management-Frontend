import { Component } from '@angular/core';
import { user } from '../user';
import { Router } from '@angular/router';
import { userService } from '../user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateuserComponent {


  
  


    id: number;
  user: user = new user();
  
  
  constructor(private userService: userService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.id=0
    }
    //loading the data into form 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getuserById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
 
 
  }

  onSubmit(){
    this.userService.updateuser(this.id, this.user).subscribe( data =>{
      this.goTouserList();
    }
    , error => console.log(error));
  }

  goTouserList(){
    this.router.navigate(['/show-all-users']);
  }
}
