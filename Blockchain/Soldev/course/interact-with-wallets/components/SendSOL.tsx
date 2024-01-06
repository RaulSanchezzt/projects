import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { FC, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export const SendSOL: FC = () => {
  const [balance, setBalance] = useState(0);
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [txSig, setTxSig] = useState("");

  const link = () => {
    return txSig
      ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
      : "";
  };

  const sendSol = (event) => {
    event.preventDefault();
    if (!connection || !publicKey) {
      return;
    }
    const transaction = new web3.Transaction();
    const recipientPubKey = new web3.PublicKey(event.target.recipient.value);

    const sendSolInstruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: recipientPubKey,
      lamports: LAMPORTS_PER_SOL * event.target.amount.value,
    });

    transaction.add(sendSolInstruction);
    sendTransaction(transaction, connection).then((sig) => {
      setTxSig(sig);
    });
  };

  useEffect(() => {
    if (!connection || !publicKey) {
      return;
    }

    // Ensure the balance updates after the transaction completes
    connection.onAccountChange(
      publicKey,
      (updatedAccountInfo) => {
        setBalance(updatedAccountInfo.lamports / LAMPORTS_PER_SOL);
      },
      "confirmed"
    );

    connection.getAccountInfo(publicKey).then((info) => {
      setBalance(info.lamports);
    });
  }, [connection, publicKey]);

  return (
    <div>
      <p>{publicKey ? `Balance: ${balance / LAMPORTS_PER_SOL}` : ""}</p>
      {publicKey ? (
        <form onSubmit={sendSol} className={styles.form}>
          <label htmlFor="amount">Amount (in SOL) to send:</label>
          <input
            id="amount"
            type="text"
            className={styles.formField}
            placeholder="e.g. 0.1"
            required
          />
          <br />
          <label htmlFor="recipient">Send SOL to:</label>
          <input
            id="recipient"
            type="text"
            className={styles.formField}
            placeholder="e.g. 89C36mjiq91kRRsXWN3VPaVwtfDp8b8qt5Dyz3h7vWEp"
            required
          />
          <button type="submit" className={styles.formButton}>
            Send
          </button>
        </form>
      ) : (
        <span>Connect Your Wallet</span>
      )}
      {txSig ? (
        <div>
          <p>View your transaction on </p>
          <a href={link()}>Solana Explorer</a>
        </div>
      ) : null}
    </div>
  );
};
