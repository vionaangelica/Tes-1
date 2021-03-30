import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private route : ActivatedRoute) { 
    let image = this.route.snapshot.paramMap.get('img');
  }

  ngOnInit() {
  }

}
