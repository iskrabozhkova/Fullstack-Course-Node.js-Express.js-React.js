export const BLOGS_API_BASE_URL = 'http://localhost:8080/api';

class BlogsApiClient{
    constructor(baseUrl){
        this.baseUrl =baseUrl;
    }
    async fetchPosts(){
        return this.handleResponse(async () => fetch(`${this.baseUrl}/posts`))
    }
    async handleResponse(asyncRequestFunc){
        try{
            const resp = await asyncRequestFunc;
            const content = await resp.json();
            if(resp.status < 400){
                console.log(`${JSON.stringify(resp)}`);
                return content;
            }else{
                console.log(`Error with ${resp.status}: ${JSON.stringify(resp)}`);
                return Promise.reject(`Error with ${resp.status}: ${JSON.stringify(resp)}`);
            }
        }catch(err){
            console.log(`HTTP error performing request: ${err}`);
            return Promise.reject(`HTTP error performing request: ${err}`);
        }
    }
}

export default new BlogsApiClient(BLOGS_API_BASE_URL);