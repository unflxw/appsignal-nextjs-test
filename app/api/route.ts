export async function GET(request: Request) {
  console.log("/api route handler called!")

  const response = await fetch("https://api.github.com/users/octocat")
  const json = await response.json()
  return new Response(`Hello, ${json.name}!`, {
    status: 200
  })
}
