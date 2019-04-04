import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {

  title: string = 'ng-app';
  date = Date.now();
  products = [
    {
      'name': 'Product1',
      'price': 12,
    },
    {
      'name': 'Product2',
      'price': 12,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  isBtnDisabled(): boolean {
    return true;
  }

  btnClic(event) {
    alert('Hello!');
  }

  getObjectClassesFromArray(): string[] {
    let classes = new Array();
    if (true)
      classes.push('class1');
    if (true)
      classes.push('class2');
    console.log(classes);
    return classes;
  }

  getObjectClasses(): {} {
    return {
      'class1': true,
      'class2': false
    }
  }

}
