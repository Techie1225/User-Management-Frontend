import { Component } from '@angular/core';
import { user } from '../user';
import { userService } from '../user.service';
import{FormsModule} from '@angular/forms'

import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class userListComponent {

  users: user[];
  EnteredID!:number;

  constructor(private userService: userService,  private router: Router) {
    this.users=[];
   
   }

  ngOnInit(): void {
    
    // this.users = [
    //   { "id":1,fname: 'Chetan', lname: 'Naga', email: 'Chetannaga@gmail.com', age: 28 },
      
    // ];
    
    this.getusers();
  }


  goTouser(){

    
    console.log(this.EnteredID); 
    this.router.navigate(['details-of-user',this.EnteredID]);
  }

  getusers(){
    this.userService.getusersList().subscribe(data => {this.users = data;});

    
  }

  updateuser(id: number){
    this.router.navigate(['updating-by-id', id]);
  }




  deleteuser(id: number){

    if(confirm("Are you sure to delete user ID: "+id)){
    this.userService.deleteuser(id).subscribe( data => {
      console.log(data);
      this.getusers();
    })}
  }
 

  detailsOfuser(id: number){
    this.router.navigate(['details-of-user', id]);
  }

  
}
