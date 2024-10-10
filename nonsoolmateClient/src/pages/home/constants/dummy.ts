import female from "@assets/image/female.png";

interface UserProfile {
  userName: string;
  avatarUrl: string;
  planType: string;
  permissions: {
    editCount: number;
    reEditCount: number;
  };
}

export const USER: UserProfile = {
  userName: "류가은",
  avatarUrl: female,
  planType: "베이직",
  permissions: {
    editCount: 3,
    reEditCount: 1,
  },
};
