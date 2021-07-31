@Injectable()
export class AppService {
  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) {}

  backLogin() {
    this.userService.delUser();
    this.loginService.logout();
    //  window.location.href = LoginUrl;
  }
}
