import { Component } from '@angular/core';
import { user } from '../user';
import { userService } from '../user.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {


  
  id: number
  user!: user
  constructor(private route: ActivatedRoute, private employeService: userService) { 

    this.id=0
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.user = new user();
    this.employeService.getuserById(this.id).subscribe( data => {
      this.user = data;
    });
  }

}
