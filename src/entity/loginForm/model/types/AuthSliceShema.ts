export interface IAuthSliceShema {
  isLoading: boolean;
  isAuth: boolean;
  error: string;
  user: IUserShema;
}
export interface IUserShema {
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  token: string;
}
