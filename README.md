# Hidden Stash Repo (Production)

### Hosted applications

- Extension: Chrome application
- Backend: Node server for web app & slack app interface
- Admin: Front end for the quick admin web app.

### Top level scripts

- `yarn` install all dependencies for admin & backend
- `yarn test` run all tests for admin & backend
- `yarn dev` run everything in one command

If you do not already have it, you may want to add this script to your `.vscode/settings.json` for lint to work within mono repo:

```json
{
  "eslint.workingDirectories": ["./backend", "./admin"]
}
```
