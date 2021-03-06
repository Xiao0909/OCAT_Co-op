# OCAT

## Purpose and Context

- Web Development
  - The goal of this application is for you to explore and demonstrate understanding of web development using some of our core technologies. You must use React.js on the client-side, a Bootstrap template for the UI, Node.js/Express for the server-side, Bookshelf.js as the ORM, restify for the API back-end, PostgreSQL as the database, and Bcrypt to encrypt passwords in PostgreSQL. You must also create a git repository on github.com and push all of your code there frequently.

- Criminal Justice
  - The Risk Assessment System is a Web-based Application that allows for assessing the risk of offender [recidivism](https://nij.ojp.gov/topics/corrections/recidivism).  By assessing the likelihood that an offender might commit another offense, the system helps officers determine how best to help the offender moving forward.  In ORAS, we do this by automatically generating caseplans, reports, and maintaining the full timeline of an offender's record while they exist in the system.  This process was developed based on research performed by the UC Corrections Institute (UCCI) and has been proven to reduce the recidivism of offenders over time.

- The OCAT Internship Project
  - Through OCAT, you will have the opportunity to explore a core piece of ORAS by building an interface for both creating assessments and monitoring assessments previously performed by users.  Your ITSC mentors will guide you through this process, but we highly suggest that you make frequent use of your OCAT internship peers.  To be clear, we do not want you copying code or handing out answers to other interns.  However, this is a collaborative process, and asking questions when you're confused is an important part of learning!  On the flip-side of that, teaching someone else or helping them through a problem is the best way to further cement that knowledge in your own mind.  So ask questions when you're stuck and help point your fellow teammates in the right direction!  Good luck!

## ITSC Guidelines

- Setup
  - PLEASE ask if you're having trouble setting up your project repository, project board, first branch, or development environment.  The mentors are here to help you!  We want to make sure you get off to a great start and this part is often the most challenging, so please don't hesitate to come to us immediately with any setup concerns!
- Hour/Day Policy
  - If you've been stuck on something for two hours, ask a fellow intern!
  - If you've been stuck on something for a full day, ask a mentor!
- Process for Getting Unstuck
    1. Search through the available resources in this document (located at the bottom of the page and throughout)
    2. Google!  This is your most valuable resource and learning how to search the internet for your answer is going to be your most valuable skill moving forward!  Forum resources like StackOverflow can be extremely helpful.  In web development, there's almost always someone who has encountered your problem before.  The trick lies in finding that answer!
    3. Ask an OCAT internship peer
    4. Ask an OCAT mentor

## Code Review Guidelines (reference this later when doing peer review)

- Every [Issue](./docs/issues.md) should be code reviewed by another OCAT internship-peer
  - Making a Pull Request
    - Create a Pull Request (PR) from your development branch (your current branch) into master (the main branch)
      - [Creating a Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
    - Reach out to one of your fellow OCAT interns and ask them nicely to review your code.  Include a link to the Pull Request you'd like them to review
    - Take any suggestions with a grain of salt.  Remember, this is YOUR application.  Make any changes you agree with and then merge the Pull Request
  - Reviewing a Pull Request (PR)
    - [Reviewing a Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)
    - Go the link supplied by whichever OCAT intern has requested a review from you
    - Look through their code, offering suggestions and critiques
      - You should try to:
      - Understand each part of the code and look for ways to improve it
      - Be kind.  Remember that this is someone else's work that they've spent a lot of time on
      - Balance criticism with praise.  It is tempting to only point out the negatives.  If you see something you like, tell them!
      - Feel free to ask questions.  In the end, this is a learning process.  Feel free to ask questions if you don't understand something in the code.
  - After a Pull Request (PR) has been approved, merge it and move on
    - [Merging a Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)
    - Once merged, create a new branch from master and start on your next issue

## Technologies

- Version Control
  - [git](https://git-scm.com/) and [Github](https://github.com/)
- Front-End Framework
  - [React.js](https://reactjs.org/)
  - Style Toolkit -> [React-Bootstrap](https://react-bootstrap.github.io/)
- Back-End Framework
  - [Express](http://expressjs.com/)
  - [Node.js](https://nodejs.org/en/)
  - [Restify](http://restify.com/)
  - Database ORM -> [Bookshelf.js](http://bookshelfjs.org/) and [knex.js](http://knexjs.org/)
  - Password Encryption -> [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- Database
  - [PostgreSQL](https://www.postgresql.org/)
- Package Manager (for Node.js)
  - [npm](https://www.npmjs.com/)
- Task Runners
  - [webpack](https://webpack.js.org/)

## Architecture

The application must be created with two "layers" using an API model and pseudo-microservices (the "skeleton" for this has already been provided within the template repository you'll start with). Once the HTML page is rendered, all future communication between the client/server should be done using HTTP requests sending/receiving JSON.

- API: thin layer allowing for directing of requests from the front-end to the microservices.  Allows for outside integration.
  - [Basic API explanation](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)
- Microservices: complex layer of services that accept requests from the API and communicate with the database.
  - [Basic Microservice explanation](https://smartbear.com/solutions/microservices/)
  - [CRUD Basics](https://www.codecademy.com/articles/what-is-crud)

- The below diagram resembles what you should attempt to reproduce:
![OCAT Sample Architecture](./docs/attachments/OCAT_Architecture.png)

## Navigating the OCAT File Structure

We have created some CodeTours for you to help you understand the first couple tasks.

Make sure you have installed the recommended extensions, then see the [Starting CodeTours Documentation](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour#starting-tours) for instructions on viewing our tours

## Roles

- User
- Supervisor

## Assignments

### A. Github Setup

1. Copy the Template Repository
NOTE: You can name this whatever you want, just make certain that you leave it "Public" so that others can view your code
    - Template:
        - [OCAT_Intern_Template](https://github.com/UC-ITSC/OCAT_Intern_Template)
    - Resources:
        - [Creating a Repository from a Template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)
2. Copy the Template Project Board
    - NOTE: This is something you should keep constantly up-to-date.  It is how we will track your progress, and it will facilitate code review and collaboration with your OCAT internship peers.
        - Template:
            - [OCAT Project Board](https://github.com/UC-ITSC/OCAT_Intern_Template/projects/1)
        - Resources:
            - [Copying a Project Board](https://docs.github.com/en/github/managing-your-work-on-github/copying-a-project-board)
3. Add the Provided Issues to your Project Board
    - Issues:
        - [OCAT Issues](./docs/issues.md)
    - Resources:
        - [Creating an Issue](https://docs.github.com/en/github/managing-your-work-on-github/creating-an-issue)
        - [Adding Issues to a Project Board](https://docs.github.com/en/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)

### B. Setup Development Environment

1. Clone your new repository
    - [Cloning a Repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
2. [Install NodeJS 12.x](docs/install_nodejs.md) on your computer (__Do NOT install Node 14 or the project will not run__)
3. [Install PostgreSQL](docs/install_postgres.md) using the [instructions in our docs](docs/install_postgres.md)
4. OCAT
    - Navigate into the OCAT/ directory ``cd OCAT/``
    - Verify that the config.json for both directories is correct
        - Begins as config.example.json and needs to be modified to match your environment
    - ``npm install``
        - [npm install](https://docs.npmjs.com/cli/install#:~:text=npm%20install%20(in%20package%20directory,directory)%20as%20a%20global%20package.)
    - Open a second terminal window
        1. Verify that both terminals are in the OCAT/ directory
        2. Terminal 1
            - ``npm run dev``
        3. Terminal 2
            - ``npm run build:dev``
5. Verify that all recommended extensions are installed
    - [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [formulahendry.auto-rename-tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
    - [mgmcdermott.vscode-language-babel](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
    - [visualstudioexptteam.vscodeintellicode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
    - [coenraads.bracket-pair-colorizer-2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
    - [streetsidesoftware.code-spell-checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
    - [gruntfuggly.todo-tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
    - [vsls-contrib.codetour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour)
    - [herrmannplatz.npm-dependency-links](https://marketplace.visualstudio.com/items?itemName=herrmannplatz.npm-dependency-links)
    - [christian-kohler.path-intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
6. Start the "Task 1" CodeTour
    - [Starting Tours](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour#starting-tours)
7. Happy Coding!

### C. Features

- NOTE: These are the general requirements for features 1, 2 and 3. For specific instructions, see the code tours.
- NOTE: Please do any login-related pieces near the end.  Otherwise, you may spend the entire time developing a login process and you will not have much to show come presentation time.
- NOTE: All work should be done on a separate "branch" so that it can be code reviewed.  Below are instructions on how to create a new branch:
  - [Creating a branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#creating-a-branch)

1. Allow Users to submit an assessment with the following information
    - NOTE: An "assessment" has a type, five questions, and two responses per question ->
    - Use the example info here: [OCAT Assessment Info](./docs/assessment_info.md)
        - Instrument Name (static text field)
          - this is the type of assessment that is currently being conducted -> Example: Cat Behavioral Instrument
        - Cat Name (text) -> Example: Mr. Fluffykins
        - Cat Date of Birth (date)
        - Score (integer calculated by the sum of all responses)
        - Risk Level (text - low [0-1], medium [2-3], high [4-5] determined by the calculated score)
        - Audit log of when the assessment was created/deleted (datetime with timezone)
    - Recommend using [React Hook Form](https://react-hook-form.com/)
2. Implement a bootstrap style template to make your site look presentable
    - NOTE: Do not spend too much time on this.  We want the application to look good but not at the risk of hindering the overall completion of your project
3. Allow Users and Supervisors to sort/search/filter/review submitted assessments from a list
    - Should only return non-deleted assessments
    - The list should include (at minimum) cat name, cat date of birth, instrument, score, risk level, and creation date
    - Recommend using [React Table](https://www.npmjs.com/package/react-table)
4. Allow Supervisors to log into the system
    - This must authenticate against the database using [Bcrypt](https://www.npmjs.com/package/bcrypt)
5. Allow Supervisors to delete assessment submissions
    - This should be a soft delete in the database (a soft delete does not remove the data from the database, it sets a flag on the record so it does not show up on the front-end)
    - Recommend using [bookshelf-soft-delete](https://www.npmjs.com/package/bookshelf-soft-delete)
6. Prepare your presentation!

## Resources

### React

- [Intro to React](https://reactjs.org/tutorial/tutorial.html)
- [Main Concepts](https://reactjs.org/docs/hello-world.html)
- Video: [React Tutorial for Beginners](https://www.youtube.com/watch?v=dGcsHMXbSOA)

### React Routing

- [React Router](https://www.reactrouter.com)
- [react-router-dom's npm page](https://www.npmjs.com/package/react-router-dom)
- Video: [React Router Tutorial](https://www.youtube.com/watch?v=Law7wfdg_ls)

### Bootstrap

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Bootstrap Templates](https://github.com/therebelrobot/awesome-bootstrap#templates)
- Video: [Make a React Website with Bootstrap - Beginners](https://www.youtube.com/watch?v=RcfvUWJqHOs)

### Express

- [Express API Reference](http://expressjs.com/en/4x/api.html)
- Video: [Learn Express & Node.js in 15 Minutes](https://www.youtube.com/watch?v=JlgKybraoy4)

### Bookshelf.js

- [API Reference](https://bookshelfjs.org/api.html)
- [Bookshelf.js: A Node.js ORM](http://stackabuse.com/bookshelf-js-a-node-js-orm/)
- [Helpful Example](https://travishorn.com/what-did-i-learn-this-week-knex-js-bookshelf-js-95d3490e3a6f)
- [More Examples](http://zetcode.com/javascript/bookshelf/)
- [bookshelf's npm page](https://www.npmjs.com/package/bookshelf)
- Video: [Bookshelf.js Tutorial - An Introduction to Bookshelf.js](https://www.youtube.com/watch?v=WyRoEQjtDDY)

### React.js HTTP Requests with Axios

- [Using Axios with React](https://www.digitalocean.com/community/tutorials/react-axios-react)
- [Axios' npm page](https://www.npmjs.com/package/axios)
- Video: [How to use Axios with React](https://www.youtube.com/watch?v=oQnojIyTXb8)

### React Hook Form

- [Main Page](https://react-hook-form.com/)
- [Examples](https://github.com/react-hook-form/react-hook-form/tree/master/examples)
- [react-hook-form's npm page](https://www.npmjs.com/package/react-hook-form)
- Video: [React Hook Form Tutorial](https://www.youtube.com/watch?v=bU_eq8qyjic)

### React Table

- [Main Page](https://react-table.tanstack.com/)
- [How to Use React Table](https://codehandbook.org/how-to-use-react-table-in-react-web-app/)
- [react-table's npm page](https://www.npmjs.com/package/react-table)

### Bcrypt

- [Hashing Passwords with Node.js and Bcrypt](https://www.abeautifulsite.net/hashing-passwords-with-nodejs-and-bcrypt)
- [User Authentication using Bcrypt](https://medium.com/@holtkam2/add-user-authentication-to-your-node-expressjs-application-using-bcrypt-81bb0f618ab3)
- [bcrypt's npm page](https://www.npmjs.com/package/bcrypt)

### PostgreSQL

- [Documentation](https://www.postgresql.org/)
- Access the Database
  - Windows developers should use -> [pgAdmin](https://www.pgadmin.org/download/)
  - Mac developers should use -> [postico](https://eggerapps.at/postico/)

## Advanced Resources

- Microservice Advanced Concepts
  - [Orchestration vs Choreography](https://www.softobiz.com/microservice-orchestration-vs-choreography/)

- Design principles
  - SOLID: [The First Five Principles of Object Oriented Design](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
  - DRY: [Don't Repeat Yourself](https://medium.com/better-programming/keeping-your-code-dry-1105377c9c80)
  - KISS: [Keep it Short and Simple](https://www.interaction-design.org/literature/article/kiss-keep-it-simple-stupid-a-design-principle)

- Functional Programming in Javascript
  - [Playlist from Fun Fun Function](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
  - Useful MDN Links
    - [.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    - [.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    - [.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
