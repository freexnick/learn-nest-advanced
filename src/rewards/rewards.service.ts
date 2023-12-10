import { Injectable } from '@nestjs/common';

@Injectable()
export class RewardsService {
  grantTo() {
    console.log('Hello from the leazy-loaded RewardService');
  }
}
