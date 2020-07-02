Make an empty tsconfig.json file in root of the project.

Run yarn dev or npm run dev. This willl now populate the tsconfig.json file with default values.

Install all packages in package.json file that has been missing.

Install development dependencies with --dev flag.

Then refactor the project heirarchy to look like same.

Now copy the files tsconfig.server.json and global.d.ts to the root folder of the project

Now to make a bare minimum express server with react either copy the server folder or write it by copying the one here.

Lastly modify the scripts in package.json file with the one given here.



That's it. A complete development environment with typescript is ready to work on
