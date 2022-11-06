import Zoom from 'react-medium-image-zoom'
import '../style/zoom_style.scss'

export default function Projects() {

    //Preview Image links
    const voice_to_news_url = new URL('../media/projects/voice_to_news/voice_to_news2.png', import.meta.url);
    const currency_converter_url = new URL('../media/projects/currency_converter/currency_converter.png', import.meta.url);
    const portfolio_small_url = new URL('../media/projects/portfolio/portfolio.png', import.meta.url);
    const webshop_url = new URL('../media/projects/webshop/webshop.png', import.meta.url);
    const java_webservice_url = new URL('../media/projects/java_webservice/java_webservice.png', import.meta.url);
    const moviedb_url = new URL('../media/projects/database/movie_db.png', import.meta.url);

    //Skill Image links
    const java_url = new URL('../media/skills/java_small.png', import.meta.url);
    const html_url = new URL('../media/skills/html5.png', import.meta.url);
    const css_url = new URL('../media/skills/css.png', import.meta.url);
    const js_url = new URL('../media/skills/js.png', import.meta.url);
    const react_url = new URL('../media/skills/reactjs.png', import.meta.url);
    const mysql_url = new URL('../media/skills/mysql_small.png', import.meta.url);
    const restful_url = new URL('../media/skills/api_rest.png', import.meta.url);
    const sass_url = new URL('../media/skills/sass.png', import.meta.url);
    const springboot_url = new URL('../media/skills/springboot.png', import.meta.url);
    const javafx_url = new URL('../media/skills/javafx.png', import.meta.url);
    const kotlin_url = new URL('../media/skills/kotlin.png', import.meta.url);
    const android_url = new URL('../media/skills/android_studio.png', import.meta.url);

    //Button Image links
    const github_url = new URL('../media/skills/github.png', import.meta.url);
    const opentab_url = new URL('../media/projects/opentab.png', import.meta.url);
    const donwload_url = new URL('../media/projects/download.png', import.meta.url);

    return (
        <>
            <div className="projects_header">
                <h1>My Projects</h1>
            </div>
            <div className="projects_wrapper">
            <article className="left_project">
                    <Zoom>
                        <img id="projects_img" src={voice_to_news_url} alt="Image of Voice-To-News App" />
                    </Zoom>
                    <div>
                        <h2 id="projects_title">Voice-To-News Android App</h2>
                        <p id="projects_desc">An Android app built in Android Studio and coded in Kotlin. The app allows the user to search for 
                        news articles with a recorded search term. The result is a scrollable window filled with articles.</p>
                        <div id="projects_skills">
                            <img src={kotlin_url} alt="Kotlin logo" />
                            <img src={android_url} alt="Android Studio logo" />
                        </div>
                        <form id="projects_buttons_wrapper" target="_blank">
                            <button id="projects_buttons" formAction="https://github.com/SirSalsa/java21_android/tree/main/Uppgifter/VoiceToNewsApp">
                                <p>View Repo</p>
                                <img src={github_url} alt="Github Logo" />
                            </button>
                            <button id="projects_buttons" formAction="https://drive.google.com/file/d/1yAi4x_WGrU75mq0cM1YpYfbitbs3G77S/view?usp=share_link">
                                <p>Get APK</p>
                                <img src={donwload_url} alt="Download icon" />
                            </button>
                        </form>
                    </div>
                </article>
            <article className="right_project">
                    <Zoom>
                        <img id="projects_img" src={currency_converter_url} alt="Image of Currency Coverter" />
                    </Zoom>
                    <div>
                        <h2 id="projects_title">Currency Coverter</h2>
                        <p id="projects_desc">A Java desktop program built in JavaFX that uses a currency conversion api. It offers two services,
                        the first is the currency converter, that checks how much an amount of a specific currency is worth compared to another. 
                        The other [Pictured], shows the historical value difference between two currencies.</p>
                        <div id="projects_skills">
                            <img src={java_url} alt="Java logo" />
                            <img src={javafx_url} alt="JavaFX logo" />
                            <img src={restful_url} alt="Restful API logo" />
                        </div>
                        <form id="projects_buttons_wrapper" target="_blank">
                            <button id="projects_buttons" formAction="https://github.com/SirSalsa/java21_AJ_CurrencyConverter">
                                <p>View Repo</p>
                                <img src={github_url} alt="Github Logo" />
                            </button>
                        </form>
                    </div>
                </article>
                <article className="left_project">
                    <Zoom>
                        <img id="projects_img" src={portfolio_small_url} alt="Image of Portfolio project" />
                    </Zoom>
                    <div>
                        <h2 id="projects_title">Portfolio Site</h2>
                        <p id="projects_desc">This very website! This website has been my summer project, and I have learned a lot building it. Built from the ground up with React JS to have mobile devices in mind. Experimented with new technologies such as Sass and Vite instead of CSS, and Parcel respectively.</p>
                        <div id="projects_skills">
                            <img src={js_url} alt="JS logo" />
                            <img src={react_url} alt="React JS logo" />
                            <img src={html_url} alt="HTML logo" />
                            <img src={css_url} alt="CSS logo" />
                            <img src={sass_url} alt="Sass logo" />
                        </div>
                        <form id="projects_buttons_wrapper" target="_blank">
                            <button id="projects_buttons" formAction="https://github.com/SirSalsa/portfolio-vite">
                                <p>View Repo</p>
                                <img src={github_url} alt="Github Logo" />
                            </button>
                        </form>
                    </div>
                </article>
                <article className="right_project">
                    <Zoom>
                        <img id="projects_img" src={java_webservice_url} alt="Image of Web Service Controller project" />
                    </Zoom>
                    <div>
                        <h2 id="projects_title">Web Service Controller</h2>
                        <p id="projects_desc">A Java Web Service application, that offers different services, built using Spring Boot and the RestFUL api. These services are; a calculator, a Rock, Paper, Scissors game, a CSV reader and an Image randomizer. Also included is a documentation page for guiding users.</p>
                        <div id="projects_skills">
                            <img src={java_url} alt="Java logo" />
                            <img src={springboot_url} alt="Springboot logo" />
                            <img src={restful_url} alt="Restful API logo" />
                        </div>
                        <form id="projects_buttons_wrapper" target="_blank">
                            <button id="projects_buttons" formAction="https://github.com/SirSalsa/torsten-jws-slutuppgift">
                                <p>View Repo</p>
                                <img src={github_url} alt="Github Logo" />
                            </button>
                        </form>
                    </div>
                </article>
                <article className="left_project">
                    <Zoom>
                        <img id="projects_img" src={webshop_url} alt="Image of Webshop project" />
                    </Zoom>
                    <div>
                        <h2 id="projects_title">Webshop</h2>
                        <p id="projects_desc">First project built with React JS, featuring a simple webshop with randomized price discounts when first loading the site. Customers can add items to cart and then checkout.</p>
                        <div id="projects_skills">
                            <img src={js_url} alt="JS logo" />
                            <img src={react_url} alt="React JS logo" />
                            <img src={html_url} alt="HTML logo" />
                            <img src={css_url} alt="CSS logo" />
                        </div>
                        <form id="projects_buttons_wrapper" target="_blank">
                            <button id="projects_buttons" formAction="https://sirsalsa.github.io/JAVA21-AJS-slutprojekt-torsten-lareke/">
                                <p>View Live</p>
                                <img src={opentab_url} alt="New tab icon" />
                            </button>
                            <button id="projects_buttons" formAction="https://github.com/SirSalsa/JAVA21-AJS-slutprojekt-torsten-lareke">
                                <p>View Repo</p>
                                <img src={github_url} alt="Github Logo" />
                            </button>
                        </form>
                    </div>
                </article>
                <article className="right_project">
                    <Zoom>
                        <img id="projects_img" src={moviedb_url} alt="Image of Movie Database project" />
                    </Zoom>
                    <div>
                        <h2 id="projects_title">Film Database Program</h2>
                        <p id="projects_desc">First part I built and designed a movie database using MySql. Features films, actors, directors, genres amongst other categories with mock data. Second part is a Java application that can call upon the database using a variety of methods.</p>
                        <div id="projects_skills">
                            <img src={java_url} alt="Java logo" />
                            <img src={mysql_url} alt="MySQL logo" />
                        </div>
                        <form id="projects_buttons_wrapper" target="_blank">
                            <button id="projects_buttons" formAction="https://github.com/SirSalsa/torsten_java21_movie_database_jdbc">
                                <p>View Repo</p>
                                <img src={github_url} alt="Github Logo" />
                            </button>
                        </form>
                    </div>
                </article>
            </div>
        </>
    )

}