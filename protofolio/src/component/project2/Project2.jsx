import React, { useState } from "react";
("use client");
import { Button, Modal, Select } from "flowbite-react";
import { Blockquote } from "flowbite-react";
import ReactPlayer from "react-player";
import "./style.css";
const Project2 = () => {
  const [openModal, setOpenModal] = useState("" || undefined);
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal("placement")}>
        SHOW DETAILS
      </Button>
      <div>
        <Modal
          show={props.openModal === "placement"}
          position={props.modalPlacement}
          onClose={() => props.setOpenModal(undefined)}
        >
          <div className=" bg-gradient-to-b from-slate-900 via-purple-900 to-black">
            <Modal.Header>
              <h1 className="tracking-tight  title text-2xl font-black text-teal-500  dark:text-white">
                {" "}
                CURE APP (MEDICAL APP)
              </h1>
            </Modal.Header>

            <Modal.Body>
              <div className="space-y-2">
                <section className="wrapper">
                  <div id="stars"></div>
                </section>
                <h2 className=" text-2xl font-semibold text-white">
                  Discription :
                </h2>
                <p className="mb-3 font-thin text-xl text-gray-100 dark:text-gray-100">
                  App of Health care services which are provided by providers of
                  different specialities to a wide range of care seekers at
                  their homes ,which makes it easier for the patients to get
                  help!
                </p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                  <div>
                    <h2 className=" text-2xl font-semibold text-white">
                      Biult Using :
                    </h2>
                    <ul className=" font-thin text-xl text-white">
                      <li>React-Redux</li>
                      <li>React JS</li>
                      <li>Node JS</li>
                      <li>Express JS</li>
                      <li>bootstrap</li>
                      <li>PosgteSQL</li>
                    </ul>
                  </div>
                  <Blockquote className="mb-3">
                    <ReactPlayer
                      width="290px"
                      height="300px"
                      url="https://www.youtube.com/watch?v=2a3Oxq4uooE&t=295s"
                    />
                  </Blockquote>
                </div>{" "}
                <div>
                  <h2 className=" text-2xl font-semibold text-white">
                    GitHub Link :
                  </h2>

                  <a
                    className=" text-lg  "
                    href="https://github.com/Girl-Power2/MERAKI_Academy_Project_5"
                  >
                    https://github.com/Girl-Power2/MERAKI_Academy_Project_5{" "}
                  </a>
                </div>
                <div>
                  <h2 className=" text-2xl font-semibold text-white">
                    Trello Link :
                  </h2>

                  <a
                    className=" text-lg "
                    href='https://trello.com/b/LEUHLtAA/cure-app'
                  >
                    https://trello.com/b/LEUHLtAA/cure-app
                  </a>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Project2;
