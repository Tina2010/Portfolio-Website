import { Card, Tag } from "antd";
import { useState } from "react";
import { JournalManiaContainer } from "./projects/journalMania";
import { WebsiteRedesignContainer } from "./projects/websiteRedesign";
import { BasicCaseStudyContainer } from "./projects/basicCaseStudy";
import { PokemonContainer } from "./projects/pokemon";
import { HolyChatContainer } from "./projects/holyChat";
import { MeetAppContainer } from "./projects/meetApp";
//import basicCaseStudyFrontImage from "../img/basicCaseStudyFrontImage.png";
import webshopRedesignFrontImage from "../img/webshopRedesignFrontImage.png";
import journalManiaFrontImage from "../img/journalManiaFrontImage.png";
import pokemon from "../img/pokemon.png";
import chat from "../img/chat.png";
import meetApp from "../img/meetApp.png";

const { Meta } = Card;

export const ProjectOverviewContainer = () => {
  const [currentView, setCurrentView] = useState("overview");

  const ProjectCard = ({ alt, src, title, description, onClick, type }) => (
    <Card
      hoverable
      style={{ width: 240, marginBottom: "20px" }}
      cover={
        <>
          <img draggable={false} alt={alt} src={src} />
          <div
            style={{
              position: "absolute",
              top: "9px",
              left: "9px",
            }}
          >
            <Tag key="ux" color={type === "ux" ? "pink" : "blue"} variant="outlined">
              {type === "ux" ? "UX Design" : "Engineering"}
            </Tag>
          </div>
        </>
      }
      onClick={onClick}
    >
      <Meta title={title} description={description} />
    </Card>
  );

  const mainRender = () => {
    switch (currentView) {
      case "journalMania":
        return (
          <JournalManiaContainer onBack={() => setCurrentView("overview")} />
        );
      case "websiteRedesign":
        return (
          <WebsiteRedesignContainer onBack={() => setCurrentView("overview")} />
        );
      case "basicCaseStudy":
        return (
          <BasicCaseStudyContainer onBack={() => setCurrentView("overview")} />
        );
      case "pokemon":
        return (
          <PokemonContainer onBack={() => setCurrentView("overview")} />
        );
      case "holyChat":
        return (
          <HolyChatContainer onBack={() => setCurrentView("overview")} />
        );
      case "meetApp":
        return (
          <MeetAppContainer onBack={() => setCurrentView("overview")} />
        );
      default:
        return (
          <div className="ProjectGrid">
            <ProjectCard
              alt="Webshop App"
              src={journalManiaFrontImage}
              title="Journal Mania"
              description="Design of a shop which specialises in journaling (products)"
              onClick={() => setCurrentView("journalMania")}
              type="ux"
            />
            <ProjectCard
              alt="Webshop Redesign"
              src={webshopRedesignFrontImage}
              title="Website Redesign"
              description="Redesign of a webshop"
              onClick={() => setCurrentView("websiteRedesign")}
              type="ux"
            />
            {/* <ProjectCard
              alt="Basic Case Study"
              src={basicCaseStudyFrontImage}
              title="The basic case study"
              description="Creation of a basic case study"
              onClick={() => setCurrentView("basicCaseStudy")}
              type="ux"
            /> */}
            <ProjectCard
              alt="PokéDex APP"
              src={pokemon}
              title="PokéDex APP"
              description="Showcase of a PokéDex app"
              onClick={() => setCurrentView("pokemon")}
              type="engeneering"
            />
            <ProjectCard
              alt="holyChat"
              src={chat}
              title="holyChat"
              description="Showcase of a chat app"
              onClick={() => setCurrentView("holyChat")}
              type="engeneering"
            />
            <ProjectCard
              alt="meet App"
              src={meetApp}
              title="meet App"
              description="Showcase of an app for meeting new people"
              onClick={() => setCurrentView("meetApp")}
              type="engeneering"
            />
          </div>
        );
    }
  };

  return (
    <div>
      {mainRender()}
      <iframe
        title="Journal Mania Figma Prototype"
        style={{
          border: "1px solid rgb(255, 255, 255)",
          width: "450px",
          height: "800px",
          display: currentView === "journalMania" ? "block" : "none",
        }}
        src="https://embed.figma.com/proto/hDM9h4AqW79ZhFxiW7rw4C/Journal-Mania?node-id=19-160&scaling=scale-down&content-scaling=fixed&page-id=4%3A2&starting-point-node-id=19%3A160&embed-host=share"
        allowfullscreen
      ></iframe>
      <iframe
        title="Website Redesign Figma Prototype"
        style={{
          border: "1px solid rgb(255, 255, 255)",
          width: "800px",
          height: "600px",
          display: currentView === "websiteRedesign" ? "block" : "none",
        }}
        src="https://embed.figma.com/proto/zQ2jjowNahrh5KpJA60l36/Webshop-Redesign?node-id=17-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=3%3A3&embed-host=share"
        allowfullscreen
      ></iframe>
    </div>
  );
};