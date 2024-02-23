import { clearToken } from '@/utils/AuthSlice/slice';
import { postUserLogout } from '@/utils/api/requests/user/logout';
import { AppDispatch } from "@/utils/store/store";
import { useDispatch } from "react-redux";

export const useHeader = () => {
    const dispatch: AppDispatch = useDispatch();
    const handleLogout = () => {
        postUserLogout();
        dispatch(clearToken())
   }

   return {handleLogout}
}