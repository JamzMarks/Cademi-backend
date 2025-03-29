import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class UsersClient {
    private USERS_SERVICE_URL: string;
    constructor(private readonly httpService: HttpService) {
        this.USERS_SERVICE_URL = process.env.USERS_SERVICE_URL || 'http://localhost:3001';
    }

  async findByEmail(email: string) {
      return this.httpService.get(`${this.USERS_SERVICE_URL}/users/email/${email}`);
    }
}

