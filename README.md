# Zuri-CRUD-App-with-Database

A simple express application that perfoms CRUD action. Here is the `Hosted Link - Base URL`: [https://immense-falls-32588.herokuapp.com/](https://immense-falls-32588.herokuapp.com/ "CRUD App"). This Base URL redirects to the `https://immense-falls-32588.herokuapp.com/api/all` route.

# Creates the data

The route below is used to create a data that contains `name`, `email` & `country`.

**URL** : `https://immense-falls-32588.herokuapp.com/api/create/`

**Method** : `POST`

**Auth required** : NO

**Data example**

```json
{
  "name": "John Doe",
  "email": "johndoe@gmail.com",
  "country": "Canada"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "message": "Data created successfully",
  "data": {
    "_id": "609893b8c46c7d0004af7db3",
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "country": "Canada"
  }
}
```

## Error Response

**Condition** : If data `name`, `email` and/or `country` are not on the payload.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "The data you are required to create should contain name, email and country"
}
```

# Gets the data created

The route below is used to get a data that has been created.

**URL** : `https://immense-falls-32588.herokuapp.com/api/read/:dataId`

**Method** : `GET`

**Auth required** : NO

The `:dataId` is the unique id of each data. Using `John Doe's` data and picking its id: `609893b8c46c7d0004af7db3`

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "message": "Data read successfully",
  "data": {
    "_id": "609893b8c46c7d0004af7db3",
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "country": "Canada"
  }
}
```

## Error Response

**Condition** : If the wrong/incorrect `:dataId` is used.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "Data doesn't exist"
}
```

# Updates the data created

The route below is used to update a data that contains `name`, `email` & `country`.

**URL** : `https://immense-falls-32588.herokuapp.com/api/update/:dataId`

**Method** : `PUT`

**Auth required** : NO

**Data example**

```json
{
  "name": "John Doe Amy",
  "email": "johndoe@gmail.com",
  "country": "Canada"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "message": "Data updated successfully",
  "data": {
    "_id": "609893b8c46c7d0004af7db3",
    "name": "John Doe Amy",
    "email": "johndoe@gmail.com",
    "country": "Canada"
  }
}
```

## Error Response

**Condition** : If data `name`, `email` and/or `country` are not on the payload.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "The data you are required to update should contain name, email and country"
}
```

# Deletes the data created

The route below is used to delete a data that has been created.

**URL** : `https://immense-falls-32588.herokuapp.com/api/delete/:dataId`

**Method** : `DELETE`

**Auth required** : NO

The `:dataId` is the unique id of each data. Using `John Doe's` data and picking its id: `609893b8c46c7d0004af7db3`

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "message": "Data deleted successfully"
}
```

## Error Response

**Condition** : If the wrong/incorrect `dataId` is used.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "Data doesn't exist"
}
```

# Get all the data created

The route below is used to get all data.

**URL** : `https://immense-falls-32588.herokuapp.com/api/all`

**Method** : `GET`

**Auth required** : NO

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "message": "All data read successfully",
  "data": [{...}, {...}]
}
```

## Error Response

**Condition** : If there is something wrong with the request.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "There is an error"
}
```
