import Client from "./client";
import Server from "./server";

export default function Home() {
  return (
    <Server>
      {(nonce) => <Client nonce={nonce} />}
    </Server>
  );
}
