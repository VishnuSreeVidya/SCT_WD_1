
# SkillCraft 🧠💻

SkillCraft is an educational web platform prototype focused on delivering structured, career-aligned content across popular tech domains. It simulates a learning dashboard where users can explore different topics such as:

- 🌐 Web Development  
- 📊 Data Science  
- 📡 IoT & Embedded Systems  
- 🎨 UI/UX Design  
- 🤖 AI & Machine Learning  

The project is ideal for beginners who want to understand how HTML, CSS, and JavaScript can work together to build a dynamic single-page experience.

---

## 🏗️ Project Overview

This project demonstrates a **single-page application (SPA)** concept using plain HTML, CSS, and JavaScript. Instead of loading multiple HTML pages, JavaScript dynamically injects the content based on what the user clicks on in the navigation bar.

### 🔍 Features

- **Interactive Navigation**  
  The top navbar includes clickable links (like Home, Web Dev, Data Science, etc.). When clicked, they update the main content area without reloading the page.

- **Modular Content with JavaScript**  
  Content for each section is stored in a JavaScript object in `script.js`. Clicking on a navbar item triggers an event that changes the displayed content in the `main-content` div.

- **Thematic Images**  
  Each content section includes a relevant image (e.g., `web.jpg` for Web Dev, `ds.png` for Data Science) to enrich the visual experience.

- **Responsive Design**  
  `style.css` ensures the layout adapts across different screen sizes.

- **Real-World Course Descriptions**  
  Each section describes a potential real-world tech curriculum, simulating how an ed-tech product might present information.

---

## 🗂️ File Structure

```
skillcraft/
├── index.html       # Main HTML structure with navbar and placeholder div
├── style.css        # Styling for layout, fonts, spacing, responsiveness
├── script.js        # Contains all course content and navbar logic
└── images/          # Directory for section images (see below)
```

### 📸 Required Images

Create an `images/` folder and include the following:

- `u.png` – Used on Home page  
- `web.jpg` – For Web Development  
- `ds.png` – For Data Science  
- `iot.png` – For IoT & Embedded Systems  
- `ui ux.jpg` – For UI/UX Design  
- `AIML.png` – For AI & Machine Learning

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/skillcraft.git
cd skillcraft
```

### 2. Add the Images Folder
Make sure the `images/` folder exists and contains the required images listed above.

### 3. Open in Browser
Double-click `index.html` or use:

```bash
open index.html
```

> Note: You do **not** need a server for this — it works directly in the browser.

---

## 🧑‍🏫 Use Cases

- Learn basic DOM manipulation and event handling in JavaScript.
- Create and manage content dynamically without page reloads.
- Practice using CSS for layout and responsive design.
- Explore how content and design can be modular and data-driven.

---

## 🙋‍♀️ Support

For questions or feedback, please email:  
📬 [support@skillcraft.io](mailto:support@skillcraft.io)

---

## 📄 License

This project is open for learning and demonstration purposes. You’re welcome to modify, enhance, or adapt it to suit your own learning portfolio.

---

> ✨ Made with curiosity, creativity, and code by SkillCraft.
