import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const reactions = { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export const fetchPosts = createAsyncThunk( 'posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})

export const addNewPost = createAsyncThunk( 'posts/addNewPost',
  async initialPost => {
    const response = await client.post( '/fakeApi/posts', initialPost )
    return response.data
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState, // Using shorthand: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
  reducers: {
    postAdded: {
      reducer( state, action ) {
        state.posts.push( action.payload ) // Globally state.posts.push(...)
      },
      prepare( title, content, userId ) {
        return {
          payload: {
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions
          }
        }
      }
    },
    postUpdated( state, action ) {
      const { id, title, content } = action.payload
      const existingPost = state.posts.find( post => post.id === id )
      if( existingPost ) {
        existingPost.title = title
        existingPost.content = content
      }
    },
    reactionAdded( state, action ) {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find( post => post.id === postId )
      if ( existingPost ) {
        existingPost.reactions[reaction]++
      }
    }
  },
  extraReducers( builder ) {
    builder
      .addCase( fetchPosts.pending, ( state, action ) => {
        state.status = 'loading'
      })
      .addCase( fetchPosts.fulfilled, ( state, action ) => {
        state.status = 'succeeded'
        state.posts = state.posts.concat( action.payload )
      })
      .addCase( fetchPosts.rejected, ( state, action ) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase( addNewPost.fulfilled, ( state, action ) => {
        state.posts.push( action.payload )
      })

  }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer

export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, id) => state.posts.posts.find( post => post.id === id )
export const selectPostsByUser = createSelector(
  [ selectAllPosts, ( state, userId ) => userId],
  ( posts, userId ) => posts.filter( post => post.user === userId )
)
