import { AuthService } from '@modules/auth/services/auth.service';
import { UserService } from '@modules/auth/services/user.service';

export const services = [AuthService, UserService];

export * from '@modules/auth/services/auth.service';
export * from '@modules/auth/services/user.service';
