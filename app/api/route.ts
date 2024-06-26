export async function GET(request: Request) {
  console.log("/api route handler called!")
  return new Response('Hello, Next.js!', {
    status: 200
  })
}
