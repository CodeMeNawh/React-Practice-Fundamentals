import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import TabButton from './TabButton.jsx'
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(){

    const [selectedTopic, setSelectedTopic] = useState();

      function handleClick(selectedButton){
        
        setSelectedTopic(selectedButton);
      }
    
    let TabContent = <p>Please select a topic</p>;
    if(selectedTopic){
      TabContent = (
        <div id ="tab-content">
          
          <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                      <code>
                      {EXAMPLES[selectedTopic].code}
                      </code>
                    </pre>
        </div>
      )
    }
    return(
        
         <Section title="Examples" id="examples">
                  <Tabs 
                 
                  buttons={<> <TabButton isSelected={selectedTopic==="components"} onClick={()=>handleClick('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic==="jsx"} onClick={()=>handleClick('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic==="props"} onClick={()=>handleClick('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic==="state"} onClick={()=>handleClick('state')}>State</TabButton></>}>
                    {TabContent}</Tabs>
                  
                  
                 
          </Section>
    )
}