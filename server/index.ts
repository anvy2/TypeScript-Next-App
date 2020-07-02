import next from "next";
import express, { Request, Response } from "express";

const dev: boolean = process.env.NODE_ENV! !== 'production';
const port: any = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', (req: Request, res: Response) => {
    return handle(req, res);
  })
  server.listen(port, (err: object) => {
    if (err) throw err;
    console.log(`Listening on port : ${port}`)
  }

  );
})
