import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private localSt:LocalStorageService) {}

  logOut(){
    this.localSt.clear()
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
