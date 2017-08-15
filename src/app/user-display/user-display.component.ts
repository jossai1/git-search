//  Copyright (C) 2017 Jane Ossai
import { Component, OnInit } from '@angular/core';
import { SharedService  } from  '../services/shared-service.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  userData:any;
  userFollowerData:any;

  constructor(private sharedService: SharedService,  private router: Router ) { }

  ngOnInit() {

    this.userData = this.sharedService.getUserData();
    this.userFollowerData = this.sharedService.getUserFollowerData();
    console.log(this.userData, this.userFollowerData);

    //put check to say that if the obbjects are null -> navigate back to serach page

    //check if undefined-> meaning user came to url without going through search component
    //prevents users from accessing the url dircetly
    if(this.userData || this.userFollowerData)
    {

    } else {
      //reroute
      //prevents console error
        this.userData = { };
        this.userFollowerData ={ };
        this.router.navigate(["search"]);


    }
  }





}
