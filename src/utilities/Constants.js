import { toast } from 'react-toastify';

export const toaster = (msg, data) => {
    if(msg == 1) {
      return  toast.success(data);
    }
    if( msg == 2) {
       return toast.error(data);
    }
    if(msg == 3) {
       return toast.info(data);
    }
}

export const Fisrt_Name = 'First name is Required !'