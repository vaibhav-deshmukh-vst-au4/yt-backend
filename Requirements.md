Backend -

User -
SignIn,
SignUp

Search History -
Add,
Delete One,
Delete All

Played Videos -
Add,
Delete One,
Delete All

Bookmarked Videos -
Add,
Delete One,
Delete All

Frontend -

SignIn / SignUp Page

Home Page -
SearchBar,
Videos List,
Video Section,
Played Videos,
Bookmarked Videos

Redux Store -
{
authReducer: {
name: "",
email: "",
},
videosReducer: {
currentlyPlaying: "",
videos: [],
searchHistory: [],
playedHistory: [],
bookmarkedHistory: [],
}
}
