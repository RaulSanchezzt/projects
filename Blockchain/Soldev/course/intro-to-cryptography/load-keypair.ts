import * as dotenv from "dotenv";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";

dotenv.config();

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);