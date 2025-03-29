import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {


  login(email: string, password: string): Boolean {
    
    return true
  }

  logout(email: string, password: string): Boolean {
    
    return true;
  }
  
}
