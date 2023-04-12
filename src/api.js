import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Y2TIMAwoEQBVpxvp7XmFS0CXEemwtTkG4Bdme_wpXi4'
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response)

    return response;
};

export default searchImages;