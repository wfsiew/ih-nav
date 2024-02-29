import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'mynav';
  listFloors = ['GF', '1F', '2F', '3F', '5F', '7F', '8F'];
  selectedFloor = 'GF';
  fromX = 'Registration';
  toX = 'Cafeteria';

  listNav = [
    {
      from: 'Registration',
      to: 'Cafeteria',
      fx1: 'GF',
      fx2: '2F',
      im1: 'x1',
      im2: 'x2'
    }
  ];

  hasNav(fx: string) {
    let r = this.listNav.find(k => k.from === this.fromX && k.to === this.toX);
    if (r) {
      return r.fx1 === fx || r.fx2 === fx;
    }

    return false;
  }

  hasNavFrom(fx: string) {
    let r = this.listNav.find(k => k.from === this.fromX);
    if (r) {
      return r.fx1 === fx;
    }

    return false;
  }

  hasNavTo(fx: string) {
    let r = this.listNav.find(k => k.to === this.toX);
    if (r) {
      return r.fx2 === fx;
    }

    return false;
  }

  getFloor() {
    let f = this.selectedFloor.toLowerCase();
    let r = this.listNav.find(k => k.from === this.fromX && k.to === this.toX);
    if (r) {
      if (this.selectedFloor === r.fx1) {
        return r.im1;
      }

      else if (this.selectedFloor == r.fx2) {
        return r.im2;
      }
    }

    return f;
  }
}
