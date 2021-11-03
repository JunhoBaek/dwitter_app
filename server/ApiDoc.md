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

## GET /tweet?username=:username

```
{
    [tweet, ...]
}
```

## GET /tweet?id=:id

```
{
    tweet
}
```

## POST /tweet

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
    id,
    username,
    text,
    createdAt
}
```

## PUT /tweet?id=:id

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

## DELETE /tweet?id=:id

response(for test)

```
{
    [tweet, ...] (all tweets)
}
```
