import { readFileSync } from "fs";

const nope = readFileSync("notavailable.txt", "utf8").split("\n");

export function GET() {
  return new Response("Hello, world!", {
    status: 200,
  });
}
