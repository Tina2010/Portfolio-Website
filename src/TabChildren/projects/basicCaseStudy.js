import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';


// FINISH CONTENT!!!!
export const BasicCaseStudyContainer = ({ onBack }) => {
  return (
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <Button shape="circle" onClick={onBack}>
                <ArrowLeftOutlined />
            </Button>
            <h2>Basic Case Study</h2>
        </div>
      <p>This is the Basic Case Study project page. Here you can find details about the project, its features, and how it was developed.</p>
      
      <section>
        <h3>Project Overview</h3>
        <p><strong>Projekt:</strong> Create a basic case study with no concrete goal as an example and explain why you do what along the way.</p>
        <p><strong>Tools:</strong> figma, miro</p>
      </section>
      
      <section>
        <h3>Introduction</h3>
        <p>Let's discuss what you probably should do, when writing a case study.</p>
        <p>After writing my own two case studies and after reading a lot more from all around the globe, I figured it would be a good idea to combine all of that information into one case study. It will work as a way to remind myself of the things I learned and maybe it will help you too!</p>
      </section>
      
      <section>
        <h3>Design</h3>
        <p>- Leave empty, we explain all in design with screenshots -</p>
        <p>Figma Screenshots and prototype here</p>
      </section>
      
      <section>
        <h3>Importance of Research and Documentation</h3>
        <p>No matter the project or product you are working towards, one thing is for certain: The correct research and documentation is everything!</p>
        <p>I cannot stress enough how important it is, that you ask the correct questions and document their answers well enough to avoid A. the risk of adding features that won't be used, B. the risk of overstepping the estimated time and budget and C. the risk of ongoing feedback loops.</p>
      </section>


      </div>
  );
}