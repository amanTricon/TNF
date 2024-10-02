import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrl: './license-list.component.css'
})
export class LicenseListComponent {

  constructor(private dataService:DataService){}
  list:any[]=[];

  ngOnInit(){
    this.dataService.getData().subscribe((data)=>{
      this.list=data;
      console.log(this.list);
    },(err)=>{
      console.log(err);
    })
  }

}
