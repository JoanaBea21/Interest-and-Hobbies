import React from 'react';
import './App.css'; // Make sure to create this file for any additional styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS







const MyAlbum = () => {
    // Array of images and their corresponding descriptions
    const images = [
        { src: `${process.env.PUBLIC_URL}/images/Image1.jpg`, description: "I love cats!🐱" },
        { src: `${process.env.PUBLIC_URL}/images/Image2.jpg`, description: "Watching YouTube videos of people transforming old clothes into stylish new pieces. 👗✨" },
        { src: `${process.env.PUBLIC_URL}/images/Image3.jpg`, description: "Capturing the beauty of sunsets and beach moments. 📸🌅" },
        { src: `${process.env.PUBLIC_URL}/images/Image4.jpg`, description: "Diving into programming because I don't have a choice but to learn it 💻✨" },
        { src: `${process.env.PUBLIC_URL}/images/Image5.jpg`, description: "Flipping through Vogue magazines for the latest trends and inspiration. 📰✨" },
        { src: `${process.env.PUBLIC_URL}/images/Image6.jpg`, description: "Every shot brings me closer to my best game! 🏸✨" },
        { src: `${process.env.PUBLIC_URL}/images/Image7.jpg`, description: "Finding joy in every stitch as I crochet my way to creativity. 🌊🧶" },
        { src: `${process.env.PUBLIC_URL}/images/Image8.jpg`, description: "Music fuels my spirit, and Blue by Yung Kai is my go-to jam! 🎶💙" },
        { src: `${process.env.PUBLIC_URL}/images/Image9.jpg`, description: "My weekend? Just me and the beach🏖️" },
    ];

    return (
        <div>
            <header data-bs-theme="dark">
                <div className="collapse text-bg-success" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4>About</h4>
                                <p className="text-body-secondary">This album is composed of Joana Bea's hobbies and interests recently.</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4>Contact</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white">Follow on TikTok</a></li>
                                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                                    <li><a href="#" className="text-white">Email me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>Album</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1>My Album</h1>
                            <p className="lead text-body-secondary">♥Hey there! I’d love to share a little about my hobbies and interests, as they really shape who I am and bring a lot of joy to my life.♥</p>
                            <p>
                                <a href="#" className="btn btn-warning my-2">Main call to action</a>
                                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {images.map((image, index) => (
                                <div className="col" key={index}>
                                    <div className="card shadow-sm">
                                        <img src={image.src} alt={`Image ${index + 1}`} />
                                        <div className="card-body">
                                            <p className="card-text">{image.description}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    {/* You can add buttons here if needed */}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyAlbum;