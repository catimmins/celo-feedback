const Kit = require('@celo/contractkit');
const messageBoard = require('./build/contracts/MessageBoard.json');

const kit = Kit.newKit('https://alfajores-forno.celo-testnet.org');

const getAccount = require('./getAccount').getAccount;

async function awaitWrapper() {
  let account = await getAccount();
  kit.addAccount(account.privateKey);

  let tx = await kit.sendTransaction({
    from: account.address,
    data: messageBoard.bytecode
  });
  const reciept = await tx.waitReceipt();
  console.log(reciept);
}

awaitWrapper();
