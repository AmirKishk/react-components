import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Button onClick={handleClick} primary>
        open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
}

export default ModalPage;
