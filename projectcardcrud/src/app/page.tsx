"use client";
import React, { ReactNode, useState } from "react";
import { CardList } from "@/components/atoms";
import { Modal } from "@/components";
import { Card } from "@/components/atoms";
import { FormUpdate } from "@/components/atoms/form";
import { ValidationForm } from "@/components/atoms/form/ValidationForm";
import { SearchInput } from "@/components/atoms/form/SearchInput";
import AddContext from "@/components/addcontext/Addcontext";
import addContextModal from "@/components/addcontext/addContextModal";
import addNewUserContext from "@/components/addcontext/addNewUsercontext";
import addUpdateUserContext from "@/components/addcontext/addUpdateUserContext";

export interface User {
  id: string;
  username: string;
  profile: string;
  profilevideo: string;
}
interface CreatePops {
  children: ReactNode;
}
export default function Home({ children }: CreatePops) {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [selectCard, setSelectCard] = useState("");
  const selectedUser = users.filter((user) => {
    if (user.id === selectCard) {
      return user;
    }
  });

  const handleDeleteCard = (id: string) => {
    const deleteItem = users.filter((users) => users.id !== id);
    setUsers(deleteItem);
  };
  const handleSearch = users.filter((item) => {
    if (item.username.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });
  return (
    <div className="inline-block items-center justify-center mx-auto w-full">
      <AddContext.Provider value={{ setSearch }}>
        <SearchInput></SearchInput>
      </AddContext.Provider>
      {search ? (
        <>
          {/* <AddSearch.Provider value={{search,users,handleDeleteCard}}  >
          <SearchCard />
          </AddSearch.Provider> */}
          <CardList
            onDeleteCard={handleDeleteCard}
            // items={users.filter((user) =>
            //   user.username.toLowerCase().includes(search.toLowerCase())
            // )}
            items={handleSearch}
            selectCard={selectCard}
            onSelectCard={setSelectCard}
          />
        </>
      ) : (
        <>
          <CardList
            onDeleteCard={handleDeleteCard}
            items={users}
            selectCard={selectCard}
            onSelectCard={setSelectCard}
          />
        </>
      )}
      <addContextModal.Provider value={selectCard} >
      <Modal >
        {selectedUser.length > 0 ? (
          <>
            <FormUpdate selectedUser={selectedUser[0]} updateUser={setUsers} />
            {/* <addUpdateUserContext.Provider value={{ selectedUser: selectedUser[0], setUser: setUsers }}>
            <FormUpdate  />
            </addUpdateUserContext.Provider> */}
          </>
        ) : (
          <>
             <addNewUserContext.Provider value={{setUsers}}>
             <ValidationForm  />
             </addNewUserContext.Provider>
           
          </>
        )}
      </Modal>
      </addContextModal.Provider >
     
    </div>
  );
}
