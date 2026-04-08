import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import decisionTree from "../../img/DecisionTreeJournalMedia.png";
import shopUserFlows from "../../img/ShopUserFlowsJournalMedia.png";

export const JournalManiaContainer = ({ onBack }) => {
  return (
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <Button shape="circle" onClick={onBack}>
                <ArrowLeftOutlined />
            </Button>
            <h2>Journal Mania</h2>
        </div>
      <p>Journal Mania is a concept for a niche journaling shop app. This page explains the UX process, research insights, and the product decisions behind the prototype.</p>
      
      <section>
        <h3>Project Overview</h3>
        <p><strong>Project:</strong> UX design for a shop specializing in journaling tools and workshops</p>
        <p><strong>Tools:</strong> Figma (wireframes, prototype), Miro (user flows)</p>
        <p><strong>Platform:</strong> App</p>
      </section>
      
      <section>
        <h3>Background</h3>
        <p>As I started my UX design journey, I wanted to build a project that combined my e-commerce experience with a topic I was personally excited about. Journaling content surged again in late 2025, and I saw an opportunity to design a shop that supports both journaling products and creative learning.</p>
        <p>My research showed there was no dedicated shop focused on journaling tools, planners, and workshops in early 2026. That gap became the starting point for Journal Mania.</p>
      </section>
      
      <section>
        <h3>Research</h3>
        <p>I reviewed YouTube videos, blog posts, and journaling resources to understand how people start and maintain the habit. The main questions were: what motivates a new journaler, which tools they look for first, and how a shop can make the experience feel inspiring instead of overwhelming.</p>
      </section>
      
      <section>
        <h3>User Flows</h3>
        <p>The research guided two core user flows for the app:</p>
        <p>First, I mapped the journaling journey with a decision tree that captures the user's mindset, goals, and initial choices when they begin a journaling habit.</p>
        <p>
          <img
            src={decisionTree}
            alt="Decision Tree for Journal Mania"
            width="auto"
            height={500}
            style={{ borderRadius: 10 }}
          />
        </p>
        <p>Then I created a focused shop flow for the product experience, highlighting the paths that lead users to browse collections, choose starter kits, and explore workshops.</p>
        <p>
          <img
            src={shopUserFlows}
            alt="Shop User Flows for Journal Mania"
            width="auto"
            height={500}
            style={{ borderRadius: 10 }}
          />
        </p>
      </section>
      
      <section>
        <h3>Key Takeaways</h3>
        <ul>
          <li>Design for discovery: help newcomers find products and inspiration without feeling lost.</li>
          <li>Focus on meaningful journeys: guide users from journaling interest to product selection and learning resources.</li>
          <li>Use flows to stay aligned: the diagrams kept the app centered on the most important use cases.</li>
        </ul>
      </section>
      
      <section>
        <h3>Conclusion</h3>
        <p>Journal Mania taught me how valuable early structure is for a UX project. Building user flows first helped me keep the design focused and prevented feature ideas from diluting the core experience.</p>
        <p>I also enjoyed working in Figma and using its free features to create wireframes, visual layouts, and a prototype that communicates the concept clearly.</p>
      </section>


      </div>
  );
}