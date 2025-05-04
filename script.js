const content = {
  home: `
    <h1>Welcome to SkillCraft</h1>
    <div style="text-align: center;">
      <img src="images/u.png" alt="SkillCraft welcome image" style="width: 200px; height: auto;"> <!-- Center-aligned image -->
    </div>
    <p>At SkillCraft, we are redefining how modern learners approach education. In an ever-evolving tech landscape, we serve as your trusted partner, equipping you with the skills, mindset, and experience necessary to thrive in a digital world. Our mission is to deliver high-quality, hands-on training experiences that empower individuals to transition seamlessly into industry roles, regardless of their starting point.</p>
  `,

  webdev: `
    <h1>Web Development</h1>
    <div style="text-align: center;">
      <img src="images/web.jpg" alt="Web Development" style="width: 200px; height: auto;"> <!-- Center-aligned image -->
    </div>    <p>The Web Development track at SkillCraft is meticulously crafted to guide learners through every layer of building powerful, responsive, and scalable websites and applications. Beginning with the fundamentals—HTML5, CSS3, and JavaScript—you’ll gain a solid foundation in web technologies. Progressively, we introduce advanced concepts like asynchronous JavaScript (AJAX), RESTful APIs, version control using Git, and responsive design principles to ensure your web creations look great on any device.</p>
    <p>You’ll also dive deep into modern frontend frameworks such as React.js, Vue.js, and Angular, along with backend development using Node.js and Express. Our curriculum includes hands-on projects that simulate real client needs, including e-commerce platforms, dashboards, and portfolio websites. In addition, you’ll understand how to secure applications, optimize performance, and deploy solutions using platforms like Netlify and Vercel.</p>
    <p>By the end of this path, you’ll possess the technical fluency and problem-solving acumen to develop full-stack applications independently and collaboratively—ready to tackle real-world challenges in tech-driven organizations.</p>
  `,

  datasci: `
    <h1>Data Science</h1> 
    <img src="images/ds.png" alt="Data science image"> <!-- Image for Data Science section -->
    <p>The Data Science program at SkillCraft is designed for the analytically inclined. If you're driven by data and passionate about discovering insights from numbers, this track will take you from data novice to data expert. We begin with foundational programming in Python, followed by structured training in libraries such as NumPy, Pandas, and Matplotlib for data analysis and visualization.</p>
    <p>You'll explore statistical modeling, hypothesis testing, and predictive analytics. Real-world datasets form the basis for hands-on projects in domains such as finance, healthcare, marketing, and sports. As your skills grow, you’ll delve into machine learning algorithms like regression, decision trees, clustering, and neural networks, applying these tools using scikit-learn and TensorFlow.</p>
    <p>We emphasize practical applications: data storytelling, dashboard design with Tableau or Power BI, and end-to-end project pipelines. Whether your goal is to become a data analyst, scientist, or engineer, this comprehensive curriculum ensures you're not just interpreting data—you’re driving decisions with it.</p>
  `,

  iot: `
    <h1>IoT & Embedded Systems</h1>
    <img src="images/iot.png" alt="IoT and embedded systems image"> <!-- Image for IoT section -->
    <p>The IoT & Embedded Systems track opens the door to a fascinating world where hardware meets software. Learners explore the core of digital intelligence through embedded C/C++, Python, and hands-on interactions with microcontrollers like Arduino, Raspberry Pi, and ESP32. You’ll work with various sensors, actuators, and communication protocols (I2C, SPI, UART) to build real-time responsive systems.</p>
    <p>Projects include smart home devices, remote monitoring systems, and even custom wearables. We emphasize low-power design, PCB prototyping, and debugging strategies. Furthermore, you'll learn how IoT systems interact with cloud platforms like AWS IoT, Blynk, and Firebase for data logging and control via mobile apps.</p>
    <p>From consumer electronics to industrial automation, the knowledge gained in this path empowers learners to create impactful, efficient, and scalable embedded solutions that power tomorrow’s innovations.</p>
  `,

  uiux: `
    <h1>UI/UX Design</h1>
    <img src="images/ui ux.jpg" alt="UI/UX design image"> <!-- Image for UI/UX section -->
    <p>Great design is invisible, intuitive, and purposeful. The UI/UX Design program at SkillCraft cultivates a user-first mindset by guiding learners through every stage of the design process. From identifying user personas to mapping out intuitive navigation flows, we build your capacity to think like a designer and execute like a strategist.</p>
    <p>You’ll learn to wireframe and prototype using industry-standard tools such as Figma, Adobe XD, and Sketch. Our courses also explore the psychological principles behind design decisions—color theory, spacing, typography, and accessibility. Responsive and mobile-first design practices are emphasized to meet modern digital consumption trends.</p>
    <p>Beyond aesthetics, we cover usability testing, user research methodologies, A/B testing, and data-driven iteration. Whether you're collaborating with developers or pitching a concept to stakeholders, you’ll be equipped to communicate, justify, and deliver impactful digital experiences that resonate with users and achieve business goals.</p>
  `,

  aiml: `
    <h1>AI & Machine Learning</h1>
    <img src="images/AIML.png" alt="AI and machine learning image"  style="width: 400px; height: 400px;"> <!-- Image for AI/ML section -->
    <p>The AI & Machine Learning pathway is built for those looking to shape the future. Beginning with core ML concepts such as supervised and unsupervised learning, this track helps learners gain deep insights into the theory and application of intelligent systems. You’ll implement algorithms including regression models, decision trees, SVMs, and clustering techniques, progressing into deep learning with convolutional and recurrent neural networks.</p>
    <p>Hands-on labs use Python, scikit-learn, TensorFlow, and PyTorch. Projects include image classification, chatbot creation, recommendation systems, and language models. You'll also explore advanced areas such as reinforcement learning, transfer learning, and model interpretability techniques like SHAP and LIME.</p>
    <p>With a focus on ethical AI, data governance, and real-world deployment challenges, this track ensures you're not only building intelligent systems—but building them responsibly and effectively for societal impact.</p>
  `,

  about: `
    <h1>About Us</h1>
    <p>SkillCraft was born from a desire to make technology education inclusive, accessible, and transformative. In a digital age where innovation outpaces traditional academia, we provide a dynamic learning ecosystem that bridges the gap between education and employment. We believe every learner deserves a personalized, hands-on journey—one that is empowering, engaging, and industry-aligned.</p>
    <p>Our platform combines carefully designed curricula, mentorship from professionals, and a supportive community to ensure learners are never alone in their journey. From guided paths to project showcases, we continuously update our offerings to stay ahead of market needs. Learners gain not just knowledge, but confidence—enabling them to transition into tech roles, launch startups, or innovate within existing organizations.</p>
    <p>Join us in shaping the future of tech learning. At SkillCraft, we're not just educating for today—we’re crafting skills for tomorrow.</p>
  `,

  mentors: `
    <h1>Meet Our Mentors</h1>
    <p>SkillCraft mentors are a cornerstone of our learner experience. Handpicked from leading tech firms, innovative startups, and academic institutions, our mentors bring decades of collective expertise and a shared passion for education. Their role goes beyond teaching—they inspire, challenge, and coach learners to unlock their full potential.</p>
    <p>Each learner is paired with mentors who guide project work, conduct code reviews, and provide career insights. Our mentorship model blends asynchronous feedback with live sessions, enabling meaningful engagement that fits your schedule. Through structured office hours and community events, mentors foster both personal and technical growth, helping you navigate challenges and celebrate wins.</p>
    <p>Whether it's cracking interviews, reviewing portfolios, or exploring new technologies, our mentors are dedicated to your journey—supporting your progress and preparing you for success in the tech industry.</p>
  `,

  community: `
    <h1>Community</h1>
    <p>At SkillCraft, community is more than a feature—it’s a foundation. We foster a collaborative environment where learners, mentors, and alumni connect, share, and grow together. Our platform hosts discussion forums, study groups, live events, and workshops, making it easy to find support and inspiration whenever you need it.</p>
    <p>From coding sprints and hackathons to peer reviews and project showcases, the SkillCraft community encourages active learning and accountability. You can seek help, share insights, or collaborate on interdisciplinary projects that extend your knowledge and expand your network.</p>
    <p>By joining our community, you become part of a global movement dedicated to curiosity, creativity, and continuous growth. Together, we’re building not just skills, but lasting connections and collective impact.</p>
  `,

  contact: `
    <h1>Contact Us</h1>
    <p>We’re here to help you succeed. Whether you have questions about our programs, want to explore partnership opportunities, or need guidance on your learning journey, the SkillCraft team is always ready to connect. Our support channels are built to be responsive, friendly, and committed to resolving your concerns with care.</p>
    <p>Reach out to us anytime via email at <a href="mailto:support@skillcraft.io">support@skillcraft.io</a>, or connect with us through our social media handles for quick updates and community highlights. Our customer success team typically responds within 24 hours on weekdays.</p>
    <p>We also welcome your feedback—let us know how we’re doing, what we can improve, or new features you’d like to see. Your voice helps us shape the future of learning at SkillCraft. Let’s build something great together.</p>
  `
};

document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = e.target.getAttribute('data-section');
    document.getElementById('main-content').innerHTML = content[section] || '<h1>Section not found</h1>';
  });
});
