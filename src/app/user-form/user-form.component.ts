import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userForm !: FormGroup;

  ngOnInit(){
    this.userForm = new FormGroup({
      username : new FormControl(""),
      password : new FormControl(""),
      address : new FormControl("")
    });
  }
}
