
export default function DataForm(){
    return(
        <div className="container  d-flex flex-column align-items-center justify-content-center ">
            <div className="row  w-50 text-center">
                <h2 className="greenLabel">LEVEL 1 - GET RECRUITED</h2>
                <span className='text-white'>We start quite simple. Please fill out 
                    the following form for your application. 
                    We will get in touch with you shortly for Level 2.
                </span>
            </div>
            <div className="row  w-50">
                <label class="form-label text-white" for="name">Name</label>
                <input type="text" className="form-control input" id="name" placeholder="Tony Stark" />
            </div>
            <div className="row  w-50">
                <label class="form-label text-white" for="email">E-mail</label>
                <input type="email" className="form-control input" id="email" placeholder="no@fake.plz" />
            </div>
            <div className="row  w-50">
                <label class="form-label text-white" for="portfolio">Portfolio URL</label>
                <input type="link" className="form-control input" id="portfolio" placeholder="Website, GIT-Repo, Dribble" />
                
            </div>
            <div className="row  w-50">
                <label class="form-label text-white" for="document">Document Upload</label>
                <input type="link" className="form-control input" id="document" placeholder="CVs, Portfolio" />
            </div>
            <div className="row  w-50 text-white">
                <span>By submitting the contact form, you agree 
                    that your data will be used to process your
                    request. For further information, please 
                    refer to our <a href="https://www.google.com">data protection policy.</a> 
                </span>
            </div>
            <div className="row  w-50 ">
                <div className='d-flex justify-content-end'>
                    <button class="btn submitBtn" type="button">Submit →</button>
                </div>
                
            </div>
        </div>
    )
}


