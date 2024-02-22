interface UserRefisterDto {
  fullName: string;
  birthDate?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserLoginDto {
  email: string;
  password: string;
}
