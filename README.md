# gitignore_init
- A simple npm package to generate a .gitignore file for Node projects.
## Installation
---------------
```Bash
npm install -D @greycode/gitignore_init
```
## Usage
-----
```Bash
npx gitignore-init
```
### What to Expect
------------------
#### This package generates a .gitignore file with the following ignores:
- Node.js dependencies `(node_modules/)`
- Logs `(logs/)`
- Environment variables `(.env)`
- Operating system files `(.DS_Store, Thumbs.db)`
- Build and dist directories `(build/, dist/)`
- Express-specific files `(*.log, *.pid)`
- IDE-specific files `(.idea/, .vscode/)`
- Other unnecessary files `(*.tmp, *.cache, *.DS_Store, *.swp)`
### Customization
--------------
- You can customize the generated .gitignore file by modifying the `.gitignore` file in the working `Dir` package.
## Contributing
- If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/kculz/country_utils.git).
-------
express-gitignore is licensed under the MIT License.

