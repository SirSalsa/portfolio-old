import { useState } from "react";

export default function Projects() {

    //Preview Image links
    const portfolio_small_url = new URL('../media/projects/portfolio/portfolio_small.png', import.meta.url);
    const webshop_small_url = new URL('../media/projects/webshop/webshop_small.png', import.meta.url);

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

    //Button Image links
    const github_url = new URL('../media/skills/github.png', import.meta.url);
    const opentab_url = new URL('../media/projects/opentab.png', import.meta.url);

    // Usestate for rendering overlay with image gallery
    const [projectstate, setProjectState] = useState("Default");

    return (
        <>
            <div className="projects_header">
                <h1>My Projects</h1>
            </div>
            <div className="projects_wrapper">
                <article className="left_project">
                    <img id="projects_img" src={portfolio_small_url} alt="Image of Portfolio project" />
                    <div>
                        <h2 id="projects_title">Portfolio Site</h2>
                        <p id="projects_desc">Olaolu is a frontend developer and UX engineer, and he has extensive experience as a developer. Olaolu’s portfolio is lively and colourful, which makes it stand out from others. The scrolling effect and the hamburger menu are super nice too.
                            The portfolio structure is good, highlighting who he is and the work experience he has as a developer.</p>
                        <div id="projects_skills">
                            <img src={js_url} alt="JS logo" />
                            <img src={react_url} alt="React JS logo" />
                            <img src={html_url} alt="HTML logo" />
                            <img src={css_url} alt="CSS logo" />
                            <img src={sass_url} alt="Sass logo" />
                        </div>
                        <form id="projects_buttons_wrapper" target="_blank">
                            <button id="projects_buttons" formAction="https://sirsalsa.github.io/JAVA21-AJS-slutprojekt-torsten-lareke/">
                                <p>View Live</p>
                                <img src={opentab_url} alt="New tab icon" />
                            </button>
                            <button id="projects_buttons" formAction="https://github.com/SirSalsa/portfolio-vite">
                                <p>View Repo</p>
                                <img src={github_url} alt="Github Logo" />
                            </button>
                        </form>
                    </div>
                </article>
                <article className="right_project">
                    <img id="projects_img" src={portfolio_small_url} alt="Image of Portfolio project" />
                    <div>
                        <h2 id="projects_title">Web Service Controller</h2>
                        <p id="projects_desc">Olaolu is a frontend developer and UX engineer, and he has extensive experience as a developer. Olaolu’s portfolio is lively and colourful, which makes it stand out from others. The scrolling effect and the hamburger menu are super nice too.
                            The portfolio structure is good, highlighting who he is and the work experience he has as a developer.</p>
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
                    <img id="projects_img" src={webshop_small_url} alt="Image of Webshop project" />
                    <div>
                        <h2 id="projects_title">Webshop</h2>
                        <p id="projects_desc">Olaolu is a frontend developer and UX engineer, and he has extensive experience as a developer. Olaolu’s portfolio is lively and colourful, which makes it stand out from others. The scrolling effect and the hamburger menu are super nice too.
                            The portfolio structure is good, highlighting who he is and the work experience he has as a developer.</p>
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
                    <img id="projects_img" src={webshop_small_url} alt="Image of Webshop project" />
                    <div>
                        <h2 id="projects_title">Film Database</h2>
                        <p id="projects_desc">Olaolu is a frontend developer and UX engineer, and he has extensive experience as a developer. Olaolu’s portfolio is lively and colourful, which makes it stand out from others. </p>
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