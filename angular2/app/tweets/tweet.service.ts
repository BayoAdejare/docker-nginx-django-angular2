/**
 * Created by devin on 3/29/2016.
 */
import {Injectable} from "angular2/core";
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class TweetService
{
    tweetUrl = "http://thatcan.be/lib/get_tweets.php?";

    constructor(private http: Http){}

    getTweet(name: String)
    {
        var fullTweetUrl = this.tweetUrl + "username=" + name + "&ntweets=200";
        return this.http.get(fullTweetUrl).map(result => result.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}