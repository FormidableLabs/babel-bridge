# Sanity translations experiment

This is a small experiment to see how we can use Sanity to manage translations for a React application.

The overarching goal is to simplify the handling of language, making less work for the content team, the developers, and ultimately provide a seamless experience for the user. See the [user stories](#mvp) for more details.

Here is a rough diagram of how this should work:

```mermaid
flowchart TD
    RequestDocument[Client requests document] --> LookForTranslation{Does an up to date translation exist?}

    subgraph Sanity
        LookForTranslation -->|Yes| ReturnDocument[Serve it back to the client]
        LookForTranslation -->|No| TranslateContent[Translate the content]
        TranslateContent --> UpdateDocument[Update the Sanity document]
        UpdateDocument --> ReturnDocument[Serve it back to the client]
    end
```

## MVP

### Content manager

1. :memo: As a content manager, I want to be able to create a document in Sanity with a title and a body written in US English.
1. :globe_with_meridians: As a content manager, I want to know that when a user device requests a document in te reo Māori, that the document will automatically be translated for them.
1. :pencil2: As a content manager, I want to be able to manually edit translated content.
1. :robot: _(stretch)_ As a content manager, I want to be able to manually trigger the AI-based translation of a document.
1. :earth_asia: _(stretch)_ As a content manager, I want to be able to update the list of languages that a document can be translated into.

### User

1. :book: As a user, I want to be able to view a document in my language. If my language is not yet supported, I want to see the document in English.

### Developer

1. :hammer_and_wrench: As a developer, I want to be able to request a document from Sanity without having to worry about what language it is in.

## Implementation details

The application follows a simple structure, comprising the following parts:

1. A React Web application: Used to display content.
1. A RESTful Node.js server: Responsible for requesting content from Sanity or routing through the translation layer when needed.
1. A translation layer: Utilises OpenAI to translate content.
1. Sanity studio: Manages the content.
