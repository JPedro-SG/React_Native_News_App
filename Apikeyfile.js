
class ApiKey {
    // i'm using https://newsapi.org
    constructor(){
        this.apikey = "your api key goes here"
    }

    get getApikey(){
        return this.apikey;
    }
}

export default ApiKey