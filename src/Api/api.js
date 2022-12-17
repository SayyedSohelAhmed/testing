import { BASE_URL } from "../constant/constant"
export const fetchApi= async ()=>{
    return  await fetch(`${BASE_URL}`)
}
