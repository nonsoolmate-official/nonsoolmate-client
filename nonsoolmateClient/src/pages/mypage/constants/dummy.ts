import Profile from "@assets/image/profile.png";
import konkukLogo from "../../../assets/image/konkuk.png";
import kyungheeLogo from "../../../assets/image/kyunghee.png";

type Image = string;

interface Teacher {
  status?: string;
  name: string;
  profile: Image;
  isPass: boolean;
}

interface University {
  name: string;
  logo: Image;
}

interface Mentor {
  student: string;
  teacher?: Teacher;
  description: string;
  universities: University[];
}

export const MENTOR: Mentor = {
  student: "류가은",
  teacher: {
    status: "matched",
    name: "김성원",
    profile: Profile,
    isPass: true, // 논술 합격 인증 여부
  },
  description:
    "안녕하세요. 김성원입니다. 8년 경력동안 수강생 99%가 만족하는 수업을 하고 있습니다. 오랜 기간 논술 과외 및 첨삭 경력을 기반으로 일관성 있는 지도를 하고 있습니다. 믿고 따라와 주세요!",
  universities: [
    {
      name: "건국대",
      logo: konkukLogo,
    },
    {
      name: "경희대",
      logo: kyungheeLogo,
    },
  ],
};
