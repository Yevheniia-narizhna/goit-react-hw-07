import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactss } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";

function App() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactss());
  }, [dispatch]);
  return (
    <>
      <div>
        <ContactForm />
        <SearchBox />
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>Error...</h2>}
        <ContactList />
      </div>
    </>
  );
}

export default App;
