import { WalletConnection, Near } from 'near-api-js'
import { NODE_ENV, CONTRACT_NAME, GAS } from './../variables/Constants';


import getConfig from './../config';

const nearConfig = getConfig(NODE_ENV, CONTRACT_NAME);

// Setting global variable to near
export const near = new Near({
  ...nearConfig
});


export const wallet = new WalletConnection(near, CONTRACT_NAME);
console.log(wallet.isSignedIn(), ' SIGNED');

/**
 * VIEW FUNCTIONS
 */


// Initialize contract & set global variables
/*export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near)

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['get_greeting'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['set_greeting'],
  })
}*/

export function get_guild_info(slug) {
  //localStorage.setItem('RESPONSE_CONTRACT', ' RESPONSE HOLA');
  const response = wallet.account().functionCall({
    contractId: CONTRACT_NAME,
    methodName: 'get_guild_info',
    args: { slug },
    gas: GAS
  });
  
  return response;
  // reload page
  //window.location.replace(window.location.origin + window.location.pathname)
}

const login = () => {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  
  try {
    wallet.requestSignIn(CONTRACT_NAME);
    console.log(CONTRACT_NAME, ' <<<<<<< CONTRACTNAME');
  } catch (error) {
    console.log("ERROR LOGIN: ", error);
  }
 
  
}

export default login;