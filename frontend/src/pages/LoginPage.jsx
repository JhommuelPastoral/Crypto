import { Button } from "../components/ui/button.jsx"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import {auth, signInWithPopup, provider } from "../../firebase/firebase.auth.js"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {login} from '../lib/api.js'
import toast from "react-hot-toast"
export default function LoginPage() {
  const queryClient = useQueryClient()

  const {mutate: loginUser} = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Logged in successfully", {id: "login"});
      queryClient.invalidateQueries({
        queryKey: ["authUser"]
      })
    },
    onMutate: () => {
      toast.loading("Logging in...", { id: "login" })
    },
    onError: (error) => {
      toast.dismiss()
      toast.error(error.response.data.message, { id: "login" })
    },
    
  })

  const handleGoogleSignIn = async () => {
    const user = await signInWithPopup(auth, provider)
    const email = user.user.email
    const name = user.user.displayName
    const photo = user.user.photoURL
    loginUser({email, name, photo})
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          {/* <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction> */}
        </CardHeader>
        <CardContent className='space-y-3'>
          <Button  variant="outline" className="w-full">
            Login With Facebook
          </Button>
          <Button variant="outline" className="w-full cursor-pointer" onClick={handleGoogleSignIn}>
            Login with Google
          </Button>
            <Button variant="outline" className="w-full cursor-pointer" onClick={handleGoogleSignIn}>
            Login with Github
          </Button>          
          <Button variant="outline" className="w-full cursor-pointer" onClick={handleGoogleSignIn}>
            Login with Apple
          </Button>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          {/* <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full cursor-pointer" onClick={handleGoogleSignIn}>
            Login with Google
          </Button> */}
        </CardFooter>
      </Card>

    </div>

  )
}
