import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  constructor(private router:Router) { }
  

  ngOnInit(): void {
  }
  OnPress()
  {
    this.router.navigate(["fileupload"])

  }
  Onclick()
  {
    this.router.navigate(["bargraph2"])
  }

  OnCheck()
  {
    this.router.navigate(["bargraph3"])
  }
}
