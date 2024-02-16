const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const e = props.excerzises;
  return (
    <div>
      <p>
        {e[0].part} {e[0].excerzise}
      </p>
      <p>
        {e[1].part} {e[1].excerzise}
      </p>
      <p>
        {e[2].part} {e[2].excerzise}
      </p>
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total_excerzises}</p>;
};
const App = () => {
  const course = "Half Stack application development";
  const excerzises = [
    {
      part: "Fundamentals of React",
      excerzise: 10,
    },
    {
      part: "Using props to pass data",
      excerzise: 7,
    },
    {
      part: "State of a component",
      excerzise: 14,
    },
  ];
  let total = 0;
  excerzises.forEach((element) => {
    total += element.excerzise;
  });

  return (
    <div>
      <Header course={course} />
      <Content excerzises={excerzises} />
      <Total total_excerzises={total} />
    </div>
  );
};

export default App;
