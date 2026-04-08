import { Button } from 'antd';
import { ArrowLeftOutlined, GithubOutlined } from '@ant-design/icons';
import Link from "antd/es/typography/Link";

export const PokemonContainer = ({ onBack }) => {
  return (
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <Button shape="circle" onClick={onBack}>
                <ArrowLeftOutlined />
            </Button>
            <h2>PokéDex APP</h2>
        </div>
      <section>
        <h3>Project Overview</h3>
        <p>
          <strong>Projekt:</strong><br />
          The provided application is used for the overview of Pokémon and details about Pokémon.
        </p>
        <p>
          <strong>Tools:</strong><br />
          I used HTML, CSS, JS and jQuery (bootstrap).
        </p>
      </section>

      <Link href="https://github.com/Tina2010/PokeDex" target="_blank" class="button">
        <GithubOutlined /> See project on Github
      </Link>

      < br />

      <Link href="https://tina2010.github.io/PokeDex/" target="_blank" class="button">
        See hosted project
      </Link>
      </div>
  );
}