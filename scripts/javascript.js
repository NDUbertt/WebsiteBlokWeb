/* General Styles */
body {
    margin: 0px;
    padding: 0px;
    font-family: 'Reader', sans-serif;
    text-decoration: none;
    color: #000000;
}

h2,
h3,
h4,
h5 {
    color: white;
    font-size: 15px;
    font-family: 'Reader', sans-serif;
    letter-spacing: 1px;
}

p {
    color: white;
    font-size: 15px;
    font-family: 'Reader', sans-serif;
    letter-spacing: 1px;
}

h1 {
    position: absolute;
    margin: -100000em;
}



/* Header */

body>header {
    position: sticky;
    width: 100%;
    z-index: 1000;
    top: 0;
    background-color: #ffffff;
}

strong {
    display: block;
    color: #343434;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background-color: #e6e6e6;
    padding: 5px 0;
    font-size: 13px;

}

/* Navigation */

nav ul {
    display: grid;
    grid-template-columns: 41.5% 1fr 10% 10%;
    list-style: none;
    padding-top: 1px;
    background-color: white;
    font-size: 12px;
    padding-bottom: 1em;
    z-index: 1;
}

a {
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-family: 'Reader', sans-serif;
    letter-spacing: 1px;
    text-decoration: underline;
}

.logo {
    width: 200px;
}


.svg {
    width: 2em;
    cursor: pointer;
}

nav ul:last-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul:last-of-type>li:first-of-type {
    display: none;
}

nav ul:last-of-type section a {
    color: black;
}

nav ul:last-of-type section:first-of-type {
    display: flex;
}

nav ul:last-of-type section:first-of-type li {
    margin-right: 2em;
}

nav ul:last-of-type section:first-of-type li a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    position: relative;
}

nav ul:last-of-type section:first-of-type li a:after {
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 0%;
    position: absolute;
    background: #000000;
    transition: 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}

nav ul:last-of-type section:first-of-type li a:hover::after {
    width: 100%;
    left: 0;
}


nav ul:last-of-type section:last-of-type {
    display: flex;
    padding-right: 3em;
}

nav ul:last-of-type section:last-of-type li {
    margin-left: 2em;
}

/* zoekbalk */
nav ul:last-of-type input {
    width: 250px;
    height: 40px;
    border: none;
    padding-left: 0.5em;
    color: black;
    border: 1px solid #e6e6e6;
    border-radius: 25px;
}

/* navigatie op mobiel */
@media (max-width: 900px) {
    nav ul:last-of-type section:last-of-type {
        display: flex;
        padding-right: 0em;
    }

    nav ul:last-of-type section:last-of-type li {
        margin-left: 0em;
        padding: 0;
    }

    nav ul:last-of-type li:first-of-type {
        display: block;
    }

    nav ul:last-of-type section:first-of-type {
        display: none;
    }

    nav ul:last-of-type input {
        display: none;
    }

    nav ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        background-color: white;
        top: 0;
        position: sticky;

    }

    nav ol {
        padding-inline-start: 0px;
    }

    nav a {
        color: #343434;
        list-style-type: none;
        text-decoration: none;
        font-weight: normal;
        font-size: 12px;
        font-family: 'Reader', sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    nav ul input {
        width: 200px;
        max-width: 600px;
        height: 40px;
        border: none;
        margin-bottom: 2em;
        padding-left: 0.5em;
        color: black;
        border: 1px solid #e6e6e6;
        border-radius: 25px;
    }

    nav ul section {
        margin: 1em;
    }

    nav ul section li {
        list-style: none;
        display: flex;
        padding-bottom: 1em;


    }

    nav ul section img {
        width: 1.5em;
        padding-right: 0.5em;
    }

    nav ul button {
        font-size: 15px;
        color: black;
        border: solid;
        border-color: black;
        border-width: 1px;
        background-color: transparent;
        font-size: 13px;
        cursor: pointer;
        text-transform: uppercase;

    }

    nav a:active {
        color: purple;
    }

    .toonHamburger nav ul:first-of-type {
        left: 0;
        opacity: 1;
    }

    nav>ul:nth-of-type(2)>li:first-of-type button {
        background-color: transparent;
        border: none;
    }

    nav>ul:nth-of-type(2) {
        padding: 0
    }

    /* filling pieces logo*/
    nav>ul:nth-of-type(2)>li:nth-of-type(2)>img {
        width: 80%;
        display: block;
        margin: auto;
    }
}

nav ul:first-of-type li button {
    background-color: black;
    padding: 1em;
    color: white;
    text-decoration: none;
    cursor: pointer;
}

nav ul:first-of-type {
    opacity: 0;
    box-shadow: 0px 0px 1px 5000px rgba(0, 0, 0, 0.8);
    left: -100%;
    position: fixed;
    flex-direction: column;
    height: 100vh;
    background-color: white;
    width: 70vw;
    margin: 0;
    top: 0;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2em;
    z-index: 100;
    transition: all 0.3s ease-out;
}

/*-----------------------------------------------------------------------*/
/* creaserunner (image) */
body.homepage main>section:first-of-type {
    overflow: hidden;
    height: 450px;
    background-image: url('../images/crease-runner1.jpg');
    background-position: center;

}

body main>section:first-of-type h2 {
    text-align: center;
    width: 100%;
    max-width: 400px;
    margin: 0px auto;
    padding: 15px;
    color: white;
    font-size: 30px;
    letter-spacing: 1px;
}

body.homepage main>section:first-of-type p {
    text-align: center;
    width: 100%;
    max-width: 400px;
    margin: 0px auto;
    margin-top: 100px;

}

body main>section:first-of-type button {
    border: solid;
    border-color: white;
    background-color: transparent;
    margin-left: auto;
    margin-right: auto;
    padding: 15px 50px;
    display: block;
    color: white;
    cursor: pointer;
}

body main>section:first-of-type button:hover {
    background-color: white;
    color: #CB7A5C;
    transition: 0.25s;
    transition: ease-in;
}



/* buttons (MEN and WOMEN) */
.btn {
    padding: 15px 20px;
    font-size: 15px;
    color: black;
    border: solid 3px;
    border-color: #737272;
    background: transparent;
    border-width: 1px;
    font-size: 13px;
    cursor: pointer;

}

.btn:hover {
    background-color: black;
    color: white;
    transition: 0.25s;
}

section.genderbuttons {
    display: flex;
    justify-content: center;
    margin-top: 1em;
}

.btn:first-of-type {
    margin-right: 10px;
}

/* Signature and innovation */

@media (min-width: 800px) {
    main>section:nth-of-type(3) {
        display: flex;
    }
}

main>section:nth-of-type(3) img {
    width: 100%;
    display: block;
}

main>section:nth-of-type(3) div {
    position: relative;
}

main>section:nth-of-type(3) header {
    position: absolute;
    bottom: 10%;
    left: 5%;

}

/* readytowear */

main>section:nth-of-type(4) {

    position: relative;
}

main>section:nth-of-type(4) img {
    width: 100%;
    height: 25em;
    object-fit: cover;
    position: relative;
}

main>section:nth-of-type(4) header {
    position: absolute;
    bottom: 10%;
    left: 5%;

}


/* collection */
main>section:nth-of-type(5) {

    position: relative;
}

main>section:nth-of-type(5) img {
    width: 100%;
    height: 25em;
    object-fit: cover;
    position: relative;
}

main>section:nth-of-type(5) header {
    position: absolute;
    bottom: 10%;
    left: 5%;

}

/* Footer */

footer {
    background: #E6E6E6;
}

footer a {
    color: #737272;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: block;
    cursor: pointer;
    border-bottom: 1px solid #fff;
    padding: 7px 20px;
    line-height: 2em;

}

footer section button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    color: #737272;
    font: 12px;
    text-transform: uppercase;
    padding-left: 1em;
    border-bottom: 2px solid #fff;
    padding: 0.5em;
    padding-left: 1.5em;
    padding-right: 1.2em;
}

footer button img {
    right: 2em;
    width: 1.5em;
}

footer p {
    font-family: 'Reader', sans-serif;
    font-size: 12px;
    color: #737272;
    line-height: 1.5em;
    padding: 1em;
}

footer form {
    display: flex;
    justify-content: center;
    padding-bottom: 1em;
    background-color: #E6E6E6;
}

footer form input {
    border-style: solid;
    color: black;
    padding: 0.5em;
}

footer form button {
    padding: 0.5em;
    font-size: 15px;
    color: white;
    border: solid;
    border-color: black;
    border-width: 1px;
    background-color: black;
    font-size: 13px;
    cursor: pointer;
    text-transform: uppercase;
}

footer ul {
    background: white;
    padding: none;
    max-height: 0;
    pointer-events: none;
    opacity: 0;
    transition: 0.5s linear;
}

.toonFooter+ul {
    opacity: 1;
    height: auto;
    max-height: 10000em;
    pointer-events: all;
}

footer ul {
    margin-block-end: 0;
    margin-block-start: 0;
    list-style: none;
    padding-inline-start: 0;
}

footer ul a {
    color: #737272;
    font: 12px;
    text-decoration: none;
    margin: auto;
    border-bottom: 1px solid #e6e6e6;
}

.productpagina footer p {
    font-family: 'Reader', sans-serif;
    font-size: 12px;
    color: #737272;
    line-height: 1.5em;
    padding-left: 1.5em;
    background: none;
}

footer section:first-of-type ul li img {
    width: 1.5em;
    justify-content: space-around;
    padding-left: 1em;
}

footer section:first-of-type ul:first-of-type {
    display: flex;
}

footer section:last-of-type ul a li img {
    width: 1.8em;
    justify-content: space-around;
    padding-left: 1em;
}

footer section:last-of-type ul a:last-of-type {
    display: flex;
    padding: 0.5em;
}


/* Signature Pagina 2 */

.productpagina p {
    font-family: "Reader", sans-serif;
    font-size: 12px;
    background: #fff;
    line-height: 1.5em;
    color: #343434;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 1em;

}

.productpagina h2 {
    font-family: "Reader", sans-serif;
    font-size: 30px;
    background: #fff;
    line-height: 1.5em;
    color: #343434;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    text-transform: uppercase;
    text-align: center;
}

/* afbeeldingen van schoenen */

.productpagina main {
    padding: 0 1.1em;
}

.productpagina main section {

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;

}


.productpagina main section article img {
    width: 100%;
}


.productpagina main section article h3 {
    color: #343434;
    font-size: 12px;
    font-family: "Reader", sans-serif;
    text-align: center;
    position: relative;

}

.productpagina main section article h3:after {
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 0%;
    position: absolute;
    background: #000000;
    transition: 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}

.productpagina main section article h3:hover::after {
    width: 100%;
    left: 0;
}



.productpagina main section article p {
    text-align: center;
    padding: 0;
}

/* afbeeldingen van schoenen op webversie */

@media (min-width: 800px) {
    .productpagina main section {
        grid-template-columns: repeat(4, 1fr);

    }
}



/* maten labels */

.productpagina section article ol {
    display: flex;
    justify-content: space-around;
    list-style: none;
    background: rgba(255, 255, 255, 0.6);
    padding: 1em 0;
    color: #343434;
    text-align: center;
    margin-top: -3em;
    opacity: 0;
    transition: 3s ease;

}

.productpagina section article ol:hover {
    opacity: 2;
}

.productpagina section article div {
    position: relative;
}

.productpagina section article div button {
    position: absolute;
    top: 0;
    right: 0em;
    padding: 0;
    border-style: none;
    margin: 0.5em;

}

.productpagina section article div button img {
    width: 2em;

}
