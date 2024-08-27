addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url);
    console.log("Request URL Pathname:", url.pathname);  // Log the pathname to verify it's what you expect
    if (url.pathname.endsWith(".css")) {
        return serveCSS(request);
    } else {
        return serveHTML(request);
    }
}


async function serveCSS(request) {
    console.log("Attempting to serve CSS for:", request.url);
    try {
        const cssResponse = await fetch(request);  // Ensure this fetches the CSS correctly
        if (!cssResponse.ok) {
            console.log("Failed to fetch CSS:", cssResponse.status);
            return new Response("CSS fetch failed", { status: 500 });
        }
        const cssBody = await cssResponse.text();
        console.log("CSS served for:", request.url);  // Confirm successful fetch and serve
        return new Response(cssBody, {
            headers: { 'Content-Type': 'text/css' }
        });
    } catch (error) {
        console.error("Error serving CSS:", error);
        return new Response("Error serving CSS", { status: 500 });
    }
}

async function serveHTML(request) {
    const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <!--====== Required meta tags ======-->
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <!--====== Title ======-->
    <title>سفرو در حال پرواز</title>
    <!--====== Favicon Icon ======-->
    <link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/images/favicon.ico" type="image/png" />
    <!--====== Animate CSS ======-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/animate.min.css" />
    <!--====== Bootstrap css ======-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/bootstrap.min.css" />
    <!--====== Fontawesome css ======-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/font-awesome.min.css" />
    <!--====== OWl carousel ======-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/owl.carousel.min.css" />
    <!--====== Style css ======-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mgmoghaddam/irsans@7191012112cbe94e6074d9a77514732d61f16b39/iran-sans.css">
    <link rel="stylesheet" href="assets/css/button.css">

    <style>
        body, h1, h2, h3, h4, h5, h6, p, a, span {
            font-family: 'IRANSans', sans-serif;
        }
    </style>
</head>

<body>
    <!--====== Preloader ======-->
    <div class="preloader d-flex align-items-center justify-content-center">
        <div class="cssload-container">
            <div class="cssload-loading">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
    </div>
    <div class="page-wrapper project-one image-version">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="page-left-content">
                        <div class="logo">
                            <a href="#"><img src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/images/logo.png" alt="Anony"></a>
                        </div>
                        <div class="title">
                            <span>وبسایت سفرو داره برمیگرده</span>
                            <h1>یکصد نفر مشاور تلفنی <br> 021-49976</h1>
                            <a href="#subscibeModal" class="main-btn" data-toggle="modal">به من اطلاع بده</a>
                        </div>
                        <div class="social-icon">
                            <ul>
                                <li class="title">با ما در ارتباط باشید :</li>
                                <li>
                                    <a href="https://www.instagram.com/safaroiranian" target="_blank"><i class="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://t.me/safaro1" target="_blank"><i class="fab fa-telegram-plane"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 page-right-column">
                    <div class="page-right-top image" style="background-image: url(https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/images/image-version-1.jpg);">
                    </div>
                    <div class="days-count">
                        <div class="count-content" id="dayscountdown" data-countdown="2024/9/30"></div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-9 col-md-8 custom">
                            <div class="page-right-content text-center">
                                <div class="title">
                                    <span>به دفتر جدید ما خوش آمدید</span>
                                    <h2>تماس با ما</h2>
                                </div>
                                <div class="contact-information d-sm-flex align-items-center justify-content-between">
                                    <div class=" location">
                                        <div class="info-title">
                                            <span><i class="fas fa-map-marker-alt"></i></span>
                                            <h4>آدرس</h4>
                                        </div>
                                        <p class="w-600">
                                            تهران <br>
                                            بلوار فردوس شرق ، بعد از عقیل ، پلاک 351 طبقه اول واحد دو </p>
                                    </div>
                                    <div class="contact">
                                        <div class="info-title">
                                            <span><i class="fas fa-user-circle"></i></span>
                                            <h4>تماس</h4>
                                        </div>
                                        <p class="w-600">
                                            02149976 <br>
                                            safaroagency@gmail.com </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--====== Modal ======-->
        <div class="modal fade" id="subscibeModal" role="dialog">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center position-relative">
                        <a href="#" class="close-modal position-absolute" data-dismiss="modal" style="top: 10px; right: 10px;"><i class="far fa-times"></i></a>
                        <span>ارتباط با ما</span>
                        <h2>به زودی با<br> خبرهای خوش برمیگردیم</h2>
                        <p>در خبرنامه ما مشترک بشید تا بعد از برگشت به شما اطلاع دهیم.</p>
                        <form action="/submit" method="post">
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="آدرس ایمیل*" class="form-control mb-3" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" id="phone" name="phone" placeholder="شماره تلفن*" class="form-control mb-3" required>
                            </div>
                            <button type="submit" class="btn btn-black btn-block mt-3">ارسال</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>        
    </div>
    <!--====== jquery js ======-->
    <script src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/vendor/jquery-1.12.4.min.js"></script>
    <!--====== Bootstrap js ======-->
    <script src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/popper.min.js"></script>
    <!--====== Countdown js ======-->
    <script src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/jquery.countdown.js"></script>
    <!--====== Owl Carousel js ======-->
    <script src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/owl.carousel.min.js"></script>
    <!--====== Particles js ======-->
    <script src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/particles.min.js"></script>
    <!--====== wow js ======-->
    <script src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/wow.min.js"></script>
    <!--====== Main js ======-->
    <script src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/main.js"></script>
    <script>
        new WOW().init();
    </script>
</body>

</html>`;

    return new Response(html, {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
        },
    })
}