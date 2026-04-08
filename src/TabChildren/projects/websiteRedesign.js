import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import shopUserFlows from "../../img/ShopUserFlowsWebshopRedesign.png";

export const WebsiteRedesignContainer = ({ onBack }) => {
  return (
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <Button shape="circle" onClick={onBack}>
                <ArrowLeftOutlined />
            </Button>
            <h2>Website Redesign</h2>
        </div>
      <p>This project is a conceptual redesign of a major German retailer with the goal of simplifying navigation and aligning the shopping experience with a cleaner, more modern interface.</p>
      
      <section>
        <h3>Project Overview</h3>
        <p><strong>Project:</strong> Conceptual redesign of a major German retailer</p>
        <p><strong>Tools:</strong> Figma (wireframes, prototype, user flows)</p>
        <p><strong>Platform:</strong> Website</p>
      </section>
      
      <section>
        <h3>Background</h3>
        <p>I chose a major German retailer as a case study because its existing website felt cluttered and hard to navigate. I wanted to understand why the experience felt overwhelming and where a redesign could improve clarity and usability.</p>
        <p>While I am not affiliated with the company, the brand is a good example of a large, established e-commerce site that can benefit from a more customer-centered structure.</p>
        <p>The company name has been censored since this was a private design exercise, not an official project.</p>
        <p>My goal was to create a cleaner architecture and visual hierarchy, and to bring the desktop site closer to a modern app-like shopping experience.</p>
      </section>
      
      <section>
        <h3>User Flows</h3>
        <p>For this solo project I mapped the key user flows that support product discovery, category browsing, and a smoother checkout journey.</p>
        <p>
          <img
            src={shopUserFlows}
            alt="Shop User Flows for Website Redesign"
            width="auto"
            height={500}
            style={{ borderRadius: 10 }}
          />
        </p>
      </section>
      
      <section>
        <h3>Design Focus</h3>
        <ul>
          <li>Simplify navigation by reducing cognitive load on home and category pages.</li>
          <li>Improve product discovery through clearer entry points and visual signposts.</li>
          <li>Modernize the experience while preserving the brand's trusted identity.</li>
        </ul>
      </section>
      
      <section>
        <h3>Note on Real Redesign</h3>
        <p>In a real redesign, the process would rely heavily on user research. Interviews, surveys, and behavior analytics are essential to discover which existing features are vital and which can be improved without disrupting current users.</p>
        <p>Understanding what customers expect from a large retailer helps prioritize changes and avoid removing familiar functionality too quickly.</p>
      </section>
      
      <section>
        <h3>Conclusion</h3>
        <p>This redesign illustrates how a large e-commerce site can become more approachable by clarifying its structure and focusing on the user’s shopping journey.</p>
        <p>The project reinforced the value of user flows and research-driven design decisions when modernizing an established website experience.</p>
      </section>

      </div>
  );
}