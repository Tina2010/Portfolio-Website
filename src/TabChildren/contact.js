import {
    MailOutlined,
    GithubOutlined
} from "@ant-design/icons";
import Link from "antd/es/typography/Link";

export const ContactContainer = () => {
    return (
        <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ marginBottom: "unset" }}>If you want to get in touch with me, feel free to send me an email:</p>
            <br />
            <Link href="mailto:t.rittmueller@gmx.de">
                <MailOutlined />
                &nbsp;
                t.rittmueller@gmx.de
            </Link>

            <br />
            <p style={{ marginBottom: "unset" }}>Or, you can find me on GitHub:</p>
            <br />
            <Link href="https://github.com/Tina2010" target="_blank" rel="noopener noreferrer">
                <GithubOutlined />
                &nbsp;
                GitHub Profile
            </Link>
        </div>
    );
}