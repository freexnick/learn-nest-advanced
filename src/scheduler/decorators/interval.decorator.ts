import { SetMetadata } from '@nestjs/common';

export const INTERVAL_KEY = 'INTERVAL_KEY';
export const Interval = (ms: Number) => SetMetadata(INTERVAL_KEY, ms);
