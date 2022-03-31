import { JWT_SECRET, JWT_VERSION, JWT_EXPIRES_IN } from '@app/config';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface JWTData extends JwtPayload {
  createdAt: number;
  uid: string;
  username: string;
}

class JWT {
  protected secret: string;

  protected version: string;

  constructor() {
    this.secret = JWT_SECRET;
    this.version = JWT_VERSION;
  }

  private getPayload(uid: string, username: string): JWTData {
    return {
      createdAt: Date.now(),
      uid,
      username,
    };
  }

  public generate(
    uid: string,
    username: string,
  ): string {
    const tokenExpiresIn = JWT_EXPIRES_IN;
    const token = jwt.sign(this.getPayload(uid, username), this.secret, { expiresIn: tokenExpiresIn });
    return token;
  }

  public verify(token: string) {
    return jwt.verify(token, this.secret, {
      algorithms: ['HS256'],
    });
  }
}

export default new JWT();
