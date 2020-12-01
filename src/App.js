import { useEffect, useState } from "react";
import "./App.css";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PeopleIcon from "@material-ui/icons/People";
import PaymentIcon from "@material-ui/icons/Payment";
import NewAppBar from "./components/appbar";
import svg1 from "./svg1.svg";

function App() {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("./api/books")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setbooks(data);
        });
    }, 2000);
  }, []);

  if (!books.length)
    return (
      <div class="center">
        <img src={svg1} alt="Loading" />
        <h1>
          Loading! 
        </h1>
      </div>
    );

  return (
    <div class="container">
      <NewAppBar />

      <li class="table-header">
        <div class="col col-1">
          {" "}
          <MenuBookIcon /> Book{" "}
        </div>
        <div class="col col-1">
          {" "}
          <PeopleIcon /> Auther{" "}
        </div>
        <div class="col col-1">
          {" "}
          <PaymentIcon /> Price{" "}
        </div>
      </li>

      {books.map((BooksObj, ind) => {
        return (
          <li class="table-row">
            <div class="col col-1" data-label="Job Id">
              {BooksObj.title}
            </div>
            <div class="col col-1" data-label="Customer Name">
              {BooksObj.auther}
            </div>
            <div class="col col-1" data-label="Amount">
              {BooksObj.price}
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default App;
