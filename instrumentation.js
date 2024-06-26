export function register() {
  console.log("register() in instrumentation.js called!")
  console.log("NEXT_RUNTIME", process.env.NEXT_RUNTIME)

  require("./appsignal.cjs");
}
