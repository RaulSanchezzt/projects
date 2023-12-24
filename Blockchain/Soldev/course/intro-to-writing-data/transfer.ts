// Import necessary Solana web3.js modules and dependencies
import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";
import "dotenv/config"; // Import the dotenv configuration module
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";

// Get the destination public key from command line arguments or set it to null
const suppliedToPubkey = process.argv[2] || null;

// Check if a destination public key is provided; exit if not
if (!suppliedToPubkey) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}

// Retrieve the sender's keypair from the environment variable "SECRET_KEY"
const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`suppliedToPubkey: ${suppliedToPubkey}`);

// Create a PublicKey instance for the destination public key
const toPubkey = new PublicKey(suppliedToPubkey);

// Establish a connection to the Solana devnet
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`
);

// Create a new Solana transaction
const transaction = new Transaction();

// Define the amount to be sent in lamports (0.2 SOL)
const LAMPORTS_TO_SEND = 200000000;

// Create a Solana SystemProgram transfer instruction
const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
});

// Add the transfer instruction to the transaction
transaction.add(sendSolInstruction);

// Send and confirm the Solana transaction, using the sender's keypair
const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderKeypair,
]);

console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `
);
console.log(`Transaction signature is ${signature}!`);

// Provide a link to view the transaction on the Solana Explorer
console.log(
  `You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`,
);
