import { Component } from '@angular/core'
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  //url ="https://nbtest.free.beeceptor.com/miner";
  url="assets/data.json";
  items=[];
 
  constructor(private http:HttpClient){
  this.http.get(this.url).toPromise().then(data =>{  // for url I used post method
  console.log(data['result']);

  for (let item in data['result']){
 
  if(data['result'].hasOwnProperty(item)){
      this.items.push(data['result'][item]);
      }
  }
   console.log(this.items);
   });
  }
}
