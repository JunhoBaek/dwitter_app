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

response(for test)

```
{
    [tweet, ...] (all tweets)
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

response(for test)

```
{
    [tweet, ...] (all tweets)
}
```
