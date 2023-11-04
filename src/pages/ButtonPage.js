import Button from "../components/Button";
import {
  GoBellFill,
  GoCodeReview,
  GoCodeOfConduct,
  GoEye,
  GoHubot,
} from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button primary outline className="mb-0" onClick={handleClick}>
          <GoBellFill />
          Click Khalto!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCodeReview />
          BuyeNow!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoCodeOfConduct />
          Haha!
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoEye />
          Hoho!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoHubot />
          Hehe!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
