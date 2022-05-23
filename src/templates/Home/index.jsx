import { useCounterContext } from "../../contexts/CounterContext/index.jsx";

export const Home = () => {
  const [state, dispatch] = useCounterContext();
  return <div>Oi</div>;
};
