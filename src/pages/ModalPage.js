import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button success onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>here are some words bla bla bla!</p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius
        nunc vitae leo aliquam pulvinar. Aenean auctor vulputate ex ut bibendum.
        Praesent sodales dolor in lacus mollis dictum. Maecenas diam lacus,
        imperdiet eget bibendum eu, rhoncus euismod neque. In pellentesque
        mauris cursus condimentum vehicula. Vivamus sem mauris, tincidunt vitae
        augue at, luctus consectetur tortor. Morbi mollis sollicitudin interdum.
        Quisque elementum lacus justo, a venenatis est lobortis at. Vivamus
        vitae pretium nibh. Curabitur gravida, ipsum nec porta finibus, nisl
        mauris mollis nisl, ut ultrices orci justo quis dui. Pellentesque
        malesuada nulla sapien, eget aliquet lorem bibendum et.
      </p>
      <Button onClick={handleClick} primary>
        open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
