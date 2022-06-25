import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : Object;
  constructor(
    private validateService: ValidateService,
    private flashMessage : FlashMessagesService,
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
      //console.log(profile['user'].name);
      this.user = profile['user'];
    },
    err =>{
      console.log(err);
      return false;
    });
  }

}
