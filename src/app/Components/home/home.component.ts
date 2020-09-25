import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any;
  filtereddata:any;
  types:Array<any> = ["All"];
  activetype:string = "All";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
    
  }

  loadData(){
    this.httpClient.get('../../../assets/MOCK_DATA.json').subscribe(res=>{
      this.data = res;
      this.filtereddata = res;
      this.getType();
    })
  }

  getType(){
    for(var i=0; i<this.data.length;i++){
      let t = this.data[i]["type"]
      if(this.types.indexOf(t)==-1){
        this.types.push(t)
      }
    }
  }

  filterByType(value){
    this.activetype = value;
    if(value == "All"){
      this.data = this.filtereddata;
    }
    else{
    this.data = this.filtereddata.filter(i=>i["type"]==value)
    }
  }

}
