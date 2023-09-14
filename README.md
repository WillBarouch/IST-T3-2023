## Built With

- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)
- ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
- ![Recharts](https://img.shields.io/badge/-Recharts-000000?style=flat-square&logo=chartdotjs&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)
## Getting Started

Firstly, ensure node.js is installed on your machine. If not please visit [nodejs.org](https://nodejs.org/en/download) 
and download the LTS version. (This project was built with node v18.17.0)

Then, cd to wherever you installed the project (should have the package.json in it) and install the dependencies:

```bash
npm install
````

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

However, this is likely not going to be very fast, especially for the dashboard page as all the rendering that would usually be done on the server-side is done on your machine. To get a better experience, you can visit the pre-rendered version of the side at [ist.willbarouch.com](https://ist.willbarouch.com).

If you just want to look at the code, you can do so in the [src](src) folder. The [app](src/app) folder contains the pages that are rendered by Next.js. Each page is a page.tsx inside it's own folder. The [layout](src/app/layout.tsx) file contains the wrapper for the entire site. The [components](src/components) folder contains the components that are inside these pages. Components maked with `'use client';` are client components while the others are server-side. 


## Licence

This project is licensed under the GNU GPL v3 - see the [LICENSE](LICENSE) file for details