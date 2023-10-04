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

We are utilising the "blog" starter which gives us a few basic schemas: post, author and categories. We've built upon this by adding in Supported Languages to facilitate the document level translations.

#### Supported Languages
A small schema which will allow content managers to add new languages in which documents can be translated to. There is a default langauge set as `en-US`, this will serve as the base language for all other translations. 

This schema can be managed by content authors or can be added to dynamically, if a language is requested by the user that does not exist in the supported languages, a language document will be created which will allow us to fill with the content translated from the api.

### Document level translations

We are using the sanity recommended [plugin](https://github.com/sanity-io/document-internationalization) for document level translations. This is slightly different from field level translations in that it allows us to translate the whole document including any portable text entirely.

This is acheived by creating a unique document for each translation stemming from the default language. These documents are "joined" together by references (see the plugin [readme](https://github.com/sanity-io/document-internationalization) on specifics on how to query these documents).

The studio is using a custom desk structure that will only show posts from the default language. This provides a sleek editing experience as it feels like you are only interaction with one post which can then be translated and accessed via the original post.