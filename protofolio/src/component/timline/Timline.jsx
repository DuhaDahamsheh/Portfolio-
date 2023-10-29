import React from "react";
("use client");
import { Button, Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
const Timline = () => {
  return (
    <div className="grid min-h-screen place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-800 to-black">
      <h5
        className="tracking-tight  title text-4xl font-black text-teal-400  dark:text-white"
        style={{ fontFamily: "Georgia, serif" ,gap:"2rem",  padding:"4rem"}}
      >
        <p className="title">What did duha's passion for programming start?</p>
      </h5>
<div>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              <p>
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              <p>
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              <p>
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
    </div>
  );
};

export default Timline;
