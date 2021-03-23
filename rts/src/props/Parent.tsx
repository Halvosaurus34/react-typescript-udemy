import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => {
        console.log("click");
      }}
    >
      sdas
    </ChildAsFC>
  );
};

export default Parent;
