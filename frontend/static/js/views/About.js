import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("About")
    }

    async getHtml(){
        return `
            <div class="container">
                <h1 class="mb-3">About me</h1>

                    <p> 
                        Hello I'm Jeff. A Full Stack Developper student based in Montreal. 
                    </p>

                    <p> 
                        From the moment I looked at the
                        The Coding Train column on the
                        YouTube platform and completed my
                        first Hello World on the console of my
                        web page, I was fascinated by the world of
                        web development.
                    </p>

                    <p> 
                        I started my coding journey almost exactly a year ago this may not sound like a lot of experience, but I am currently in the process of obtaining a degree in Web Design and Development.
                    </p>

                    <p> 
                        This is a huge milestone for me. Because I had no experience doing web development.

                    <p> 
                        Doing coding all day is great but it’s not all rainbows. 
                    </p>

                    <p>
                        It’s hard being the new person and It’s mentally exhausting on a whole new level.
                    </p>

                    <p>
                        I often don’t know what I’m doing and need to ask constant questions but the amount of satisfaction I get from seeing something I have built go live is amazing!
                    </p> 
            </div>     
        `
    }
}