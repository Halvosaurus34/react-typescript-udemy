interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <h1>
      {color}
      <button onClick={onClick}>Click Me</button>
    </h1>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color} <button onClick={onClick}>Click Me</button>
    </div>
  );
};
