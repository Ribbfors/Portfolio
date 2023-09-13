"use client";

import { Timeline } from "flowbite-react";
import { timelineData } from "@/data";

const CustomTimeline = () => {
  return (
    <div>
      <Timeline>
        {timelineData.map((item) => (
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time className="text-neutral-300">
                {item.time}
              </Timeline.Time>
              <Timeline.Title className="text-neutral-200">
                {item.title}
              </Timeline.Title>
              <Timeline.Body>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default CustomTimeline;
