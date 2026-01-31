# QOTD – Question of the Day Coding Interface

A frontend-focused coding practice interface inspired by platforms like **LeetCode**, built with an emphasis on usability, clarity, and daily student engagement rather than feature overload.

---

## Tech Stack Used

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- Vercel (deployment)

---
## Project Structure
# File Tree: QOTD

```
├── 📁 public
│   └── 🖼️ vite.svg
├── 📁 src
│   ├── 📁 assets
│   │   └── 🖼️ react.svg
│   ├── 📁 components
│   │   ├── 📁 layout
│   │   │   ├── 📄 Header.jsx
│   │   │   └── 📄 SplitLayout.jsx
│   │   └── 📁 qotd
│   │       ├── 📄 CodeEditor.jsx
│   │       ├── 📄 Output.jsx
│   │       ├── 📄 QuestionCard.jsx
│   │       └── 📄 TestCases.jsx
│   ├── 📁 data
│   │   ├── 📄 qotdData.js
│   │   └── 📄 testCases.js
│   ├── 📁 hooks
│   ├── 📁 utils
│   ├── 🎨 App.css
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   └── 📄 main.jsx
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.js
├── 📄 tailwind.config.js
└── 📄 vite.config.js
```

---


## Layout and Design Decisions

The interface uses a two-panel layout:

- **Left panel:** Problem statement, context, and learning-related information  
- **Right panel:** Code editor, output, and test cases  

This layout mirrors how students naturally solve problems — reading the question while coding side-by-side, reducing context switching.

The left panel is scrollable and visually separated so long problem statements remain readable without affecting the editor.

---

## Theme and UI Choices

A dark monotone theme with blue accents was chosen to:

- Reduce eye strain during longer coding sessions  
- Keep the interface calm and distraction-free  
- Maintain visual consistency across sections  

Content is broken into structured sections instead of long paragraphs to improve readability.

---

## Daily Student Engagement Strategy

The page encourages consistent practice using:

- A clear “Question of the Day” focus  
- Streak tracking to build daily habits  
- Acceptance and acceptance rate to convey problem difficulty  
- A leaderboard preview for light motivation  
- Click-to-reveal hints to support learning without giving direct answers  
- A subscribe call-to-action to encourage return visits  

All engagement elements are placed within the question section to avoid unnecessary navigation.

---

## Inspiration

The layout and interaction model are inspired by **LeetCode**, focusing on why its design works rather than directly copying features.

---

## What I Would Improve With More Time

- Real code execution with backend integration  
- Persistent user progress and statistics  
- Authentication and user profiles  
- Multi-language support with templates  
- Improved accessibility and keyboard navigation  

---

## Final Note

The primary goal of this project was to create a user-friendly and focused learning experience, showing that good frontend development is about thoughtful layout and usability — not just adding more functionality.
