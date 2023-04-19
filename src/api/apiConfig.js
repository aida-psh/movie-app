const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey : '0532cd0ee9b4b0a6ace758c39399174e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;


