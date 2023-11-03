# Personal Portfolio

Hi, this is my personal web developer portfolio. You can check out my skills and work done outside of my regular job here :star:

## How to build it

TODO ...

## What this project uses / Overview

:small_blue_diamond: Lit
:small_blue_diamond: Web Components
:small_blue_diamond: Typescript
:small_blue_diamond: Vite
:small_blue_diamond: SCSS with BEM, Normalize, theming & small animations
:small_blue_diamond: Mobile first development
:small_blue_diamond: Responsiveness

## Concepts & Possibilities

- **Web Components** 📦

  This portfolio site is built with web components. For a better developer experience and better overall quality and functionality, the web component framework **Lit** is used. For more on Lit, visit its documentation here: <https://lit.dev/>.

- **Configurable** 🔧

  This portfolio site and the used components are, to a certain extend, configurable. By updating the config.ts file and adding the necessary assets into the respective folder, one can insert his/her own data and information, images etc. and customize the site. All properties to the needed *ConfigModel* are optional, removing the components not specified from the page.
  The general page component then connects all components.
  This portfolio site does not claim to be a completely configurable personal website builder, however, if you like the core design as is, you are invited to download it, tweak it, choose a theme and reuse it for your own portfolio 🙂

- **Theming** 🔴🔵🟡🟤

  If you want to use a specific design instead of enabling users to choose a theme, just specify the theme in the *DataModel*s **theme** property (config.ts) that will then be permanent and unchangeable by users.

- **Localization** 🇩🇪 🇳🇱 🇫🇷 🇪🇦

  This site uses generated and translated .xlf files for localization. If you change the text, you have to do the following for enabling localization: TODO
