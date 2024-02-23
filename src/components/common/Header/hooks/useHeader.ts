import { postUserLogout } from "@/utils/api/requests/logout"
import { clearToken } from '@/utils/AuthSlice/slice';
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