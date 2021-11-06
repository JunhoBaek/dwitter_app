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

# User API Document

## Schema

```
{
  id,
  username,
  password,
  email
}
```

## POST /auth/signup

request

```
{
  username,
  password,
  email
}
```

response

```
{
    token,
    username
}
```

## POST /auth/login

request

```
{
    username,
    password
}
```

response

```
{
    token,
    username
}
```

## GET /auth/me

response

```
{
    token,
    username
}
```
