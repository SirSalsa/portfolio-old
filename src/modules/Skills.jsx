export default function Skills() {

    //Image links
    const java_url = new URL('../media/skills/java.png', import.meta.url);
    const html_url = new URL('../media/skills/html5.png', import.meta.url);
    const css_url = new URL('../media/skills/css.png', import.meta.url);
    const js_url = new URL('../media/skills/js.png', import.meta.url);
    const react_url = new URL('../media/skills/reactjs.png', import.meta.url);

    return (
        <>
            <div className="skills_header">
                <article>
                    <h1 id="skills_title">My Skills</h1>
                </article>
            </div>
            <div className="skills_wrapper">
                <article>
                    <img id="skills_img" src={java_url} alt="HTML Logo" />
                    <p id="skills_text">Java</p>
                </article>
                <article>
                    <img id="skills_img" src={html_url} alt="HTML Logo" />
                    <p id="skills_text">HTML</p>
                </article>
                <article>
                    <img id="skills_img" src={css_url} alt="HTML Logo" />
                    <p id="skills_text">CSS</p>
                </article>
                <article>
                    <img id="skills_img" src={js_url} alt="HTML Logo" />
                    <p id="skills_text">JavaScript</p>
                </article>
                <article>
                    <img id="skills_img" src={react_url} alt="HTML Logo" />
                    <p id="skills_text">React</p>
                </article>
            </div>
        </>
    )

}