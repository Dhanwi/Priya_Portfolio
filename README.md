# 3D Portfolio
![Image](https://github.com/user-attachments/assets/19eae8cf-5624-4ff5-a03a-2d8229827b74)

<!-- GitHub badges -->


## 🌐 Live Demo

Explore the live demonstration of the project:
[reactjs18-3d-portfolio](https://priya-portfolio-2sk5.vercel.app/)

## 📝 Description

**3D Portfolio** is a well-designed and fully functional portfolio website that is built with
React.js and Three.js. It is a fully responsive website that works well on all devices.


## ✨ Technologies Used

<details><summary><b>3D Portfolio</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that
  compiles to plain JavaScript.
- [Vite](https://vitejs.dev/): Vite is a build tool that aims to provide a faster and leaner
  development experience for modern web projects.
- [React.js](https://reactjs.org/): React is a free and open-source front-end JavaScript library for
  building user interfaces or UI components.
- [Three.js](https://threejs.org/): Three.js is a cross-browser JavaScript library and application
  programming interface used to create and display animated 3D computer graphics in a web browser
  using WebGL.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion
  library for React.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for
  rapidly building custom user interfaces.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic
  patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the
  frameworks, workflows, and infrastructure to build a faster, more personalized Web.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,vite,react,threejs,tailwind,vercel)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step
instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on
your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

Note :bangbang: the application uses EmailJS in order to send emails using client-side, therefore,
you need to create EmailJS account [here](https://emailjs.com/) and sets the
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAIL_JS_ACCESS_TOKEN` environment
variables in `.env` file.

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/ladunjexa/reactjs18-3d-portfolio.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install
dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script             | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts local dev server at `localhost:5137` |
| `npm run build`    | Build your production site to `./dist/`     |
| `npm run preview`  | Boot up a local static web server           |
| `npm run lint`     | Run ESLint                                  |
| `npm run ts:check` | Perform type-checking                       |

## 🔒 Environment Variables

Environment variables[^3] can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are
> set in the operating system or shell, typically used to configure programs.

**React.js 18 3D Portfolio** uses [EmailJS](https://www.emailjs.com/) as external service. You need
to create an account and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment
variables:

```env
VITE_EMAILJS_SERVICE_ID=<VITE_EMAILJS_SERVICE_ID>
VITE_EMAILJS_TEMPLATE_ID=<VITE_EMAILJS_TEMPLATE_ID>
VITE_EMAIL_JS_ACCESS_TOKEN=<VITE_EMAIL_JS_ACCESS_TOKEN>
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fladunjexa%2Freactjs18-3d-portfolio)

#### Deploy on Netlify

You can also deploy this Next.js app with [Netlify](https://www.netlify.com/).

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ladunjexa/reactjs18-3d-portfolio)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





