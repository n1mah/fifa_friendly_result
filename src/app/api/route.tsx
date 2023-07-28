import type { NextFetchEvent ,NextRequest} from "next/server";
//
// export const config={
//     runtime:"edge",
// }
// export default function home(req :NextRequest,res:NextFetchEvent) {
//     // const  a = "ABout"
//     // return (
//     //     <div>
//     //         <h1 className='text-center py-6'>{a}</h1>
//     //     </div>
//     // )
//     console.log('aaa')
//     return new Response(JSON.stringify({name:"an"}),{
//         status:200,
//     })
// }


export async function GET(request: Request) {
    return new Response(JSON.stringify({name:"ali"}), {
        status: 200,
    })}
// export default function Page() {
//     return <h1>Hello, Next.js!</h1>
// }

import { cookies } from 'next/headers'

// export async function GET(request: Request) {
//
//     return new Response('Hello, Next.js!', {
//         status: 200,
//     })
// }

//
// import { NextResponse } from 'next/server'
//
// export async function GET() {
//     const res = await fetch('https://data.mongodb-api.com/...', {
//         next: { revalidate: 60 }, // Revalidate every 60 seconds
//     })
//     const data = await res.json()
//
//     return NextResponse.json(data)
// }