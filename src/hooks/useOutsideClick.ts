import { MutableRefObject, useEffect } from "react";

export default function useOutsideClick<T extends HTMLElement>(ref: MutableRefObject<T | null>, onClose: () => void) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [ref, onClose]);
}
