import React, { useState } from "react";
("use client");
import { Button, Modal, Select } from "flowbite-react";
import { Blockquote } from "flowbite-react";
import ReactPlayer from "react-player";
import "./style.css";
const Project1 = () => {
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
                BRANDING STOR
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
                  Hello and welcome to Branding Stor, the place to find the best
                  clothes and jewelry for every taste and occasion. We
                  thoroughly check the quality of our goods, working only with
                  reliable suppliers so that you only receive the best quality
                  product.
                </p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                  <p className="mb-3 font-thin text-xl text-gray-100 dark:text-gray-100">
                    We at Branding Stor believe in high quality and exceptional
                    customer service. But most importantly, we believe shopping
                    is a right, not a luxury, so we strive to deliver the best
                    products at the most affordable prices, and ship them to you
                    regardless of where you are located.
                  </p>
                  <Blockquote className="mb-3">
                    <ReactPlayer
                      width="290px"
                      height="300px"
                      url="https://youtu.be/9K9dj8ydYfI"
                    />
                  </Blockquote>
                  <div>
                    <h2 className=" text-2xl font-semibold text-white">
                      Biult Using :
                    </h2>
                    <ul className=" font-thin text-white">
                      <li>MongoDB</li>

                      <li>React JS</li>

                      <li>Node JS</li>

                      <li>Express JS</li>
                    </ul>
                  </div>
                </div>{" "}
                <div>
                  <h2 className=" text-2xl font-semibold text-white">
                    GitHub Link :
                  </h2>

                  <a
                    className=" text-lg  "
                    href="https://github.com/C8-DuhaDahamsheh/MERAKI_Academy_Project_4"
                  >
                    https://github.com/C8-DuhaDahamsheh/MERAKI_Academy_Project_4{" "}
                  </a>
                </div>
                <div>
                  <h2 className=" text-2xl font-semibold text-white">
                    Trello Link :
                  </h2>

                  <a
                    className=" text-lg "
                    href="https://trello.com/b/KZAz1anh/e-commerce-website"
                  >
                    https://trello.com/b/KZAz1anh/e-commerce-website
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

export default Project1;
