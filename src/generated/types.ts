export default {
    "scalars": [
        1,
        6,
        7,
        9,
        13,
        17,
        28,
        48,
        49
    ],
    "types": {
        "Query": {
            "_": [
                1
            ],
            "albums": [
                11,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "album": [
                12,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "comments": [
                21,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "comment": [
                22,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "photos": [
                29,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "photo": [
                30,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "posts": [
                19,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "post": [
                20,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "todos": [
                26,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "todo": [
                27,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "users": [
                31,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "user": [
                14,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "__typename": [
                6
            ]
        },
        "Int": {},
        "PageQueryOptions": {
            "paginate": [
                3
            ],
            "slice": [
                4
            ],
            "sort": [
                5
            ],
            "operators": [
                8
            ],
            "search": [
                10
            ],
            "__typename": [
                6
            ]
        },
        "PaginateOptions": {
            "page": [
                1
            ],
            "limit": [
                1
            ],
            "__typename": [
                6
            ]
        },
        "SliceOptions": {
            "start": [
                1
            ],
            "end": [
                1
            ],
            "limit": [
                1
            ],
            "__typename": [
                6
            ]
        },
        "SortOptions": {
            "field": [
                6
            ],
            "order": [
                7
            ],
            "__typename": [
                6
            ]
        },
        "String": {},
        "SortOrderEnum": {},
        "OperatorOptions": {
            "kind": [
                9
            ],
            "field": [
                6
            ],
            "value": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "OperatorKindEnum": {},
        "SearchOptions": {
            "q": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "AlbumsPage": {
            "data": [
                12
            ],
            "links": [
                23
            ],
            "meta": [
                25
            ],
            "__typename": [
                6
            ]
        },
        "Album": {
            "id": [
                13
            ],
            "title": [
                6
            ],
            "user": [
                14
            ],
            "photos": [
                29,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "__typename": [
                6
            ]
        },
        "ID": {},
        "User": {
            "id": [
                13
            ],
            "name": [
                6
            ],
            "username": [
                6
            ],
            "email": [
                6
            ],
            "address": [
                15
            ],
            "phone": [
                6
            ],
            "website": [
                6
            ],
            "company": [
                18
            ],
            "posts": [
                19,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "albums": [
                11,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "todos": [
                26,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "__typename": [
                6
            ]
        },
        "Address": {
            "street": [
                6
            ],
            "suite": [
                6
            ],
            "city": [
                6
            ],
            "zipcode": [
                6
            ],
            "geo": [
                16
            ],
            "__typename": [
                6
            ]
        },
        "Geo": {
            "lat": [
                17
            ],
            "lng": [
                17
            ],
            "__typename": [
                6
            ]
        },
        "Float": {},
        "Company": {
            "name": [
                6
            ],
            "catchPhrase": [
                6
            ],
            "bs": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "PostsPage": {
            "data": [
                20
            ],
            "links": [
                23
            ],
            "meta": [
                25
            ],
            "__typename": [
                6
            ]
        },
        "Post": {
            "id": [
                13
            ],
            "title": [
                6
            ],
            "body": [
                6
            ],
            "user": [
                14
            ],
            "comments": [
                21,
                {
                    "options": [
                        2
                    ]
                }
            ],
            "__typename": [
                6
            ]
        },
        "CommentsPage": {
            "data": [
                22
            ],
            "links": [
                23
            ],
            "meta": [
                25
            ],
            "__typename": [
                6
            ]
        },
        "Comment": {
            "id": [
                13
            ],
            "name": [
                6
            ],
            "email": [
                6
            ],
            "body": [
                6
            ],
            "post": [
                20
            ],
            "__typename": [
                6
            ]
        },
        "PaginationLinks": {
            "first": [
                24
            ],
            "prev": [
                24
            ],
            "next": [
                24
            ],
            "last": [
                24
            ],
            "__typename": [
                6
            ]
        },
        "PageLimitPair": {
            "page": [
                1
            ],
            "limit": [
                1
            ],
            "__typename": [
                6
            ]
        },
        "PageMetadata": {
            "totalCount": [
                1
            ],
            "__typename": [
                6
            ]
        },
        "TodosPage": {
            "data": [
                27
            ],
            "links": [
                23
            ],
            "meta": [
                25
            ],
            "__typename": [
                6
            ]
        },
        "Todo": {
            "id": [
                13
            ],
            "title": [
                6
            ],
            "completed": [
                28
            ],
            "user": [
                14
            ],
            "__typename": [
                6
            ]
        },
        "Boolean": {},
        "PhotosPage": {
            "data": [
                30
            ],
            "links": [
                23
            ],
            "meta": [
                25
            ],
            "__typename": [
                6
            ]
        },
        "Photo": {
            "id": [
                13
            ],
            "title": [
                6
            ],
            "url": [
                6
            ],
            "thumbnailUrl": [
                6
            ],
            "album": [
                12
            ],
            "__typename": [
                6
            ]
        },
        "UsersPage": {
            "data": [
                14
            ],
            "links": [
                23
            ],
            "meta": [
                25
            ],
            "__typename": [
                6
            ]
        },
        "Mutation": {
            "_": [
                1
            ],
            "createAlbum": [
                12,
                {
                    "input": [
                        33,
                        "CreateAlbumInput!"
                    ]
                }
            ],
            "updateAlbum": [
                12,
                {
                    "id": [
                        13,
                        "ID!"
                    ],
                    "input": [
                        34,
                        "UpdateAlbumInput!"
                    ]
                }
            ],
            "deleteAlbum": [
                28,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "createComment": [
                22,
                {
                    "input": [
                        35,
                        "CreateCommentInput!"
                    ]
                }
            ],
            "updateComment": [
                22,
                {
                    "id": [
                        13,
                        "ID!"
                    ],
                    "input": [
                        36,
                        "UpdateCommentInput!"
                    ]
                }
            ],
            "deleteComment": [
                28,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "createPhoto": [
                30,
                {
                    "input": [
                        37,
                        "CreatePhotoInput!"
                    ]
                }
            ],
            "updatePhoto": [
                30,
                {
                    "id": [
                        13,
                        "ID!"
                    ],
                    "input": [
                        38,
                        "UpdatePhotoInput!"
                    ]
                }
            ],
            "deletePhoto": [
                28,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "createPost": [
                20,
                {
                    "input": [
                        39,
                        "CreatePostInput!"
                    ]
                }
            ],
            "updatePost": [
                20,
                {
                    "id": [
                        13,
                        "ID!"
                    ],
                    "input": [
                        40,
                        "UpdatePostInput!"
                    ]
                }
            ],
            "deletePost": [
                28,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "createTodo": [
                27,
                {
                    "input": [
                        41,
                        "CreateTodoInput!"
                    ]
                }
            ],
            "updateTodo": [
                27,
                {
                    "id": [
                        13,
                        "ID!"
                    ],
                    "input": [
                        42,
                        "UpdateTodoInput!"
                    ]
                }
            ],
            "deleteTodo": [
                28,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "createUser": [
                14,
                {
                    "input": [
                        43,
                        "CreateUserInput!"
                    ]
                }
            ],
            "updateUser": [
                14,
                {
                    "id": [
                        13,
                        "ID!"
                    ],
                    "input": [
                        47,
                        "UpdateUserInput!"
                    ]
                }
            ],
            "deleteUser": [
                28,
                {
                    "id": [
                        13,
                        "ID!"
                    ]
                }
            ],
            "__typename": [
                6
            ]
        },
        "CreateAlbumInput": {
            "title": [
                6
            ],
            "userId": [
                13
            ],
            "__typename": [
                6
            ]
        },
        "UpdateAlbumInput": {
            "title": [
                6
            ],
            "userId": [
                13
            ],
            "__typename": [
                6
            ]
        },
        "CreateCommentInput": {
            "name": [
                6
            ],
            "email": [
                6
            ],
            "body": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "UpdateCommentInput": {
            "name": [
                6
            ],
            "email": [
                6
            ],
            "body": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "CreatePhotoInput": {
            "title": [
                6
            ],
            "url": [
                6
            ],
            "thumbnailUrl": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "UpdatePhotoInput": {
            "title": [
                6
            ],
            "url": [
                6
            ],
            "thumbnailUrl": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "CreatePostInput": {
            "title": [
                6
            ],
            "body": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "UpdatePostInput": {
            "title": [
                6
            ],
            "body": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "CreateTodoInput": {
            "title": [
                6
            ],
            "completed": [
                28
            ],
            "__typename": [
                6
            ]
        },
        "UpdateTodoInput": {
            "title": [
                6
            ],
            "completed": [
                28
            ],
            "__typename": [
                6
            ]
        },
        "CreateUserInput": {
            "name": [
                6
            ],
            "username": [
                6
            ],
            "email": [
                6
            ],
            "address": [
                44
            ],
            "phone": [
                6
            ],
            "website": [
                6
            ],
            "company": [
                46
            ],
            "__typename": [
                6
            ]
        },
        "AddressInput": {
            "street": [
                6
            ],
            "suite": [
                6
            ],
            "city": [
                6
            ],
            "zipcode": [
                6
            ],
            "geo": [
                45
            ],
            "__typename": [
                6
            ]
        },
        "GeoInput": {
            "lat": [
                17
            ],
            "lng": [
                17
            ],
            "__typename": [
                6
            ]
        },
        "CompanyInput": {
            "name": [
                6
            ],
            "catchPhrase": [
                6
            ],
            "bs": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "UpdateUserInput": {
            "name": [
                6
            ],
            "username": [
                6
            ],
            "email": [
                6
            ],
            "address": [
                44
            ],
            "phone": [
                6
            ],
            "website": [
                6
            ],
            "company": [
                46
            ],
            "__typename": [
                6
            ]
        },
        "CacheControlScope": {},
        "Upload": {}
    }
}