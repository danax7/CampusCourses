import { api } from "@/utils/api/instance";

//   export const getGroupCoursesById = async (id: string) =>{
//     api.get<CampusCourseDto[]>(`/groups/${id}`,{
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     });
//   }
  
  export const getGroupCoursesById = async (id: string) => {
    const response = await api.get<CampusCourseDto[]>(`/groups/${id}`,{
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });

    console.log(response.data)
    return response.data;
}