import { signIn, signOut } from "@/auth"


// export default function SignIn() {
//   return (
//     <form
//       action={async () => {
//         "use server"
//         await signIn("github")
//       }}
//     >
//       <button type="submit">Signin</button>
//     </form>
//   )
// } 

export function SignIn({
  provider,
  ...props
}: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server"
        debugger
        await signIn(provider)
      }}
    >
      <button type="submit">Signin</button>
    </form>
  )
}


export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
     <button type="submit">SignOut</button>
    </form>
  )
}
