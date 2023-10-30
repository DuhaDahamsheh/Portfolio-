import React, { useState } from "react";
("use client");
import { Button, Modal, Select } from "flowbite-react";
const Project2 = () => {
  const [openModal, setOpenModal] = useState("" || undefined);
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal("placement")}>
        SHOW DETAILS
      </Button>

      <Modal
        show={props.openModal === "placement"}
        position={props.modalPlacement}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Small modal</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>
            I accept
          </Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Project2;