import security from '../../assets/images/security.webp';
import security1 from '../../assets/images/security1.jpeg';
import security2 from '../../assets/images/security2.jpeg';
import smart from '../../assets/images/smart.jpeg';
import smart1 from '../../assets/images/smart1.jpeg';
import smart2 from '../../assets/images/smart2.jpg';
import industry from '../../assets/images/industry.jpeg';
import industry1 from '../../assets/images/industry1.jpeg';
import industry2 from '../../assets/images/industry2.jpeg';
import education from '../../assets/images/education.jpeg';
import education1 from '../../assets/images/education1.jpeg';
import education2 from '../../assets/images/education2.jpeg';

const tabsData = [
  {
    label: 'Security',
    content: `The platform recognizes threats and unwanted incidents in real-time. It controls the performance of the video surveillance system 24/7 without human intervention, ensuring continuous and effective monitoring`,
    images: [security, security1, security2],
  },
  {
    label: 'Smart City',
    content: `Bizdin AI enhances urban management by integrating advanced AI into the city's infrastructure. The platform optimizes traffic flow, monitors environmental conditions, manages public safety, and improves the efficiency of public services, leading to a smarter and more responsive city environment`,
    images: [smart, smart1, smart2],
  },
  {
    label: 'Industry',
    content: `The platform allows you to recognize safety violations, incorrect behavior of employees or transport, and potentially dangerous situations at work. A separate analytics algorithm is configured for each project, ensuring tailored and precise monitoring`,
    images: [industry, industry1, industry2],
  },
  {
    label: 'Education',
    content: `Bizdin AI enhances school safety and learning environments by detecting bullying and fights in real-time, enabling immediate intervention. The platform also monitors for smoke and vape usage, helping to enforce school policies and maintain a healthy environment. Additionally, Bizdin AI analyzes student behavior patterns, providing insights that allow educators to address issues early and tailor support to individual needs`,
    images: [education, education1, education2],
  },
];

export default tabsData;
