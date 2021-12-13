import React, { createContext, useContext, useState } from 'react';
import { CONTRACT_NAME  } from 'variables/Constants';

const DataContext = createContext();

export const ContractProvider = ({ children }) => {
  const defaultContractId = CONTRACT_NAME;

  console.log(defaultContractId, "  ******************* ", process.env.NODE_ENV);
  const contractId = localStorage.getItem('CONTRACT_ID');
  !contractId && localStorage.setItem('CONTRACT_ID', defaultContractId);

  const [data, setData] = useState(contractId ?? defaultContractId);

  const setContractId = (contractId) => {
    localStorage.setItem('CONTRACT_ID', contractId);
    setData(contractId);
  };

  return <DataContext.Provider value={{ contractId: data, setContractId }}>{children}</DataContext.Provider>;
};

export const useContract = () => useContext(DataContext);
