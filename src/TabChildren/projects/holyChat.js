import { Button } from 'antd';
import { ArrowLeftOutlined, GithubOutlined } from '@ant-design/icons';
import Link from "antd/es/typography/Link";

export const HolyChatContainer = ({ onBack }) => {
  return (
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <Button shape="circle" onClick={onBack}>
                <ArrowLeftOutlined />
            </Button>
            <h2>holyChat</h2>
        </div>
      <section>
        <h3>Project Overview</h3>
        <p>
          <strong>Projekt:</strong><br />
          holyChat is a mobile application for fast communication between end users.
        </p>
        <p>
          <strong>Tools:</strong><br />
          The app is written in React Native and built with Expo.
          I decided to integrate Gifted Chat for all necessary chat features and added NetInfo to apply certain features while being offline.
        </p>
      </section>

      <Link href="https://github.com/Tina2010/holyChat" target="_blank" class="button">
        <GithubOutlined /> See project on Github
      </Link>

      </div>
  );
}