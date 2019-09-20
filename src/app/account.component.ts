import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({templateUrl: 'account.component.html'})
export class AccountComponent  implements OnInit {

    submitted: boolean;
    loginForm: FormGroup;

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
    
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    onSubmit() {
	if (this.loginForm.invalid)
	    this.submitted = true;
	else
            this.router.navigate(['/account'])
    }


}
