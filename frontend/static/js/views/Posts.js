
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Posts")
    }

    async getHtml(){
        //  console.log(this.params.id);

        const nu = Number(this.params.id)

        async function getData(url) {
            const response = await fetch(url);  
            return response.json();
          }

          const data = await getData('/static/js/views/posts.json');

          const article = data.find(item => item.id === nu);

        //   console.log(article);

        return `
                <div class="container">
                    <h1><span>Screen Name:</span> ${article['user']['screen_name']}</h1>
                     
                    <div class="card d-flex h-100">

                        <div class="bg-secondary">
                            <h5 class="card-header">Tweet Post</h5>
                        </div>


                        <div class="card-body">
                            <h5 class="card-title"> <span>Name:</span>&nbsp ${article['user']['name']} </h5>
                            <h6 class="card-subtitle mb-2 text-muted"><span>id:</span>&nbsp ${article['id_str']}</h6>
                            <p class="card-text"> <span>Text:</span>&nbsp ${article['text']}</p>
                        </div>
                        

                        <div class=" card-footer align-self-center">
                            <p class="card-text"> <span>Timeframe:</span>&nbsp ${article['created_at']}</p>
                        </div>

                    </div>
                    
                </div>
            
        `;
    }
}