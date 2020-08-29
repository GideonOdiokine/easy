import React from 'react';






function Details(){
    return(
        <main className="bg-blog">
            <article className="container">
                    <h2 className="branding">Latest Article</h2>
                <div className="blog">
                    <div className="details-top">
                        <img src="image-restaurant.jpg" alt="blog" />
                        <div className="blog-content">
                            <h3> by Joseph Michael Bassey</h3>
                            <p>Receive money in any currency with no fees The world is getting smaller and we’re becoming more mobile.</p>
                        </div>
                    </div>
                    <div className="details-top">
                        <img src="image-plane.jpg" alt="blog" />
                        <div className="blog-content">
                            <h3>by Gideon Odiokine</h3>
                            <p>Treat yourself without worrying about money Our simple budgeting feature allows you to separate out your spending and set realistic limits each month..</p>
                        </div>
                    </div>
                    <div className="details-top">
                        <img src="image-currency.jpg" alt="blog" />
                        <div className="blog-content">
                            <h3>by Kingsley Atanang</h3>
                            <p>Take your Easybank card wherever you go We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ….</p>
                        </div>
                    </div>
                    <div className="details-top">
                        <img src="image-confetti.jpg" alt="blog" />
                        <div className="blog-content">
                            <h3>by Nancy Asiuloka</h3>
                            <p>Our invite-only Beta accounts are now live! After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}







export default Details;