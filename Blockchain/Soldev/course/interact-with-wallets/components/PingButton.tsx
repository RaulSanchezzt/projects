import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import { FC, useState } from 'react';
import styles from '../styles/PingButton.module.css';

const EXPLORER_BASE_URL = 'https://explorer.solana.com/';

const PROGRAM_ID = 'ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa';
const DATA_ACCOUNT_PUBKEY = 'Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod';

export const PingButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [explorerLink, setExplorerLink] = useState<string | null>(null);

  const onClick = () => {
    if (!connection || !publicKey) {
      return;
    }

    const programId = new web3.PublicKey(PROGRAM_ID);
    const programDataAccount = new web3.PublicKey(DATA_ACCOUNT_PUBKEY);
    const transaction = new web3.Transaction();

    const instruction = new web3.TransactionInstruction({
      keys: [
        {
          pubkey: programDataAccount,
          isSigner: false,
          isWritable: true,
        },
      ],
      programId,
    });

    transaction.add(instruction);

    sendTransaction(transaction, connection)
      .then((signature) => {
        const link = `${EXPLORER_BASE_URL}tx/${signature}?cluster=devnet`;
        setExplorerLink(link);
      })
      .catch((error) => {
        console.error('Error sending transaction:', error);
        // TODO: Handle errors and provide feedback to the user if necessary
      });
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={onClick}>
        Ping!
      </button>
      {explorerLink && (
        <p>
          View transaction on{' '}
          <a href={explorerLink} target="_blank" rel="noopener noreferrer">
            explorer
          </a>
        </p>
      )}
    </div>
  );
};
