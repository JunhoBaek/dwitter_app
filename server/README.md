# Tweet API Document

## Schema

tweet

```
{
    id,
    username,
    text,
    createdAt
}
```

## GET /tweets

```
{
    [tweet, ...]
}
```

## GET /tweets?username=:username

```
{
    [tweet, ...]
}
```

## GET /tweets/:id

```
{
    tweet
}
```

## POST /tweets

request

```
{
    text,
    username
}
```

response

```
{
    tweet
}
```

## PUT /tweets/:id

request

```
{
    text
}
```

response

```
{
    id,
    username,
    text,
    createdAt
}
```

## DELETE /tweets/:id

response

```
{
    (no response)
}
```
