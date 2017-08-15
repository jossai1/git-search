import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Headers, Http, RequestOptions, Response,Jsonp} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubApiService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
}

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  /* searches github api for user using the provided username
    returns promise of api result
  */
  fetchUserData (username: string): Promise<any> {
      console.log('getting github stuff');
      let url ='https://api.github.com/users/'+username;
      console.log(url);
      return  this.http.get(url)
                   .toPromise()
                   .then(response => response.json())
                   .catch(this.handleError);

  }

  /* takes a user's folower endpoint
   returns a promise containg the result (user's follower data)
  */
  fetchUserFollowers (folowerUrl: string): Promise<any> {
      console.log(folowerUrl);

      return  this.http.get(folowerUrl)
                   .toPromise()
                   .then(response => response.json())
                   .catch(this.handleError);

  }
}
