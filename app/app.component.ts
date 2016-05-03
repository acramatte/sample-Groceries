import {Component} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";

import {User} from "./shared/user/user";
import {UserService} from "./shared/user/user.service";

@Component({
    selector: "my-app",
    providers: [UserService, HTTP_PROVIDERS],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
    user:User;
    isLoggingIn = true;

    constructor(private _userService: UserService) {
        this.user = new User();
        this.user.email = "at@at.at";
        this.user.password = "1234";
    }

    submit() {
        if(this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
        // TODO: define
    }

    signUp(){
        this._userService.register(this.user)
            .subscribe(() => {
                alert("Your account was successfully created.");
                this.toggleDisplay();
                }, () => alert("Unfortunately we were unable to create your account.")
            );
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

}