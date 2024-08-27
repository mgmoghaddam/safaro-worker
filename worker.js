addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);   

    if (request.method === 'POST' && url.pathname === '/submit') {
        return handleFormSubmission(request);
    } else if (url.pathname.endsWith(".css")) {
        return serveCSS(request);
    } else {
        return serveHTML(request);
    }
}

async function handleFormSubmission(request) {
    const formData = await request.formData();
    const email = formData.get('email');
    const phone = formData.get('phone');

    if (email && phone) {
        // Store the form data in Workers KV
        await FORM_SUBMISSIONS.put(phone, email);

        // Return a JSON response indicating success
        return new Response(JSON.stringify({ success: true }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } else {
        return new Response(JSON.stringify({ success: false, error: 'Invalid form data' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 400
        });
    }
}

async function serveCSS(request) {
    try {
        const cssResponse = await fetch(request);
        if (!cssResponse.ok) {
            return new Response("CSS fetch failed", { status: 500 });
        }
        return new Response(cssResponse.body, {
            headers: { 'Content-Type': 'text/css' }
        });
    } catch (error) {
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
        <link rel="shortcut icon"
            href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/images/favicon.ico" type="image/png" />
        <!--====== Animate CSS ======-->
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/animate.min.css" />
        <!--====== Bootstrap css ======-->
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/bootstrap.min.css" />
        <!--====== Fontawesome css ======-->
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/font-awesome.min.css" />
        <!--====== OWl carousel ======-->
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/owl.carousel.min.css" />
        <!--====== Style css ======-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/style.css" />
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/mgmoghaddam/irsans@7191012112cbe94e6074d9a77514732d61f16b39/iran-sans.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/css/button.css">
    
        <style>
            body,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            a,
            span {
                font-family: 'IRANSans', sans-serif;
            }
            .toast {
                position: fixed;
                bottom: 1rem;
                right: 1rem;
                min-width: 200px;
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
                                <a href="#"><img
                                        src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/images/logo.png"
                                        alt="Anony"></a>
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
                                        <a href="https://www.instagram.com/safaroiranian" target="_blank"><i
                                                class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/safaro1" target="_blank"><i
                                                class="fab fa-telegram-plane"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 page-right-column">
                        <div class="page-right-top image"
                            style="background-image: url(https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/images/image-version-1.jpg);">
                        </div>
                        <div class="days-count">
                            <div class="count-content" id="dayscountdown" data-countdown="2024/10/27"></div>
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
            <div id="toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" style="display: none;">
                <div class="toast-body">
                    ثبت شد.
                </div>
            </div>
    
            <div class="modal fade" id="subscibeModal" role="dialog">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center position-relative">
                            <a href="#" class="close-modal position-absolute" data-dismiss="modal"
                                style="top: 10px; right: 10px;">
                                <i class="far fa-times"></i>
                            </a>
                            <span>ارتباط با ما</span>
                            <h2>به زودی با<br> خبرهای خوش برمیگردیم</h2>
                            <p>در خبرنامه ما مشترک بشید تا بعد از برگشت به شما اطلاع دهیم.</p>
                            <form id="subscriptionForm">
                                <div class="form-group">
                                    <input type="email" id="email" name="email" placeholder="نام و نام خانوادگی*"
                                        class="form-control mb-3" required>
                                </div>
                                <div class="form-group">
                                    <input type="tel" id="phone" name="phone" placeholder="شماره تلفن*"
                                        class="form-control mb-3" required>
                                </div>
                                <button type="submit" class="btn btn-black btn-block mt-3">ارسال</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <script>
            document.getElementById('subscriptionForm').addEventListener('submit', async function (e) {
                e.preventDefault(); // Prevent default form submission behavior
        
                const form = e.target;
                const formData = new FormData(form);
        
                // Make an AJAX request to the Worker
                const response = await fetch('/submit', {
                    method: 'POST',
                    body: formData
                });
        
                if (response.ok) {
                    // Show the toast notification
                    const toastElement = document.getElementById('toast');
                    toastElement.style.display = 'block';
                    const toast = new bootstrap.Toast(toastElement, {
                        autohide: true,
                        delay: 5000 // 5 seconds
                    });
                    toast.show();
        
                    // Close the modal after the toast is shown
                    setTimeout(() => {
                        $('#subscibeModal').modal('hide');
                    }, 1000); // 5 seconds delay before closing the modal
                } else {
                    alert('Failed to submit the form. Please try again.');
                }
            });
        </script>
           
    
        <!--====== jquery js ======-->
        <script
            src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/vendor/modernizr-3.6.0.min.js"></script>
        <script
            src="https://cdn.jsdelivr.net/gh/mgmoghaddam/safaro-worker@main/assets/js/vendor/jquery-1.12.4.min.js"></script>
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
