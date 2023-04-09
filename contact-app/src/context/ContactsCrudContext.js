import { createContext, useContext, useState } from "react";
import api from "../api/contacts";

const contactsCrudContext = createContext();

export function ContacstCrudContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
  };

  const value = {
    contacts,
    retrieveContacts,
  };

  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(contactsCrudContext);
}
