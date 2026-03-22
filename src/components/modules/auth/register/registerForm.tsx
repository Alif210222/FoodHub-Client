"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { loginUser, registerUser } from "@/services/auth"

const formSchema = z.object({
      name: z.string().min(1,"This field is required "),
      email: z.string().email("Invalid Email !"),
      password: z.string().min(5,"Minimum length is 6 characters !"),
      role: z.enum(["CUSTOMER","PROVIDER"]),

})

export function RegisterForm() {
      const router = useRouter()


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
      email: "",
      password: "",
      role:"CUSTOM"
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
        // console.log(data);
    try {
        const res = await registerUser(data)
        
        if(res.success === true) {
             toast.success(res.message || "Register Successfully !")
             router.push("/")
        }
        else{
             toast.error(res.message)
        }
        
    } catch (error:any) {
        toast.error(error.message)
        
    }
  
  }



  return (
    <Card className="w-full lg:mt-10 sm:max-w-md">
      <CardHeader>
        <CardTitle>Register here</CardTitle>
       
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
             {/* Name */}
               <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your name"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

             <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password ****"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

             
            <Controller
                 name="role"
                 control={form.control}
                 render={({ field, fieldState }) => (
                   <Field data-invalid={fieldState.invalid}>
                     <FieldLabel>Role</FieldLabel>
                     <select
                       {...field}
                       className="w-full border rounded-md p-2"
                     >
                       <option value="">Select Role</option>
                       <option value="CUSTOMER">Customer</option>
                       <option value="PROVIDER">Provider</option>
                     </select>
               
                     {fieldState.invalid && (
                       <FieldError errors={[fieldState.error]} />
                     )}
                   </Field>
                 )}
/>


          </FieldGroup>
        </form>
      </CardContent>


      <CardFooter>
        <Field orientation="vertical">
       
          <Button type="submit" form="form-rhf-demo">
            Register
          </Button>
         <Button>
          <Link href="/">
            Go to Home
          </Link>
         </Button>
        </Field>
      </CardFooter> 
       <p className="text-center">Already have an account  <Link href={"/login"}><span className="underline text-blue-500" >Login</span> </Link></p>
    </Card>
  )
}
