const initState = {
  posts: [
    { id: "1", title: "Squirtle Laid an Egg", body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, minus! At, maiores harum, cupiditate illo minima velit recusandae necessitatibus ullam ducimus dignissimos sit soluta incidunt unde voluptates ratione, eveniet et." },
    { id: "2", title: "Charmander Laid an Egg", body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, minus! At, maiores harum, cupiditate illo minima velit recusandae necessitatibus ullam ducimus dignissimos sit soluta incidunt unde voluptates ratione, eveniet et." },
    { id: "3", title: "a Helix Fossil was Found", body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, minus! At, maiores harum, cupiditate illo minima velit recusandae necessitatibus ullam ducimus dignissimos sit soluta incidunt unde voluptates ratione, eveniet et." }
  ]
};

const rootReducer = (state = initState, action) => {
  if(action.type === "DELETE_POST") {
    const newPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: newPosts
    };
  };
  return state;
};

export default rootReducer;