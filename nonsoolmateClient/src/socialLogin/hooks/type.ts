export interface loginResProps {
  data: {
    code: number;
    message: string;
    data: {
      memberId: number;
      authType: string;
      memberName: string;
      accessToken: string;
      refreshToken: string;
    };
  };
}

export interface loginErrorProps {
  response: {
    data: {
      code: number;
      message: string;
    };
  };
}
