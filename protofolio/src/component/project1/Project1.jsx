import React, { useState } from "react";
("use client");
import { Button, Modal, Select } from "flowbite-react";
const Project1 = () => {
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
        style={{zIndex:1}}
      >
        <Modal.Header>BRANDING STOR </Modal.Header>

        <Modal.Body>
          <div className="space-y-6 p-6">
            <h2 className="mt-4 text-xl font-semibold">Discription :</h2>
            <p className="text-base leading-relaxed text-black dark:text-gray-400">
              Hello and welcome to Branding Stor, the place to find the best
              clothes and jewelry for every taste and occasion. We thoroughly
              check the quality of our goods, working only with reliable
              suppliers so that you only receive the best quality product.
              <br/> 
              We at Branding Shop believe in high quality and exceptional customer
              service. But most importantly, we believe shopping is a right, not
              a luxury, so we strive to deliver the best products at the most
              affordable prices, and ship them to you regardless of where you
              are located.
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

export default Project1;
