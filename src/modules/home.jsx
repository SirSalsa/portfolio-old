export default function Home({ updateNavState }) {

    //Image links
    const portait_url = new URL('../media/home/home_portrait.jpg', import.meta.url);

    //Icon links
    const project_url = new URL('../media/home/projects.png', import.meta.url);
    const about_url = new URL('../media/home/about.png', import.meta.url);
    const skills_url = new URL('../media/home/skills.png', import.meta.url);

    //Function for changing navstate when clicking any header link
    function swapTab({ target }) {
        updateNavState(target.innerText);
    }

    return (
        <>
            <div className="home_wrapper">
                <article>
                    <p id="home_hello">Hello There, I'm</p>
                    <h1 id="home_name">Torsten Lareke</h1>
                    <h4 id="home_jobtitle">Java Developer Student</h4>
                    <p id="home_desc">I'm a Java Developer Student with Javascript knowledge, located in Malmö, Sweden. </p>
                    <p id="home_desc">Looking for internship during Jan-May 2023.</p>
                </article>
                <article>
                    <img id="home_img" src={portait_url} alt="portrait of me" />
                </article>
            </div>
            <div>
                <form id="home_buttons_wrapper" target="_blank">
                    <button id="home_buttons" onClick={swapTab}>
                        <img src={project_url} alt="Projects Icon" />
                        <p>Projects</p>
                    </button>
                    <button id="home_buttons" onClick={swapTab}>
                        <img src={about_url} alt="About Icon" />
                        <p>About</p>
                    </button>
                    <button id="home_buttons" onClick={swapTab}>
                        <img src={skills_url} alt="Skills Icon" />
                        <p>Skills</p>
                    </button>
                </form>
            </div>

        </>

    )

}