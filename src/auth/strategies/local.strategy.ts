import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import bcrypt from 'bcrypt';
import { UsersClient } from "../client.service";
import { Strategy } from "passport-local";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService, private usersClient: UsersClient) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.usersClient.findByEmail(email);
    console.log(user)

    // bcrypt.compare(password, user.password, (err, result) => {
      
    // })
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}

