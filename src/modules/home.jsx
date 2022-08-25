export default function Home({updateNavState}) {

    //Image links
    const hello_url = new URL('../media/home/hello.gif', import.meta.url);
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
                    <p id="home_desc">Looking for internship during Jan-June 2023.</p>
                </article>
                <article>
                    <img id="home_img" src={portait_url} alt="portrait of me" />
                </article>
            </div>
            <div className="home_links">
                <article>
                    <img src={project_url} width="30px" alt="" />
                    <p onClick={swapTab}>Projects</p>
                </article>
                <article>
                    <img src={about_url} width="30px" alt="" />
                    <p onClick={swapTab}>About</p>
                </article>
                <article>
                    <img src={skills_url} width="30px" alt="" />
                    <p onClick={swapTab}>Skills</p>
                </article>
            </div>

        </>

    )

}