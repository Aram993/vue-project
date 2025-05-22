import { toast } from "vue3-toastify";

export const notify = (text, toastType) => {
  toast(text, {
    autoClose: 3000,
    type: toastType,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}



