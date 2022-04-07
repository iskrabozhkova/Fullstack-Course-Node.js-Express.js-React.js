export const BLOGS_API_BASE_URL = 'http://localhost:8080/api';

class BlogsApiClient {
    constructor(baseApiUrl){
        this.baseApiUrl = baseApiUrl;
    }

    async fetchPosts() {
        return this.handleResponse(async ()=> fetch(`${this.baseApiUrl}/posts`))
    }

    async handleResponse(asyncRequestFunc){
        try{
            const resp = await asyncRequestFunc();
            const content = await resp.json();
            if(resp.status < 400) {
                console.log(`${JSON.stringify(content)}`);
                return content;
            } else {
                console.log(`HTTP error ${JSON.stringify(resp)}`);
                return Promise.reject(`HTTP error ${JSON.stringify(resp)}`);
            }
        } catch(err) {
            console.log(`HTTP error: ${err}`);
            return Promise.reject(`HTTP error: ${err}`);
        }
    }
}

export default new BlogsApiClient(BLOGS_API_BASE_URL);