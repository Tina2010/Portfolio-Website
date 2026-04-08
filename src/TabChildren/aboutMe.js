import {
  SignatureFilled,
  ReadFilled,
  FileTextFilled,
  WechatFilled,
  FlagFilled,
  SunFilled,
  ToolFilled,
} from "@ant-design/icons";
import casey from "../img/casey.JPG";
import journaling from "../img/journaling.jpg";
import leneLogo from "../img/lene-logo.jpg";
import taubenLogo from "../img/tauben-logo.jpeg";

export const AboutMeContainer = () => {
  return (
    <div>
      <div className="AboutMeContainer">
        <p>Here are some things I enjoy doing:</p>
        <div
          className="AboutMeHeader"
        >
            <img
              src={journaling}
              alt="Journaling for life!"
              width="auto"
              height={300}
              style={{ borderRadius: 10, objectFit: "cover" }}
            />
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <SignatureFilled /> &nbsp;Working with UX Design to solve
              problems
            </li>
            <li>
              <ReadFilled /> &nbsp;Reading all kinds of books
            </li>
            <li>
              <FileTextFilled /> &nbsp;Journaling
            </li>
            <li>
              <WechatFilled /> &nbsp;Getting to know new people
            </li>
            <li>
              <FlagFilled /> &nbsp;Playing video games
            </li>
            <li>
              <SunFilled /> &nbsp;Taking walks with my dog
            </li>
            <li>
              <ToolFilled /> &nbsp;Working on self-improvement
            </li>
          </ul>
            <img
              src={casey}
              alt="My dog Casey"
              width="auto"
              height={300}
              style={{ borderRadius: 10, objectFit: "cover" }}
            />
        </div>
        <p style={{ maxWidth: 800 }}>
          In addition to these hobbies, I volunteer at a local pigeon rescue
          network, where I help care for injured or sick pigeons, and at a
          community garden where children learn about nature and gardening. It's
          rewarding to give back to the community.
        </p>
        <p>
          If you'd like to learn more about these organizations, check out their
          websites:
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <a
              href="https://taubenrettunghannover.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={taubenLogo}
                alt="Pigeon rescue network logo"
                className="VolunteerPic"
                width="auto"
                height={150}
                style={{ borderRadius: 10, objectFit: "contain" }}
              />
            </a>
          </div>
          <div>
            <a
              href="https://lerngartennetzwerk-hannover.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={leneLogo}
                alt="Garden logo"
                className="VolunteerPic"
                height={150}
                style={{ borderRadius: 10, objectFit: "contain" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
