import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { projectswork } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { TProjectwork } from "../../types";


const ProjectCard: React.FC<{ index: number } & TProjectwork> = ({
  index,
  title,
  companyName,
  date,
  points,
  tags,
  image,
  sourceCodeLink,
  icon,
  iconBg,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={icon}
            alt={companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {companyName}
        </p>
        {image && (
          <img
            src={image}
            alt={title}
            className="mt-4 w-full h-auto object-cover"
          />
        )}
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point, idx) => (
          <li
            key={`experience-point-${idx}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, idx) => (
          <span key={idx} className={`text-[14px] font-medium ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>

      {sourceCodeLink && (
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-secondary"
        >
          View Source
        </a>
      )}
    </VerticalTimelineElement>
  );
};

const ProjectWork = () => {
  return (
    <>
     

      <div className="mt-20 flex flex-col gap-7">
        <VerticalTimeline>
          {projectswork.map((project, index) => (
            <ProjectCard key={`projects-${index}`} index={index} {...project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(ProjectWork, "work");
