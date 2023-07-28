

export async function GET(request: Request) {
    return new Response(JSON.stringify({name:"hi"}), {
        status: 200,
    })}
