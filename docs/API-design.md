# Image Bot API Design

## Object Model
```ts
{
    id: number
    url: string
}
```

## Database
TODO: Describe how images are being stored

## Create
Creates a new entry in the database from the details provided in the request body

`POST` [TODO: get a URL]

Request body:
```js
{
    url: "[put-the-url-here]"
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

