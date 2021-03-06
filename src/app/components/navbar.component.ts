import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { User } from 'firebase';

/**
 * This component manage the NavBar
 *
 * @class NavbarComponent
 */
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

    user: User;
    constructor(public authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.getUser().subscribe(user => this.user = user, err => this.user = null);
    }
}
