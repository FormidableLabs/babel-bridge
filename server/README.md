# Server

This directory contains the server-side code for the application. It comprises the following parts:

1. A [RESTful server](./index.ts) built with [ElysiaJS](https://elysiajs.com/).
1. A [Sanity client](./contentQueries.ts) to request content from Sanity.
1. A [translation module](./translation.ts) to translate content with OpenAI.

## Getting started

### Prerequisites

- [Bun](https://bun.sh) (`v1.0.0`+)

### Installation

1. Create an `.env` file according to [`.env.example`](./.env.example)
1. Install dependencies (`bun install`)
1. Run the server (`bun dev`): http://localhost:3000/api
1. Have fun!

## API

<details>
  <summary>Current API routes</summary>

### `GET /api`

Returns the client locale, as well as a document count, e.g.:

```json
{
  "locale": "en-US",
  "count": {
    "published": 5,
    "draft": 2
  }
}
```

### `GET /api/posts`

Returns an array of the published posts, e.g.:

```json
[
  {
    "language": "en-US",
    "categories": [ ... ],
    "body": [ ... ],
    "slug": {
      "current": "a-new-hope",
      "_type": "slug"
    },
    "author": {
      "_type": "reference",
      "_ref": "c0b396fb-f978-41b0-86f6-fef3d0fd50c2"
    },
    "_createdAt": "2023-09-25T12:50:40Z",
    "_rev": "rQNZ3edRaebky0k7n2A2dB",
    "_updatedAt": "2023-09-27T10:03:58Z",
    "_type": "post",
    "_id": "73a95c42-333c-4bdb-a51c-c7c4e8b0b512",
    "title": "Star Wars: A New Hope"
  },
]
```

### `GET /api/posts/:slug`

Returns the published post corresponding to the given slug, translated into the client locale, e.g.:

```json
{
  "language": "mi-NZ",
  "categories": [ ... ],
  "body": [ ... ],
  "slug": {
    "current": "a-new-hope",
    "_type": "slug"
  },
  "author": {
    "_type": "reference",
    "_ref": "c0b396fb-f978-41b0-86f6-fef3d0fd50c2"
  },
  "_createdAt": "2023-09-25T12:50:40Z",
  "_rev": "rQNZ3edRaebky0k7n2A2dB",
  "_updatedAt": "2023-09-27T10:03:58Z",
  "_type": "post",
  "_id": "73a95c42-333c-4bdb-a51c-c7c4e8b0b512",
  "title": "Whetū Riri: Tūmanako Hou"
}
```

</details>
