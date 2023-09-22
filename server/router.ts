import express from "express";

import { getDocumentCount, getPost, getPosts } from "./contentQueries";
import { translate } from "./translation";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("GET /");

  getDocumentCount()
    .then((count) => res.send(`There are ${count} documents available.`))
    .catch((err) => res.status(500).send(err.message));
});

router.get("/posts", (_req, res) => {
  console.log("GET /posts");

  getPosts()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).send(err.message));
});

router.get("/posts/:slug", (req, res) => {
  console.log("GET /posts/:slug");

  const { slug } = req.params;

  getPost(slug)
    .then((post) => translate(post))
    .then((content) => res.json(content))
    .catch((err) => res.status(500).send(err.message));
});

export default router;
