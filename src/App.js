import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click Khalto!
        </Button>
      </div>
      <div>
        <Button danger outline>
          BuyeNow!
        </Button>
      </div>
      <div>
        <Button secondary>Haha!</Button>
      </div>
      <div>
        <Button>Hoho!</Button>
      </div>
      <div>
        <Button>Hehe!</Button>
      </div>
    </div>
  );
}

export default App;
