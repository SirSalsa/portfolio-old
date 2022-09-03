export default function About() {

    //Image links
    const about_url = new URL('../media/about/about_me2.jpg', import.meta.url);

    //Icon links
    const cv_url = new URL('../media/about/cv.png', import.meta.url);
    const grades_url = new URL('../media/about/grades.png', import.meta.url);

    return (
        <>
            <div className="about_header">
                <article>
                    <h1 id="about_title">About Me</h1>
                </article>
            </div>
            <div className="about_wrapper">
                <article>
                    <img id="about_img" src={about_url} alt="Image of me" />
                </article>
                <article>
                    <p id="about_text">
                        I’m a Java Developer student that has also studied a bit of Javascript, located in Malmö, Sweden. I got interested in programming during my previous Game Design education when I had a scripting course with Lua. I found the problem solving and logical structure of working with code to be intriguing.
                    </p>
                    <p id="about_text">
                        During my time working in games, I got experience with many concepts and workflows used in the overall IT/Tech industry, such as working in Agile Software Development and SCRUM.

                    </p>
                    <p id="about_text">
                        The thing that really stood out as a surprise to me was that I really thrived working in a group setting. As a result of this experience, I would say I prefer working independently, in a group.
                    </p>
                    <p id="about_text">
                        As a person I am structured, determined and always interested in trying new things. Working in a team I trust and enjoy working with is more important to me than the work itself.
                    </p>
                </article>
            </div>
            <div className="about_buttons">
                <form id="about_buttons_wrapper" target="_blank">
                    <button id="about_button" formAction="https://drive.google.com/file/d/1VEOzceSZkoz_yEeUf6tMlqYiHCzj3SLH/view?usp=sharing">
                        <p>View Grades</p>
                        <img src={grades_url} alt="Grades icon" />
                    </button>
                    <button id="about_button" formAction="https://drive.google.com/file/d/1I4ZdMHb1E36C0r4HTdC3QmHlinP09ZeL/view?usp=sharing">
                        <p>View CV</p>
                        <img src={cv_url} alt="CV icon" />
                    </button>
                </form>
            </div>
        </>
    )
}