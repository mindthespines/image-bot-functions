# Image Bot API Design

## Object Model

Each image will have an `id`, a `url`, and a `created_at` timestamp. `alt_text`,
`caption`, and `tags` fields can be added at the time of record creation or as
part of an update.

```ts
{
    id: number
    url: string
    alt_text: string | null
    caption: string | null
    tags: string[] | null
    created_at: string
}
```

## Database

The image data is stored in a Postgres database; this database is configured and
hosted via Supabase - when the setup moves into the code, I will link to it here
for reference.

## Create

Creates a new entry in the database from the details provided in the request
body

`POST` [TODO: get a URL]

Request body:

```js
{
  url:
  "[put-the-url-here]";
}
```

Notes:

Only the `"url"` field is required.

## Read

TODO: Describe the read routes

### Get All

TODO: Describe geting all images

### Get Filtered

TODO: Describe getting all images that meet some filter criteria

### Get One

TODO: Describe getting a single image

## Update

TODO: Describe the update route

## Delete

TODO: Describe the delete route
