import { Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {Router, NavigationStart, ActivatedRoute} from '@angular/router';
import { AuthenticationService } from './login.service';
import { AlertService } from './alert.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentUserLogin: boolean = false;
  panelOpenState: boolean = false;
  buttonOption:boolean = true;
  email:string;
  nickName:string;

  constructor(private alertService: AlertService,private authenticationService: AuthenticationService ,private router:Router, private activatedRoute: ActivatedRoute,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/menu.svg'));

      iconRegistry.addSvgIcon(
          'multi_chart',
          sanitizer.bypassSecurityTrustResourceUrl('assets/multi_chart.svg'));

      iconRegistry.addSvgIcon(
              'home',
              sanitizer.bypassSecurityTrustResourceUrl('assets/home.svg'));

    }

    ngOnInit() {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
              if(localStorage.getItem('currentUser')){
                this.currentUserLogin = true;
                let curentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.email= curentUser.username;
                this.nickName = curentUser.nickname;
              }
              else{
                this.currentUserLogin = false;
              }
            }
          });
        }

      logedOut(){
        this.authenticationService.logout()
        .subscribe(
            data => {
                localStorage.removeItem('currentUser');
                this.router.navigate(['login']);
            },
            error => {
                this.alertService.error(error.message);
                //this.loading = false;
            });
      }


      
    }
