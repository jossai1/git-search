//  Copyright (C) 2017 Jane Ossai

import { Component, OnInit } from '@angular/core';
import { SharedService  } from  '../services/shared-service.service';
import { GithubApiService  } from  '../services/github-api.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubApiService]
})
export class SearchComponent implements OnInit {

  constructor(private sharedService: SharedService, private githubApiService: GithubApiService, private router: Router  ) { }

  ngOnInit() {
  }

  username:string = "";
  error: any ;
  userData: any;
  userFollowerData: any;

  /*takes user inputed 'username' and passes it to gitservice to  perform search */
  search (username:string) {

    if(username.length > 3) {
      console.log(username);

      //get user data
      this.githubApiService
                .fetchUserData(username)
                .then(data => this.userData = data) //get user info from github
                .then(followersData => this.userFollowerData = this.githubApiService.fetchUserFollowers(this.userData.followers_url)) //get the fetched user's followers
                .then(() => console.log(this.userData,this.userFollowerData)) //will remove//for testing
                .then (() => this.sharedService.setData(this.userData,this.userFollowerData)) //share with sharedService
                .then(() =>this.router.navigate(["user-display"])) //then route to userdisplay component
                .catch(error=> this.error = error);
      //once loaded then we need to get the 'follower' url from the returned obj and pass it to the service
      //get user follower list


      //once results are gotten we then need to save them to the shared srvice and then route
    }
    else{
      console.log("longername please!");
    }

  }
}
