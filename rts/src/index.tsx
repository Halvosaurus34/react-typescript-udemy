import reactDOM from "react-dom";
import UserSearch from "./refs/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

reactDOM.render(<App />, document.querySelector("#root"));
