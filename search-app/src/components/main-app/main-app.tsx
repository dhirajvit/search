import "./main-app.scss";

const Comp1 = () => <div className="comp1">'comp1'</div>;
const Comp2 = () => <div className="comp2">'comp2'</div>;

const MainApp: React.FC = () => {
  return (
    <div className="App">
      <Comp1 />
      <Comp2 />
    </div>
  );
};

export default MainApp;
