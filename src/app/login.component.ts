import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({templateUrl: 'login.component.html'})
export class LoginComponent  implements OnInit {

    submitted: boolean;
    loginForm: FormGroup;
    displayUsers: boolean = false;
    error: string;
    
    users = [
	{ email: "admin@gmail.com", password: "1234"},
	{ email: "dummy@email.com", password: "dummy"},
	{ email: "emailname@domain.com", password: "password"}
    ];
    
    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ){}


    get controls() {
	return this.loginForm.controls;
    }

    toggleUsers() {
	this.displayUsers = !this.displayUsers;
    }
    
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    loginError() {
	const email    = this.controls.email.value.trim();
	const password = this.controls.password.value;
	
	const user = this.users.find(user => user.email === email);
	if (!user)
	    return this.error = "User not found";
	else if (user.password !== password)
	    return this.error = "Wrong password";
	
    }
    
    onSubmit() {
        // Display input validation error 
	if (this.loginForm.invalid)
	    this.submitted = true;
	else
	    // If login failed display an error otherwise redirect to '/account'
	    this.loginError() || this.router.navigate(['/account']);
    }


}
