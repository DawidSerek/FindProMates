```bash
.
├── LICENSE
├── README.md
├── STRUCTURE.md
├── data
│   └── db.json # File containing "projects" and "users" data.
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── react_scripts213.txt
└── src
    ├── App.js # Main application file with brand colors and page routing.
    ├── assets
    │   └── logos
    ├── components
    │   ├── Footer.js
    │   ├── Header.js
    │   ├── NavHoverBox.js # Component for pop-up boxes on sidebar hover.
    │   ├── NavItem.js # Items populating the sidebar.
    │   ├── PMStyles.js # Defines styling properties for components.
    │   ├── BrandButton.js
    │   ├── ProjectCard.js
    │   ├── Sidebar.js
    │   └── TodoCard.js
    ├── context
    │   ├── projectsProvider.js # Manages project state, fetches data, and provides context.
    │   └── usersProvider.js # Manages user state, fetches data, and provides context.
    ├── hooks
    │   └── ColorModeSwitcher.js # Button for switching the site's theme.
    ├── index.js
    ├── layouts
    │   └── RootLayout.js # Defines the site's main frame structure.
    ├── pages
    │   ├── Create.js
    │   ├── Dashboard.js
    │   ├── GlobalProjects.js
    │   ├── MyProjects.js
    │   └── Profile.js
    └── url.js
```
