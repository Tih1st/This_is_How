interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'Fu13jUwRX1XJX6pJucx5dH9cZaGRrtV1',
  domain: 'balemail0.auth0.com',
  // callbackURL: 'https://serene-bose-588a2f.netlify.com/'
  callbackURL: 'http://localhost:4200'
  //callbackURL: 'https://priceless-stonebraker-28f31a.netlify.com/'
};
