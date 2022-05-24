import { Button } from "../../Components/Button/index.jsx";
import { Heading } from "../../Components/Heading/index.jsx";
import { useCounterContext } from "../../contexts/CounterContext/index.jsx";

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ":", e.message));
  };

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button
          onButtonClick={() => {
            actions.setCounter({ counter: 10 });
          }}
        >
          Set 10
        </Button>
        <Button
          onButtonClick={() => {
            actions.setCounter({ counter: 100 });
          }}
        >
          Set 100
        </Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          Async Increase Start
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          Async Increase Error
        </Button>
      </div>
    </div>
  );
};
