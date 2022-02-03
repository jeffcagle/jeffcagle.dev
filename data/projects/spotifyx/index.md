---
order: 1
date: '2021-09-05'
templateKey: 'projects'
slug: 'spotify-react-redux'
shortTitle: 'Spotify Redux'
longTitle: 'Spotify Redux'
summary: 'A re-creation of the Spotify Web App using React with Redux.'
frontendTools: ['HTML5', 'JavaScript', 'Next.js', 'React', 'Redux', 'Tailwind']
backendTools: ['Node', 'Spotify API']
image: './spotify-redux-cover.jpg'

codeUrl: 'https://github.com/jeffcagle/spotify-redux'
codeUnavailable: false
siteUrl: 'https://spotify-redux-rho.vercel.app/'
siteUnavailable: false
---

![Spotify Redux Design](./spotify-redux-main.jpg 'Website Design - Spotify + Redux')

Spotify is a virtual music library and player, available as a desktop application, on the web, or as a mobile app. Like many apps these days, they have an API service for developers.

I had been wanting to learn [Redux](https://redux.js.org/ 'Redux'), a popular state management library, and needed a project. Something fun to build. Rebuilding Spotify with Redux seemed the perfect fit.

And so the project began.

The big question was, do I build it exactly as it is in the real Spotify app? Do I re-design it? Ultimately, I decided to make only minor changes to the design, so as not to be distracted from the primary objective - to learn Redux.

## Redux Toolkit

In addition to learning Redux, I decided to include the [Redux Toolkit](https://redux-toolkit.js.org/ 'Redux Toolkit'). This library helps to reduce boilerplate code generally required by Redux, and simplify the complexities Redux is known for.

Here is a code example using the Redux Toolkit's createSlice function.

```javascript
const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
});

const { actions, reducer } = postsSlice;
export const { createPost, updatePost, deletePost } = actions;
export default reducer;
```

Redux Toolkit not only allows you to include reducers and actions in the same file, but makes it much cleaner and easier to read.

## API Limitations

There is a limitation on the number of requests to the API, so this meant disabling features like the track slider.

**_NOTE: To view the app, you must have a [free Spotify account](https://www.spotify.com/signup/ 'Spotify')._**
