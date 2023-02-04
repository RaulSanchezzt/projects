<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Error</title>
    <style>
        .error-content .primary-btn {
            background: var(--primary);
            color: var(--white);
            box-shadow: var(--shadow-2);
        }

        .error-content .active.primary-btn,
        .error-content .primary-btn:hover,
        .error-content .primary-btn:focus {
            background: var(--primary-dark);
            color: var(--white);
            box-shadow: var(--shadow-4);
        }

        .error-content .deactive.primary-btn {
            background: var(--gray-4);
            color: var(--dark-3);
            pointer-events: none;
        }

        .error-content {
            padding-top: 120px;
            padding-bottom: 120px;
        }

        .error-content .error-404 {
            font-size: 98px;
            font-weight: 600;
            color: var(--black);
            line-height: 90px;
        }

        .error-content .sub-title {
            font-size: 24px;
            font-weight: 700;
            color: var(--black);
            margin-top: 16px;
        }

        .error-content .text {
            font-size: 16px;
            line-height: 24px;
            color: var(--dark-3);
            margin-top: 8px;
        }

        .error-content .error-form {
            max-width: 410px;
            position: relative;
            margin: 0 auto;
            margin-top: 40px;
            position: relative;
        }

        .error-content .error-form i {
            position: absolute;
            top: 12px;
            left: 20px;
            font-size: 24px;
            color: var(--primary);
        }

        .error-content .error-form input {
            width: 100%;
            height: 46px;
            padding-left: 60px;
            padding-right: 30px;
            border-radius: 50px;
            border: 2px solid var(--gray-4);
            font-size: 16px;
            font-weight: 600;
            color: var(--dark-3);
        }

        .error-content .error-form input:focus {
            border-color: var(--primary);
        }

        .error-content .error-btn {
            position: absolute;
            top: 0;
            right: 0;
        }

        @media (max-width: 767px) {
            .error-content .error-btn {
                position: relative;
                width: 100%;
                margin-top: 8px;
            }
        }

        @media (max-width: 767px) {
            .error-content .primary-btn {
                width: 100%;
            }
        }
    </style>
</head>

<body>
    <section class="error-area error-one">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-7 col-xl-8 col-lg-8">
                    <div class="error-content text-center">
                        <span class="error-404">Error</span>
                        <h5 class="sub-title">Something went wrong :(</h5>
                        <p class="text">

                        </p>
                        <div class="col-lg-12 test-lett">
                            <a class="btn btn-lg btn-warning" href="/gallery/">Go back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>

</html>