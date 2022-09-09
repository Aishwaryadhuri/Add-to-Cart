// import { Component, OnInit } from '@angular/core';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/service/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
// // faLock=faLock;
// loginForm = new FormGroup({
//   email: new FormControl(''),
//   password: new FormControl(''),
// });
//   constructor(private auth: AuthService, private router: Router) { }

//   ngOnInit(): void {
//       // if (this.auth.isLoggedIn()) {
//       //   this.router.navigate(['cart']);
//       // }
//       }
//       onSubmit(): void {
//         if (this.loginForm.valid) {
//           this.auth.login(this.loginForm.value).subscribe(
//             (result) => {
//               console.log(result);
//               this.router.navigate(['/products']);
//             },
//             (err: Error) => {
//               alert(err.message);
//             }
//           );
//         }
//       }
// }
