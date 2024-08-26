import React from 'react';
import tabsData from '../data/tabsData';
import Tab from './Tab';
import TabContent from './TabContent';
import { useState } from 'react';
function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="p-[6px] w-full flex lg:w-auto mt-6 border border-[rgba(255,255,255,0.15)] rounded-full items-center justify-between overflow-x-auto whitespace-nowrap">
        {tabsData.map((tab, index) => {
          return (
            <Tab
              key={index}
              label={tab.label}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          );
        })}
      </div>

      <TabContent
        content={tabsData[activeTab].content}
        images={tabsData[activeTab].images}
      />
    </>
  );
}

export default Tabs;
