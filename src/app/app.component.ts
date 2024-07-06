import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DataService } from './data.service';
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToastModule,
    CommonModule
    //HttpClientModule
  ],
  providers: [MessageService, DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-login-system';
  //users: any[] = [];


  // constructor(private dataService: DataService) {
  //   this.dataService.getUsers().subscribe(
  //     (users: any['']) => {
  //       this.users = users;
  //     },
  //     () => {}
  //   );
  // }
}
