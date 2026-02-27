Internship Task 2 – Strict Tech Stack Implementation
===================================================

Objective
---------
The objective of this task is to recreate the Internship Task 1 deliverables using a
mandatory technology stack that includes a templating engine and a task runner.

This task focuses on understanding template-based development and build automation.

---

Technology Stack Used
---------------------
Templating Engine:
- Nunjucks

Task Runner:
- Gulp

---

Project Structure
-----------------
internship-task-2/
|
|-- src/
|   |-- templates/
|       |-- base.njk
|       |-- index.njk
|       |-- about.njk
|       |-- contact.njk
|
|-- dist/            (generated after build)
|
|-- gulpfile.js
|-- package.json
|-- README.md

---

Setup Instructions
------------------
1. Install Node.js (LTS version).
2. Open the project folder in terminal.
3. Install dependencies using:
   npm install

---

Build Instructions
------------------
To compile the project and generate HTML files, run:
npx gulp

---

Output
------
After running the build command, the dist folder is created.
It contains the final compiled HTML files:

- index.html
- about.html
- contact.html

These files are the final output used for submission and deployment.

---

How It Works
------------
- Gulp reads all Nunjucks (.njk) templates from the src/templates folder.
- base.njk acts as the common layout.
- Each page template extends base.njk.
- Gulp renders the templates and outputs static HTML into the dist folder.

---

Learning Outcome
----------------
- Learned how to use Nunjucks for templating.
- Understood Gulp as a task runner.
- Practiced template inheritance and layout reuse.
- Gained experience in setting up a static build pipeline.

---

Time Taken
----------
Approximately 1–2 days.

---

Conclusion
----------
This task demonstrates the ability to follow a strict tech stack, use a templating
engine with a task runner, and generate clean static HTML output.
