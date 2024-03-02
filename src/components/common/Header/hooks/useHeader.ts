import { clearToken } from '@/utils/AuthSlice/slice';
import { postUserLogout } from '@/utils/api/requests/user/logout';
import { AppDispatch } from "@/utils/store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const useHeader = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const handleLogout = () => {
        postUserLogout();
        dispatch(clearToken())
        navigate('/login')
   }

   return {handleLogout}
}