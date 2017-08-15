//  Copyright (C) 2017 Jane Ossai
/* this service is responsible for passing the 'username' from the SearchComponent to the UserDisplayComponent*/
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() { }

  username:string;

  /** data retruned from git search
  passed from search
  passed to user-display**/
  userData: any;
  userFollowerData:any;

  //sets userdata and folowerdata
  setData(userData:any, userFollowerData:any)
  {
    this.userData = userData;
    this.userFollowerData = userFollowerData;
  }

  getUserData () : any {
    return this.userData;
  }

  getUserFollowerData (): any {
    return this.userFollowerData;
  }



}
