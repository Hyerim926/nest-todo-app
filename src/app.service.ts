import { Injectable } from '@nestjs/common';

// 서비스 로직
@Injectable()
export class AppService {
  getHello(): string {
    return 'AppService - getHello';
  }
  postHello(): string {
    return 'AppService - postHello';
  }
  putHello(): string {
    return 'AppService - putHello';
  }
  deleteHello(): string {
    return 'AppService - deleteHello';
  }
}
