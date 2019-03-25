import { Component } from '@angular/core';
import { MenuItem } from './shared/MenuItem'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GrabnGo';
  routerActive: string;
  items: MenuItem[];

  constructor(private route: ActivatedRoute, private router: Router) {
    // console.log("ROUTER INGO", route)
    // console.log(route.url['value'])

    // this.routerActive = router.url;
    console.log(this.router.url)


  }


  ngOnInit() {
 
  }

}
