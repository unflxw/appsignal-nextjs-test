export function register() {
  console.log("register() in instrumentation.js called!")
  if (process.env.NEXT_RUNTIME === "nodejs") {
    require("./appsignal.cjs");
  }
}
