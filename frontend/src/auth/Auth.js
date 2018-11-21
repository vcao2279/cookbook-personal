import auth0 from "auth0-js";

class Auth {
  constructor() {
    this.authFlag = "isLoggedIn";

    this.auth0 = new auth0.WebAuth({
      domain: "lambda-cookbook.auth0.com",
      clientID: "oPRYEaqCnAiPDMLxUD62PntAdb2lmLlA",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid email"
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  getIdToken = () => {
    return this.idToken;
  };

  handleAuthentication = () => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    });
  };

  setSession = authResult => {
    // Set the time that the Access Token will expire at
    this.idToken = authResult.idToken;
    // set the time that the id token will expire at
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    localStorage.setItem(this.authFlag, JSON.stringify(true));
    // navigate to the home route
    // history.replace("/home");
  };

  logout = () => {
    // Clear Access Token and ID Token from local storage
    // localStorage.removeItem("access_token");
    // localStorage.removeItem("id_token");
    // localStorage.removeItem("expires_at");
    // navigate to the home route
    // history.replace("/");
    localStorage.setItem(this.authFlag, JSON.stringify(false));
    this.auth0.logout({
      returnTo: "http://localhost:3000",
      clientID: "oPRYEaqCnAiPDMLxUD62PntAdb2lmLlA"
    });
  };

  silentAuth = () => {
    if (this.isAuthenticated()) {
      return new Promise((resolve, reject) => {
        this.auth0.checkSession({}, (err, authResult) => {
          if (err) {
            localStorage.removeItem(this.authFlag);
            return reject(err);
          }
          this.setSession(authResult);
          resolve();
        });
      });
    }
  };

  isAuthenticated = () => {
    // Check whether the current time is past the token's expiry time
    return new Date().getTime() < this.expiresAt;
  };
}

const auth = new Auth();
export default auth;
