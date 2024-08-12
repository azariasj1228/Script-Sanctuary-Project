// recommendationEngine.js

export const getUserPreferences = async () => {
  return {
    favoriteGenres: ["Sci-Fi", "Fantasy"],
    dislikedGenres: ["Romance"],
  };
};

export const recommendBooks = (books, preferences) => {
  // Simple AI logic to recommend books based on user preferences
  return books.filter((book) =>
    preferences.favoriteGenres.includes(book.genre)
  );
};
