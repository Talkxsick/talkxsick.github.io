# talkxsick.github.io
<!DOCTYPE html>
<html>

<!--This is the head section; it is for storing metadata and
        items that are pulled in from other resources-->

<head>
    <title>Black Phoenix Photography</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital@1&family=Rock+Salt&display=swap" rel="stylesheet">
    <link href="./CSS/reset.css" rel="stylesheet" />
    <link href="./CSS/styles.css" rel="stylesheet" />
    <script src="./JS/main.js"></script>
</head>
<!--There is an id on the body so that the back to top button will go back to this body-->

<body id="body">
    <header>
        <div class="header-container">
            <div id="company-logo">
                <a href="./index.html">
                    <h1>Black Phoenix Photography</h1>
                </a>
            </div>
            <nav class="menu-wrapper">
                <ul id="main-menu">
                    <li class="menu-item">
                        <a href="#our-story">Our Story</a>
                    </li>
                    <li class="menu-item">
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li class="menu-item">
                        <a href="#Events">Events</a>
                    </li>
                    <li class="menu-item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <!--HERO IMAGE SECTION-->
    <div id="hero-image">
        <div class="overlay">
            <h2 class="tag-line">Capturing The Imagination</h2>
        </div>
    </div>
    <!--BACK TO TOP SECTION-->
    <a href="#body" id="topButton" title="Go To Top">Top</a>

    <!--OUR STORY SECTION-->
    <section id="our-story">
        <div class="container">
            <h3>Our Story</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit recusandae ab explicabo nisi natus reprehenderit voluptatum minus praesentium, quam at et culpa molestiae libero ipsum consequuntur nam voluptatem asperiores.Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Repudiandae odit recusandae ab explicabo nisi natus reprehenderit voluptatum minus praesentium, quam at et culpa molestiae libero ipsum consequuntur nam voluptatem asperiores.
            </p>
        </div>
    </section>
    <!--GALLERY SECTION-->
    <section id="gallery">
        <div class="container">
            <h3>Gallery</h3>
            <p class="gallery-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quia officiis quibusdam architecto, modi velit labore sapiente doloremque fugiat nulla dolore tempora voluptas totam, saepe adipisci vel? Magni, est porro!
            </p>
            <div id="gallery-wrapper">
                <div class="gallery-row">
                    <div class="gallery-item">
                        <div>
                            <img src="https://picsum.photos/id/491/300/200" alt="Gallery Item 1" />
                        </div>
                        <p>Image Title</p>
                    </div>
                    <div class="gallery-item">
                        <div>
                            <img src="https://picsum.photos/id/239/300/200" alt="Gallery Item 2" />
                        </div>
                        <p>Image Title</p>
                    </div>
                    <div class="gallery-item">
                        <div>
                            <img src="https://picsum.photos/id/443/300/200" alt="Gallery Item 3" />
                        </div>
                        <p>Image Title</p>
                    </div>
                </div>
                <div class="gallery-row">
                    <div class="gallery-item">
                        <div>
                            <img src="https://picsum.photos/id/299/300/200" alt="Gallery Item 4" />
                        </div>
                        <p>Image Title</p>
                    </div>
                    <div class="gallery-item">
                        <div>
                            <img src="https://picsum.photos/id/257/300/200" alt="Gallery Item 5" />
                        </div>
                        <p>Image Title</p>
                    </div>
                    <div class="gallery-item">
                        <div>
                            <img src="https://picsum.photos/id/56/300/200" alt="Gallery Item 6" />
                        </div>
                        <p>Image Title</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--EVENT SECTION-->
    <section id="Events">
        <div class="container">
            <h3>Upcoming Events</h3>
            <table id="upcoming-events-table">
                <th>
                    <tr>
                        <th>Date</th>
                        <th>Event</th>
                        <th>Location</th>
                        <th>Description</th>
                    </tr>
                </th>
                <tbody>
                    <tr>
                        <td>4/06/2022</td>
                        <td>Delhi Gallery</td>
                        <td>Delhi, NCR</td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quos saepe soluta! Quas sunt ipsum omnis, perferendis assumenda at asperiores quaerat nesciunt qui, voluptatem quo dolor ea nisi temporibus facere.
                        </td>
                    </tr>
                    <tr>
                        <td>07/03/2024</td>
                        <td>Japan Gallery</td>
                        <td>Japan, Tokyo</td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quos saepe soluta! Quas sunt ipsum omnis, perferendis assumenda at asperiores quaerat nesciunt qui, voluptatem quo dolor ea nisi temporibus facere.
                        </td>
                    </tr>
                    <tr>
                        <td>24/9/2021</td>
                        <td>Atlanta Gallery</td>
                        <td>Atlanta , GA</td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quos saepe soluta! Quas sunt ipsum omnis, perferendis assumenda at asperiores quaerat nesciunt qui, voluptatem quo dolor ea nisi temporibus facere.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    <!--CONTACT SECTION-->
    <section id="contact">
        <div class="container">
            <h3>Contact Us!</h3>
            <p>
                Please send any comments, questons or feedbacks with the form below
            </p>
            <form action="https://mailthis.to/priyanshm.0077@gmail.com" method="POST">
                <fieldset>
                    <input type="text" name="name" placeholder="Enter your name..." />
                    <input type="email" name="_replyto" placeholder="Enter your email..." />
                    <textarea name="message" placeholder="Enter your message..."></textarea>
                    <button>Send</button>
                    <input type="hidden" name="_confirmation" value="Your form has been submitted!" />
                </fieldset>
            </form>
        </div>
    </section>
    <!--FOOTER-->
    <footer>
        <div class="footer-container">
            <nav class="menu-wrapper">
                <ul id="footer-menu">
                    <li class="menu-item"><a href="#">Privacy Policy</a></li>
                    <li class="menu-item"><a href="#">Legal</a></li>
                    <li class="menu-item"><a href="#">Sponsor</a></li>
                </ul>
            </nav>
            <div id="copyright">
                <p> &copy; Copyright - Black Phoenix Photography - All rights reserved.</p>
            </div>
        </div>
    </footer>

</body>

</html>
