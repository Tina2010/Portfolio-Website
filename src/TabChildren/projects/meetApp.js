import { Button } from 'antd';
import { ArrowLeftOutlined, GithubOutlined } from '@ant-design/icons';
import Link from "antd/es/typography/Link";

export const MeetAppContainer = ({ onBack }) => {
  return (
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <Button shape="circle" onClick={onBack}>
                <ArrowLeftOutlined />
            </Button>
            <h2>meet App</h2>
        </div>
      <section>
        <h3>Project Overview</h3>
        <p>
          <strong>Projekt:</strong><br />
          In this project, I created an app where you will preview upcoming events.
        </p>
        <p>
          <strong>Tools:</strong><br />
          The code of this React app was developed in the sense of a BDD and TDD approach (use of Jest and Cucumber).
          Furthermore, the app was connected to the Google Calendar API.
        </p>
      </section>

      <Link href="https://github.com/Tina2010/meet" target="_blank" class="button">
        <GithubOutlined /> See project on Github
      </Link>


      </div>
  );
}