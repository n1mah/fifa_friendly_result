import type { NextFetchEvent ,NextRequest} from "next/server";
import { Pool } from '@neondatabase/serverless';
export const config={
    runtime:"edge",
}
export async function GET(req :NextRequest,event:NextFetchEvent) {
    const SQL=`SELECT * FROM persons;`
    const pool = new Pool({connectionString: process.env.DATABASE_URL});
    const {rows}= await pool.query(SQL);
    const now =rows[0]
    // event.waitUntil(pool.end())

    return new Response(JSON.stringify({now}),{
        status:200,
    })
}


// export async function GET(request: Request) {
//     return new Response(JSON.stringify({name:"ali"}), {
//         status: 200,
//     })}
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