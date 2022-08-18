export default function About() {

    //Image links
    const about_url = new URL('../media/about/about_me2.jpg', import.meta.url);

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
                        Rank tall boy man them over post now. Off into she bed long fat room. Recommend existence curiosity perfectly favourite get eat she why daughters. Not may too nay busy last song must sell. An newspaper assurance discourse ye certainly. Soon gone game and why many calm have.
                    </p>
                    <p id="about_text">
                        Arrived totally in as between private. Favour of so as on pretty though elinor direct. Reasonable estimating be alteration we themselves entreaties me of reasonably. Direct wished so be expect polite valley. Whose asked stand it sense no spoil to. Prudent you too his conduct feeling limited and. Side he lose paid as hope so face upon be. Goodness did suitable learning put.
                    </p>
                    <p id="about_text">
                        Out too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.
                    </p>
                </article>
            </div>
        </>
    )

}