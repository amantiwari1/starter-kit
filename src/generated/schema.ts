export type Scalars = {
    Int: number,
    String: string,
    ID: string,
    Float: number,
    Boolean: boolean,
    Upload: any,
}

export interface Query {
    _?: Scalars['Int']
    albums?: AlbumsPage
    album?: Album
    comments?: CommentsPage
    comment?: Comment
    photos?: PhotosPage
    photo?: Photo
    posts?: PostsPage
    post?: Post
    todos?: TodosPage
    todo?: Todo
    users?: UsersPage
    user?: User
    __typename: 'Query'
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type OperatorKindEnum = 'GTE' | 'LTE' | 'NE' | 'LIKE'

export interface AlbumsPage {
    data?: (Album | undefined)[]
    links?: PaginationLinks
    meta?: PageMetadata
    __typename: 'AlbumsPage'
}

export interface Album {
    id?: Scalars['ID']
    title?: Scalars['String']
    user?: User
    photos?: PhotosPage
    __typename: 'Album'
}

export interface User {
    id?: Scalars['ID']
    name?: Scalars['String']
    username?: Scalars['String']
    email?: Scalars['String']
    address?: Address
    phone?: Scalars['String']
    website?: Scalars['String']
    company?: Company
    posts?: PostsPage
    albums?: AlbumsPage
    todos?: TodosPage
    __typename: 'User'
}

export interface Address {
    street?: Scalars['String']
    suite?: Scalars['String']
    city?: Scalars['String']
    zipcode?: Scalars['String']
    geo?: Geo
    __typename: 'Address'
}

export interface Geo {
    lat?: Scalars['Float']
    lng?: Scalars['Float']
    __typename: 'Geo'
}

export interface Company {
    name?: Scalars['String']
    catchPhrase?: Scalars['String']
    bs?: Scalars['String']
    __typename: 'Company'
}

export interface PostsPage {
    data?: (Post | undefined)[]
    links?: PaginationLinks
    meta?: PageMetadata
    __typename: 'PostsPage'
}

export interface Post {
    id?: Scalars['ID']
    title?: Scalars['String']
    body?: Scalars['String']
    user?: User
    comments?: CommentsPage
    __typename: 'Post'
}

export interface CommentsPage {
    data?: (Comment | undefined)[]
    links?: PaginationLinks
    meta?: PageMetadata
    __typename: 'CommentsPage'
}

export interface Comment {
    id?: Scalars['ID']
    name?: Scalars['String']
    email?: Scalars['String']
    body?: Scalars['String']
    post?: Post
    __typename: 'Comment'
}

export interface PaginationLinks {
    first?: PageLimitPair
    prev?: PageLimitPair
    next?: PageLimitPair
    last?: PageLimitPair
    __typename: 'PaginationLinks'
}

export interface PageLimitPair {
    page?: Scalars['Int']
    limit?: Scalars['Int']
    __typename: 'PageLimitPair'
}

export interface PageMetadata {
    totalCount?: Scalars['Int']
    __typename: 'PageMetadata'
}

export interface TodosPage {
    data?: (Todo | undefined)[]
    links?: PaginationLinks
    meta?: PageMetadata
    __typename: 'TodosPage'
}

export interface Todo {
    id?: Scalars['ID']
    title?: Scalars['String']
    completed?: Scalars['Boolean']
    user?: User
    __typename: 'Todo'
}

export interface PhotosPage {
    data?: (Photo | undefined)[]
    links?: PaginationLinks
    meta?: PageMetadata
    __typename: 'PhotosPage'
}

export interface Photo {
    id?: Scalars['ID']
    title?: Scalars['String']
    url?: Scalars['String']
    thumbnailUrl?: Scalars['String']
    album?: Album
    __typename: 'Photo'
}

export interface UsersPage {
    data?: (User | undefined)[]
    links?: PaginationLinks
    meta?: PageMetadata
    __typename: 'UsersPage'
}

export interface Mutation {
    _?: Scalars['Int']
    createAlbum?: Album
    updateAlbum?: Album
    deleteAlbum?: Scalars['Boolean']
    createComment?: Comment
    updateComment?: Comment
    deleteComment?: Scalars['Boolean']
    createPhoto?: Photo
    updatePhoto?: Photo
    deletePhoto?: Scalars['Boolean']
    createPost?: Post
    updatePost?: Post
    deletePost?: Scalars['Boolean']
    createTodo?: Todo
    updateTodo?: Todo
    deleteTodo?: Scalars['Boolean']
    createUser?: User
    updateUser?: User
    deleteUser?: Scalars['Boolean']
    __typename: 'Mutation'
}

export type CacheControlScope = 'PUBLIC' | 'PRIVATE'

export interface QueryGenqlSelection{
    _?: boolean | number
    albums?: (AlbumsPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    album?: (AlbumGenqlSelection & { __args: {id: Scalars['ID']} })
    comments?: (CommentsPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    comment?: (CommentGenqlSelection & { __args: {id: Scalars['ID']} })
    photos?: (PhotosPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    photo?: (PhotoGenqlSelection & { __args: {id: Scalars['ID']} })
    posts?: (PostsPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    post?: (PostGenqlSelection & { __args: {id: Scalars['ID']} })
    todos?: (TodosPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    todo?: (TodoGenqlSelection & { __args: {id: Scalars['ID']} })
    users?: (UsersPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    user?: (UserGenqlSelection & { __args: {id: Scalars['ID']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageQueryOptions {paginate?: (PaginateOptions | null),slice?: (SliceOptions | null),sort?: ((SortOptions | null)[] | null),operators?: ((OperatorOptions | null)[] | null),search?: (SearchOptions | null)}

export interface PaginateOptions {page?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null)}

export interface SliceOptions {start?: (Scalars['Int'] | null),end?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null)}

export interface SortOptions {field?: (Scalars['String'] | null),order?: (SortOrderEnum | null)}

export interface OperatorOptions {kind?: (OperatorKindEnum | null),field?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface SearchOptions {q?: (Scalars['String'] | null)}

export interface AlbumsPageGenqlSelection{
    data?: AlbumGenqlSelection
    links?: PaginationLinksGenqlSelection
    meta?: PageMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AlbumGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    user?: UserGenqlSelection
    photos?: (PhotosPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    username?: boolean | number
    email?: boolean | number
    address?: AddressGenqlSelection
    phone?: boolean | number
    website?: boolean | number
    company?: CompanyGenqlSelection
    posts?: (PostsPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    albums?: (AlbumsPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    todos?: (TodosPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddressGenqlSelection{
    street?: boolean | number
    suite?: boolean | number
    city?: boolean | number
    zipcode?: boolean | number
    geo?: GeoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GeoGenqlSelection{
    lat?: boolean | number
    lng?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CompanyGenqlSelection{
    name?: boolean | number
    catchPhrase?: boolean | number
    bs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PostsPageGenqlSelection{
    data?: PostGenqlSelection
    links?: PaginationLinksGenqlSelection
    meta?: PageMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PostGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    body?: boolean | number
    user?: UserGenqlSelection
    comments?: (CommentsPageGenqlSelection & { __args?: {options?: (PageQueryOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CommentsPageGenqlSelection{
    data?: CommentGenqlSelection
    links?: PaginationLinksGenqlSelection
    meta?: PageMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CommentGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    email?: boolean | number
    body?: boolean | number
    post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginationLinksGenqlSelection{
    first?: PageLimitPairGenqlSelection
    prev?: PageLimitPairGenqlSelection
    next?: PageLimitPairGenqlSelection
    last?: PageLimitPairGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageLimitPairGenqlSelection{
    page?: boolean | number
    limit?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageMetadataGenqlSelection{
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TodosPageGenqlSelection{
    data?: TodoGenqlSelection
    links?: PaginationLinksGenqlSelection
    meta?: PageMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TodoGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    completed?: boolean | number
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PhotosPageGenqlSelection{
    data?: PhotoGenqlSelection
    links?: PaginationLinksGenqlSelection
    meta?: PageMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PhotoGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    url?: boolean | number
    thumbnailUrl?: boolean | number
    album?: AlbumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPageGenqlSelection{
    data?: UserGenqlSelection
    links?: PaginationLinksGenqlSelection
    meta?: PageMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    _?: boolean | number
    createAlbum?: (AlbumGenqlSelection & { __args: {input: CreateAlbumInput} })
    updateAlbum?: (AlbumGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateAlbumInput} })
    deleteAlbum?: { __args: {id: Scalars['ID']} }
    createComment?: (CommentGenqlSelection & { __args: {input: CreateCommentInput} })
    updateComment?: (CommentGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateCommentInput} })
    deleteComment?: { __args: {id: Scalars['ID']} }
    createPhoto?: (PhotoGenqlSelection & { __args: {input: CreatePhotoInput} })
    updatePhoto?: (PhotoGenqlSelection & { __args: {id: Scalars['ID'], input: UpdatePhotoInput} })
    deletePhoto?: { __args: {id: Scalars['ID']} }
    createPost?: (PostGenqlSelection & { __args: {input: CreatePostInput} })
    updatePost?: (PostGenqlSelection & { __args: {id: Scalars['ID'], input: UpdatePostInput} })
    deletePost?: { __args: {id: Scalars['ID']} }
    createTodo?: (TodoGenqlSelection & { __args: {input: CreateTodoInput} })
    updateTodo?: (TodoGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateTodoInput} })
    deleteTodo?: { __args: {id: Scalars['ID']} }
    createUser?: (UserGenqlSelection & { __args: {input: CreateUserInput} })
    updateUser?: (UserGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateUserInput} })
    deleteUser?: { __args: {id: Scalars['ID']} }
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateAlbumInput {title: Scalars['String'],userId: Scalars['ID']}

export interface UpdateAlbumInput {title?: (Scalars['String'] | null),userId?: (Scalars['ID'] | null)}

export interface CreateCommentInput {name: Scalars['String'],email: Scalars['String'],body: Scalars['String']}

export interface UpdateCommentInput {name?: (Scalars['String'] | null),email?: (Scalars['String'] | null),body?: (Scalars['String'] | null)}

export interface CreatePhotoInput {title: Scalars['String'],url: Scalars['String'],thumbnailUrl: Scalars['String']}

export interface UpdatePhotoInput {title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),thumbnailUrl?: (Scalars['String'] | null)}

export interface CreatePostInput {title: Scalars['String'],body: Scalars['String']}

export interface UpdatePostInput {title?: (Scalars['String'] | null),body?: (Scalars['String'] | null)}

export interface CreateTodoInput {title: Scalars['String'],completed: Scalars['Boolean']}

export interface UpdateTodoInput {title?: (Scalars['String'] | null),completed?: (Scalars['Boolean'] | null)}

export interface CreateUserInput {name: Scalars['String'],username: Scalars['String'],email: Scalars['String'],address?: (AddressInput | null),phone?: (Scalars['String'] | null),website?: (Scalars['String'] | null),company?: (CompanyInput | null)}

export interface AddressInput {street?: (Scalars['String'] | null),suite?: (Scalars['String'] | null),city?: (Scalars['String'] | null),zipcode?: (Scalars['String'] | null),geo?: (GeoInput | null)}

export interface GeoInput {lat?: (Scalars['Float'] | null),lng?: (Scalars['Float'] | null)}

export interface CompanyInput {name?: (Scalars['String'] | null),catchPhrase?: (Scalars['String'] | null),bs?: (Scalars['String'] | null)}

export interface UpdateUserInput {name?: (Scalars['String'] | null),username?: (Scalars['String'] | null),email?: (Scalars['String'] | null),address?: (AddressInput | null),phone?: (Scalars['String'] | null),website?: (Scalars['String'] | null),company?: (CompanyInput | null)}


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const AlbumsPage_possibleTypes: string[] = ['AlbumsPage']
    export const isAlbumsPage = (obj?: { __typename?: any } | null): obj is AlbumsPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlbumsPage"')
      return AlbumsPage_possibleTypes.includes(obj.__typename)
    }
    


    const Album_possibleTypes: string[] = ['Album']
    export const isAlbum = (obj?: { __typename?: any } | null): obj is Album => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlbum"')
      return Album_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const Address_possibleTypes: string[] = ['Address']
    export const isAddress = (obj?: { __typename?: any } | null): obj is Address => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddress"')
      return Address_possibleTypes.includes(obj.__typename)
    }
    


    const Geo_possibleTypes: string[] = ['Geo']
    export const isGeo = (obj?: { __typename?: any } | null): obj is Geo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGeo"')
      return Geo_possibleTypes.includes(obj.__typename)
    }
    


    const Company_possibleTypes: string[] = ['Company']
    export const isCompany = (obj?: { __typename?: any } | null): obj is Company => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCompany"')
      return Company_possibleTypes.includes(obj.__typename)
    }
    


    const PostsPage_possibleTypes: string[] = ['PostsPage']
    export const isPostsPage = (obj?: { __typename?: any } | null): obj is PostsPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostsPage"')
      return PostsPage_possibleTypes.includes(obj.__typename)
    }
    


    const Post_possibleTypes: string[] = ['Post']
    export const isPost = (obj?: { __typename?: any } | null): obj is Post => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPost"')
      return Post_possibleTypes.includes(obj.__typename)
    }
    


    const CommentsPage_possibleTypes: string[] = ['CommentsPage']
    export const isCommentsPage = (obj?: { __typename?: any } | null): obj is CommentsPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsPage"')
      return CommentsPage_possibleTypes.includes(obj.__typename)
    }
    


    const Comment_possibleTypes: string[] = ['Comment']
    export const isComment = (obj?: { __typename?: any } | null): obj is Comment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComment"')
      return Comment_possibleTypes.includes(obj.__typename)
    }
    


    const PaginationLinks_possibleTypes: string[] = ['PaginationLinks']
    export const isPaginationLinks = (obj?: { __typename?: any } | null): obj is PaginationLinks => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginationLinks"')
      return PaginationLinks_possibleTypes.includes(obj.__typename)
    }
    


    const PageLimitPair_possibleTypes: string[] = ['PageLimitPair']
    export const isPageLimitPair = (obj?: { __typename?: any } | null): obj is PageLimitPair => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageLimitPair"')
      return PageLimitPair_possibleTypes.includes(obj.__typename)
    }
    


    const PageMetadata_possibleTypes: string[] = ['PageMetadata']
    export const isPageMetadata = (obj?: { __typename?: any } | null): obj is PageMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageMetadata"')
      return PageMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const TodosPage_possibleTypes: string[] = ['TodosPage']
    export const isTodosPage = (obj?: { __typename?: any } | null): obj is TodosPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTodosPage"')
      return TodosPage_possibleTypes.includes(obj.__typename)
    }
    


    const Todo_possibleTypes: string[] = ['Todo']
    export const isTodo = (obj?: { __typename?: any } | null): obj is Todo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTodo"')
      return Todo_possibleTypes.includes(obj.__typename)
    }
    


    const PhotosPage_possibleTypes: string[] = ['PhotosPage']
    export const isPhotosPage = (obj?: { __typename?: any } | null): obj is PhotosPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPhotosPage"')
      return PhotosPage_possibleTypes.includes(obj.__typename)
    }
    


    const Photo_possibleTypes: string[] = ['Photo']
    export const isPhoto = (obj?: { __typename?: any } | null): obj is Photo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPhoto"')
      return Photo_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPage_possibleTypes: string[] = ['UsersPage']
    export const isUsersPage = (obj?: { __typename?: any } | null): obj is UsersPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPage"')
      return UsersPage_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    

export const enumSortOrderEnum = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumOperatorKindEnum = {
   GTE: 'GTE' as const,
   LTE: 'LTE' as const,
   NE: 'NE' as const,
   LIKE: 'LIKE' as const
}

export const enumCacheControlScope = {
   PUBLIC: 'PUBLIC' as const,
   PRIVATE: 'PRIVATE' as const
}
