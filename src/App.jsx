import jt from "./assets/jt.png";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <img src={jt} className="rounded-full mb-10" />
      <h1 className="text-4xl font-bold text-gray-800">Milind Jhatu hai!!</h1>
    </div>
  );
};

export default App;
