## Notes API

Notes API build with Nodejs + Express + MongoDB + TypeScript

## Install Dependencies

```bash
$ yarn install
```

## Run Development Server

```bash
$ yarn run dev
```

## Run Production Server

```bash
$ yarn run start
```

## Build for Production

```bash
$ yarn run build
```

## Environment Variables
```
Create a .env file in the root copy values from the .env.example file ane set the properly values
PORT   // Port to run the server
DATABASE_URL // MongoDB Database URL connection string
```

## EndPoints

- Get all notes -- GET /api/notes
- Create note -- POST /api/notes
- Get note details -- GET /api/notes/:id
- Update note -- PUT /api/notes/:id
- Delete note -- DELETE /api/notes/:id
