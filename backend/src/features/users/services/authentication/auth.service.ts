import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {JwtPayload} from '../../interfaces/jwt-payload';
import {UserLoginDto} from '../../dtos/user-login-dto';


@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
	) {
	}

	async signIn(userLoginDto: UserLoginDto): Promise<string | { error: string }> {
		// In the real-world app you shouldn't expose this method publicly
		// instead, return a token once you verify user credentials
		if (this.usersService.findUserByCredentials(userLoginDto)) {
			const user: JwtPayload = {email: 'user@email.com'};
			return this.jwtService.sign(user);
		} else {
			return {
				error: "invalid credentials"
			};
		}
	}

	async validateUser(jwtPayload: JwtPayload): Promise<any> {
		return await this.usersService.findUserByUserName(jwtPayload.email);
	}
}
