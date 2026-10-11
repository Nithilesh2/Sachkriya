# Sachkriya Project Guide

## Project Overview

Sachkriya is a responsive, single-page company website for a global general trading business. It introduces the company as a connector between suppliers, businesses, products, and international markets. The site presents its services and sourcing process, outlines product categories, and invites prospective partners to get in touch.

The project is a frontend experience built with React and Vite. It does not currently include a backend, database, authentication, or a working contact form.

## What the Website Contains

The homepage is assembled from reusable React components in `src/components`:

- **Header:** Brand logo and desktop navigation, plus a collapsible mobile menu. Navigation scrolls smoothly to sections on the homepage.
- **Hero:** Introduces the message "Global Trade. In Motion." and links the company to trade across markets.
- **About:** Describes Sachkriya's role in connecting suppliers, businesses, products, and markets.
- **Services:** Presents global sourcing, import and export, trading and supply, market access, and business partnerships.
- **Product categories:** Introduces the company's trading portfolio. The current content repeats "Industrial Products" and can be replaced with the intended category list.
- **Process:** Shows five stages from understanding a requirement through sourcing, evaluation, coordination, and delivery.
- **Partnership call to action:** Invites visitors to start a conversation about sourcing, market entry, or a trading opportunity.
- **Footer:** Displays the brand, copyright notice, and policy links.
- **Not-found page:** Displays a branded 404 experience for paths other than `/`, with a link back to the homepage.

The homepage also shows a scroll-to-top control after the visitor moves down the page. The service, process, and category content is defined locally in the corresponding components; it is not loaded from an API.

## Technology

- React 19 for the component-based user interface
- Vite 8 for local development and production builds
- JavaScript with JSX
- CSS Modules for component-specific styling, with shared application styles in `src/App.css`
- Static images, icons, logos, and fonts in `src/assets`

## Project Structure

```text
src/
  App.jsx                 Homepage composition and pathname-based 404 handling
  App.css                 Shared application styles
  colors.js               Shared color values
  main.jsx                React application entry point
  assets/                 Images, logos, icons, and fonts
  components/             Homepage sections and NotFound page
  style/                  CSS Modules for the components
index.html                Vite HTML entry point
vite.config.js            Vite configuration
eslint.config.js          ESLint configuration
package.json              Dependencies and project scripts
```

## Run Locally

Install the project dependencies, then start the Vite development server:

```sh
npm install
npm run dev
```

Vite prints the local URL in the terminal. To create a production build, run:

```sh
npm run build
```

To run the configured lint checks:

```sh
npm run lint
```

## Current Behavior and Follow-up Work

The application renders the homepage at `/` and the `NotFound` component at other pathnames. The header navigation scrolls to homepage sections rather than opening separate pages. The "Explore Our Services", "Our Story", and "Start a Conversation" buttons are currently presentation-only; a future update can connect them to section navigation, a contact workflow, or external destinations. The privacy and terms links also need real destinations before launch.

Before deployment, configure the hosting provider to serve `index.html` for application paths if direct visits to unknown paths should reach the React 404 page. Confirm the intended product categories and company contact details, and replace placeholder links or controls with their final destinations.