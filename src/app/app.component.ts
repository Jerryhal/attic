import { User } from './user.model';
import { AuthorizationService } from './authorization.service';
import { ResourceService } from './resource.service';
import { Story } from './story.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public model: User = {username: null, password: null};

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit() {
  }
  public login() {
    this.authorizationService.login({
      username: this.model.username, 
      password: this.model.password
    });
  }

  public signup() {
    this.authorizationService.signup({
      username: this.model.username, 
      password: this.model.password
    });
  }
}
