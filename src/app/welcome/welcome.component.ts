import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
user: User;
constructor( private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    if(localStorage.length>0)
    {
this.userService.delete_User(localStorage.getItem('id'));
localStorage.clear();
    }
  }
  CreateRecord() {
    const record = {};
    record['pseudo'] =this.user.pseudo;
 
    this.userService.create_NewUser(record).then(resp => {
      localStorage.setItem('pseudo',this.user.pseudo);
      localStorage.setItem('id', resp.id);
      localStorage.setItem("room",'chat');

    window.location.replace('accueil');
    console.log(resp);
 
       })
         .catch(error => {
           console.log(error);
         });
       }
}
