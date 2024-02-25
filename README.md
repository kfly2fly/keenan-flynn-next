# Keenan's Next Webapp

This webapp is a learning experimentation with modern web frameworks. The app uses NextJS as it's backbone and helped me become proficient with TypeScript programming. You can use the app to learn a little bit more about me and what I'm interested in! 

The app implements the following technologies:

* Server Side Rendering (SSR) and Search Engine Optimization with NextJS
* Github OAuth with AuthJS/NextAuth
* SQLite database through Prisma
* Beautiful and Responsive [ShadCN](https://ui.shadcn.com/) UI components
* Custom styling with Tailwind CSS


## Installation

Use npm to install this project 

```bash
npm i                      # Install all node packages

npx prisma migrate dev     # Generate a .db file named dev.db

npm run dev                # Start a local development server
```

Additionally you will need to set up environment variables for authentication to work. These include:
* AUTH_SECRET
  * A random string of numbers and letters
* GITHUB_CLIENT_ID
  * Client ID generated by Github's [OAuth app registry](https://github.com/settings/applications/new)
* GITHUB_CLIENT_SECRET
  * Client secret generated by Github [OAuth app registry](https://github.com/settings/applications/new)
* DATABASE_URL
  * A url to a local database for prisma to connect to 

## License

[MIT](https://choosealicense.com/licenses/mit/)