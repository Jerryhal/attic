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
  title = 'attic';
  public data;
  public model: Story = {title: null, description: null};
  public dataa;

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {}

  public post() {
    if (this.model.title !== null) {
      this.resourceService.post(this.model);
    }
  }
}
