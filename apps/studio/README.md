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

## Schema

We are utilising the "blog" starter template which gives us a few basic document types: [Post](./schemas/post.ts), [Author](./schemas/author.ts), and [Category](./schemas/category.ts). We've built upon this by adding [Supported Languages](./schemas/supportedLanguages.ts) to facilitate the document level translations.

### Supported Languages
This document type allows content managers to add new languages that documents can be translated into. The default language is set to `en-US`, which serves as the base for all other translations.

Content authors can manage supported languages within the Sanity Studio. Additionally, if a user requests a language not yet supported, a new language document is automatically generated, allowing translations for that language to be added as well.

### Document-level translations

We are using [Sanity's recommended plugin](https://www.sanity.io/plugins/document-internationalization) for document-level translations. Unlike field-level translations, this approach allows us to translate an entire document, including any portable text.

This is acheived by creating a unique document for each translation, stemming from the default language. These documents are "joined" together by references (see [the plugin readme](https://github.com/sanity-io/document-internationalization) for specifics on how to query these documents).

The Studio uses a custom desk structure that will only show posts in the _default language_. This provides a sleek editing experience as it feels like you are only interacting with one post, which can then be translated and accessed via the original post.