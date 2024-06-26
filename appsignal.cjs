import { Appsignal } from "@appsignal/nodejs";

console.log("appsignal.cjs required!")

new Appsignal({
  name: "appsignal-nextjs-test",
  // Add the `disableDefaultInstrumentations` list if not present
  disableDefaultInstrumentations: [
    // Add the following line inside the list
    "@opentelemetry/instrumentation-http",
  ],
});
