# Sanity Studio

This directory contains the Sanity Content Studio for the application.

<!-- Brief mention of what it contains, if applicable -->

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/en/download) (`v18.0.0`+)
- [pnpm](https://pnpm.io/installation) (`v8.7.6`+)

### Installation

1. Install dependencies (`pnpm install`)
1. Run the studio (`pnpm dev`): http://localhost:3333
1. Have fun!

### Schema

There are a small set of schemas that we make use of within the studio.

#### Post
The post schema as expected contains field relevant to each post: title, content, slug, image, author and categories.

#### Author
A small schema containing author data: name, image, bio. These can be referenced on a post.

#### Category
A small schema containing category data: title, description. These can be referenced on a post.
#### Supported Languages
A small schema which will allow content managers to add new languages in which documents can be translated to. This contains one default language that cannot and should not be changed. We have chosen to create the supported languages as a schema so that we can dynamically add languages using the sanity client.

We also have some additional "util" schemas that provide additional functionality: Block Content. This provides some additional styles to the post body.

### Document level translations

We are using the sanity recommended [plugin](https://github.com/sanity-io/document-internationalization) for document level translations. This is slightly different from field level translations in that it allows us to translate the whole document including any portable text entirely.

This is acheived by creating a unique document for each translation stemming from the default language. These documents are "joined" together by references (see the plugin [readme](https://github.com/sanity-io/document-internationalization) on specifics on how to query these documents).

The studio is using a custom desk structure that will only show posts from the default language. This provides a sleek editing experience as it feels like you are only interaction with one post which can then be translated and accessed via the original post.