import { successfulPost } from './successfulPost.model';
import { WordDefinition } from './wordDefinition.model';
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
  public model: User = { username: null, password: null };


  public status: string;

  public inputWord: string;
  public wordDescription: string;

  public buttonText = "Add a word definition";

  public addingWord = false;

  public wordDefinition: WordDefinition = { title: null, description: null };

  constructor(private resourceService: ResourceService, private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  public searchWord() {
    this.resourceService.get(this.inputWord).subscribe(results => {
      let result = <WordDefinition>results;
      this.wordDefinition.title = result.title;
      this.wordDefinition.description = result.description;
      this.status = "";
    });
    err => {
      this.status = "could not find definition for word";
    }
  }

  public addWordDefinition() {
    if (!this.addingWord) {
      this.addingWord = true;
      this.buttonText = "Send!";
    }
    if (this.wordDescription && this.wordDescription.length > 3) {
      let param: WordDefinition = {
        title: this.inputWord,
        description: this.wordDescription
      };
      this.resourceService.post(param).subscribe(result => {
        let res = <successfulPost>result;
        if (res.success === true) {
          this.inputWord = null;
          this.wordDescription = null;
          this.addingWord = false;
          this.buttonText = "Add a word definition";
          this.status = "";
        } else if (res.success === false) {
          this.status = "could not add definition for word";
        }
      },
        err => {
          this.status = "could not add definition for word";
        });
    }
  }

  // public login() {
  //   this.authorizationService.login({
  //     username: this.model.username, 
  //     password: this.model.password
  //   });
  // }

  // public signup() {
  //   this.authorizationService.signup({
  //     username: this.model.username, 
  //     password: this.model.password
  //   });
  // }
}
