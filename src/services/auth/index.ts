import { FieldValues } from "react-hook-form";

export const loginUser = async(userData : FieldValues)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(userData),
        });
        const result = await res.json()
        
        console.log(result);
        return result;
        
    } catch (error) {
        console.log(error)
    }

}