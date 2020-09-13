import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public objects: any = []
  public buttons = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  constructor(private appService: AppServiceService) { }
  ngOnInit() {
    this.appService.defaultCall().subscribe((data) => {
        this.objects = data
      }),
      (err) => {
        console.log("Defaullt API Call is failed", err)
      }
  }

  selBtn(selectedYear) {
    this.appService.yearLaunchCall(selectedYear).subscribe((yearSeldata) => {
        this.objects = yearSeldata;
      }),
      (err) => {
        console.log("Year selcted Call is failed", err)
      }
  }

  trackByFilterId(index,object){
    return object.flight_number;
  }

  launchSuccessBtn(launchSel) {
    if (launchSel == 'true') {
      this.appService.launchCall().subscribe((launchSuccessdata) => {
          this.objects = launchSuccessdata;
        }),
        (err) => {
          console.log("Launch selcted Call is failed", err)
        }
    }
  }

  landSuccessBtn(landSel) {
    if (landSel == 'true') {
      this.appService.landCall().subscribe((landSuccessdata) => {
          this.objects = landSuccessdata
          console.log("data LandSuccessdata Received", this.objects, landSuccessdata);
        }),
        (err) => {
          console.log("Land selcted Call is failed", err)
        }
    }
  }
}
