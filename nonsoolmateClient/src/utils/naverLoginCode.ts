// 인가코드 처리하는 함수입니당~

import { NAVER_AUTH_URL } from "@api/auth/naverLogincode";

export function naverLoginCodeHandler() {
  // console.log(NAVER_AUTH_URL);
  // const regex = /code=([^&]*)/;
  // const matches = NAVER_AUTH_URL.match(regex);

  // // 매치된 값이 있다면 첫 번째 그룹(인가 코드)을 추출
  // const code = matches ? matches[1] : "he";

  // console.log(matches); //
  const url = NAVER_AUTH_URL;

  // 정규식을 사용하여 'code' 파라미터 찾기
  const regex = /code=([^&]*)/;
  const matches = url.match(regex);

  // 매치된 값이 있다면 첫 번째 그룹(인가 코드)을 추출
  const code = matches ? matches[1] : null;

  console.log(NAVER_AUTH_URL);
}
