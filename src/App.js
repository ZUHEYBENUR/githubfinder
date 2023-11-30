import Navbar from "../src/conponents/Navbar";
import Search from "../src/conponents/Search";
import UserList from "../src/conponents/UserList";
import UsersContextProvider from "./conponents/context/usersContext";
import AlertContextProvider from "./conponents/context/alertContext";
import Alert from "../src/conponents/Alert"

function App() {
  return (
    <UsersContextProvider>
      <AlertContextProvider>
        <Navbar />
        <Search />
        <Alert />
        <div className="container mt-3">
          <UserList/>
        </div>
      </AlertContextProvider>
    </UsersContextProvider>
  );
}

export default App;
