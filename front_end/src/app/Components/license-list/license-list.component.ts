import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrl: './license-list.component.css'
})
export class LicenseListComponent {

  constructor(private dataService:DataService,private router:Router){}
  list:any[]=[];

  ngOnInit(){
    this.dataService.getData().subscribe((data)=>{
      this.list=data;
    },(err)=>{
      console.log(err);
    })

  }

   
  //  async onButtonClick(){
  //    console.log(1);
  //  await this.router.navigate(['new-license']).then(success => {
  //   if (success) {
  //     console.log('Navigation successful');
  //   } else {
  //     console.log('Navigation failed');
  //   }
  // }).catch(err => {
  //   console.error('Navigation error:', err);
  // });
  //  }
  // onButtonClick(){
  //   console.log("hello");
  // }

  onButtonClick():void{
    console.log(1);
  this.router.navigate(['new-license']).then(success => {
   if (success) {
     console.log('Navigation successful');
   } else {
    //  console.log('Navigation failed');
      console.log('Navigation failed. Current URL:', this.router.url);
      console.log('Target URL:', 'new-license');
   }
 }).catch(err => {
   console.error('Navigation error:', err);
 });
  }

}