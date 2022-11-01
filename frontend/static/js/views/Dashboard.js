import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml(){

        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }
        
        const data = await getData('/static/js/views/posts.json')


        let listPosts = `<div class="container text-center">
                            <div class="row gy-5 g-5">
                        `;

        for(let i in data){
            listPosts +=`
                            <div class="col-lg-4">

                                <div class="card d-flex h-100">

                                    <div class="bg-secondary">
                                        <h5 class="card-header">Twitter Quotes</h5>
                                    </div>

                                    <div class="card-body">
                                        <p class="card-text">${data[i]['text']}</p>
                                    </div>

                                    <div class=" card-footer align-self-center">
                                        <a href="/posts/${data[i]['id']}" class="card-link btn btn-primary" data-link>See More</a>
                                    </div>

                                </div>

                            </div>
                            
                        `;
        }
        listPosts += `  </div>
                    </div>
                    `;
        return `
                    <div class="container mb-3 text-center">
                        <h1 class="display-2">@TheRock Twitter Posts</h1>
                    </div>
                    ${listPosts}
                `; 
    }
}