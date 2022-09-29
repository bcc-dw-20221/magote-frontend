import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  username: string = '';
  password: string = '';

  resposta: string = '';

  destroy$: Subject<void> = new Subject<void>();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(({ username, password }) => {
      this.username = username || '';
      this.password = password || '';
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  login(): void {
    this.loginService.login({ username: this.username, password: this.password });
    console.log(this.loginService.get_token())
  }
}
