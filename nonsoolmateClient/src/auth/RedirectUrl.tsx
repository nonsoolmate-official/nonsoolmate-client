import { useEffect } from "react";

export default function RedirectUrl() {
  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
  });

  return <div>RedirectUrl</div>;
}
