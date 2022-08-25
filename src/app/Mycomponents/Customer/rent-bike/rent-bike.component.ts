import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-rent-bike',
  templateUrl: './rent-bike.component.html',
  styleUrls: ['./rent-bike.component.css']
})
export class RentBikeComponent implements OnInit {
  id!: number;
  bike!: Config['BikeObj'];


  boid!:number
  rent!:Config['BookingObj'];

  constructor(private route: ActivatedRoute,private router: Router,private renterService: ServicesService) { }

  ngOnInit() {
    this.bike= new Config().BikeObj;

    this.id = this.route.snapshot.params['id'];
    
    this.renterService.getBikeById(this.id).subscribe(data => {
        console.log(data)
        this.bike= data;
      }, error => console.log(error));



  }

  gotoBuyNow(value: any){
    this.router.navigate(['customer/buyNow']);
  }
  Back(){
    this.router.navigate(['customer/dashboard']);
  }
  validate(start:Date, end:Date)
  {
    var currentDate =  new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    if(end<start)
    {
      alert("Enter a valid date");
    }
    
    else if(start<currentDate)
    {
      alert("Enter a valid date");
    }
  }
}