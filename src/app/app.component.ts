import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foodlisa';
  
  ngOnInit() {
    if (!this.userService.getUser().token) {
      this.router.events
        .pipe(
          filter(event => event instanceof RoutesRecognized),
          take(1)
        )
        .subscribe((e: any) => {
          if (!!e.state.root.queryParams['token']) {
            this.setToken(e.state.root.queryParams['token']);
          } else {
            this.dialogOpen(1); //reconnect
          }
        });
    }
  }

  setToken(token: string) {
    if (!!token) {
      this.userService.setToken(token);
      this.spinnerService.load();
      this.dataService.connect(token).subscribe((data: IData) => {
        this.spinnerService.hide();
        if (!!data.errorcode) {
          this.dialogOpen(data.errorcode);
        } else {
          let user = data.res[0];
          this.setLogin(user.account);
          this.userService.setOne(user);
        }
      });
    }
  }

  dialogOpen(errorcode) {
    let dialogRef = this.dialog.open(DialogAlertComponent, {
      width: '550px',
      data: {
        errorcode: errorcode
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.service.backLogin();
    });
  }

  setLogin(account: string) {
    this.storageService.setKey(account);
    this.loginService.login();
  }
}
