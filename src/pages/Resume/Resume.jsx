import React from 'react'
import { useContext, useRef, useState, useEffect } from 'react'
import '../Resume/Resume.css'
import cvContext from '../../context/cvContext'
import html2pdf from 'html2pdf.js'

export default function Resume({data}) {
    const resumeRef = useRef();
    const [localData, setLocalData] = useState({})
    const { formData } = useContext(cvContext);

    useEffect(() => {
        if (data) {
            setLocalData(data);
        } else {
            setLocalData(formData);
        }

    }, [data])
    const handleDownload = () => {
        const resumeElement = resumeRef.current;

        if (resumeElement) {
            const pdfOptions = {
                margin: 10,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            };

            html2pdf().from(resumeElement).set(pdfOptions).save();
        }
    };
    return (
        <div>
            <div ref={resumeRef}>
                <div className="container">
                    <div className="profile">
                        <header>
                            <img className="img" src="umages/pic2.jpg" alt="pic" />
                            <div className="det">
                                <h2 className="orange">{localData.fullName}</h2>
                                <h4>Lorem ipsum dolor sit.</h4>
                            </div>
                            <article className="left">
                                <div className="contact">
                                    <div className="col">
                                        <ul className="first">
                                            <li>phone</li>
                                            <li>adress</li>
                                            <li>email</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>{localData.phone}</li>
                                            <li>{localData.adress}</li>
                                            <li>{localData.email}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="about">
                                    <h1>ABOUT ME</h1>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, enim temporibus ad veritatis,
                                        commodi dolorum inventore illum id molestias ullam harum dignissimos blanditiis praesentium
                                        dolores illo amet quis asperiores at consequuntur sunt et omnis nostrum!</p>
                                </div>
                            </article>
                        </header>
                        <nav>
                            <div className="navi">
                                <i className="fa fa-facebook-official"></i>
                                /
                                <a href="#">PDSFreebies</a>
                            </div>
                            <div className="navi">
                                <i className="fa fa-envelope"></i>
                                /
                                <a href="#">PDSFreebies</a>
                            </div>
                            <div className="navi">
                                <i className="fa fa-envelope"></i>
                                /
                                <a href="#">PDSFreebies</a>
                            </div>
                            <div className="navi">
                                <i className="fa fa-envelope"></i>
                                /
                                <a href="#">PDSFreebies</a>
                            </div>
                            <div className="navi">
                                <i className="fa fa-envelope"></i>
                                /
                                <a href="#">PDSFreebies</a>
                            </div>
                        </nav>
                    </div>
                </div>
                <main className="container">
                    <div className="experience">
                        <h2>Experience</h2>
                        <div className="text">
                            <div className="header">
                                <h3>Senior</h3>
                                <h3>web developer</h3>
                                <p>{localData.from} - {localData.to}</p>
                            </div>
                            <article className="right">
                                <h4>workes in Lorem Ipsum -New York</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at quo ratione culpa neque nihil.
                                    Reprehenderit eveniet rerum aliquid et.</p>
                            </article>
                        </div>
                        <div className="text">
                            <div className="header">
                                <h3>Senior</h3>
                                <h3>web developer</h3>
                                <p>jan 2017-dec 2015</p>
                            </div>
                            <article className="right">
                                <h4>workes in Lorem Ipsum -New York</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptas debitis pariatur illum
                                    magnam, non totam, tempora inventore minus aspernatur repellendus dolorem perferendis cumque
                                    possimus.</p>
                            </article>
                        </div>
                        <div className="text">
                            <div className="header">
                                <h3>Senior</h3>
                                <h3>web developer</h3>
                                <p>jan 2017-dec 2015</p>
                            </div>
                            <article className="right">
                                <h4>workes in Lorem Ipsum -New York</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod nesciunt voluptatem corrupti
                                    vero cupiditate quos repellendus. Iure.</p>
                            </article>
                        </div>
                    </div>
                    <div className="skils">
                        <div className="box blue">
                            <h2>PRO SKILLS</h2>
                            <div className="row">
                                <ul>
                                    <li>photoshop</li>
                                    <li>illustrator</li>
                                    <li>javascript</li>
                                    <li>HTML/CSS</li>
                                </ul>
                                <ul>
                                    <progress value="80" max="100"></progress>
                                    <progress value="80" max="100"></progress>
                                    <progress value="80" max="100"></progress>
                                    <progress value="80" max="100"></progress>
                                </ul>
                            </div>
                        </div>
                        <div className="box yellow">
                            <h2>PRO SKILLS</h2>
                            <div className="row">
                                <ul>
                                    <li>photoshop</li>
                                    <li>illustrator</li>
                                    <li>javascript</li>
                                    <li>HTML/CSS</li>
                                </ul>
                                <ul>
                                    <progress value="80" max="100"></progress>
                                    <progress value="80" max="100"></progress>
                                    <progress value="80" max="100"></progress>
                                    <progress value="80" max="100"></progress>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
                <section className="education container">
                    <h2>Education</h2>
                    <article>
                        <div className="text">
                            <div className="header">
                                <h3>Senior</h3>
                                <h3>web developer</h3>
                                <p>jan 2017-dec 2015</p>
                            </div>
                            <article className="right">
                                <h4>workes in Lorem Ipsum -New York</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at quo ratione culpa neque
                                    nihil.
                                    Reprehenderit eveniet rerum aliquid et.</p>
                            </article>
                        </div>
                    </article>
                    <article>
                        <div className="text">
                            <div className="header">
                                <h3>Senior</h3>
                                <h3>web developer</h3>
                                <p>jan 2017-dec 2015</p>
                            </div>
                            <article className="right">
                                <h4>workes in Lorem Ipsum -New York</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at quo ratione culpa neque
                                    nihil.
                                    Reprehenderit eveniet rerum aliquid et.</p>
                            </article>
                        </div>
                    </article>
                </section>
                <footer className="container">
                    <div className="hobbies">
                        <h2>hobbies</h2>
                        <div className="icons">
                            <figure>
                                <i className="fa fa-camera"></i>
                                <figcaption>photography</figcaption>
                            </figure>
                            <figure>
                                <i className="fa fa-music"></i>
                                <figcaption>music</figcaption>
                            </figure>
                            <figure>
                                <i className="fa fa-baseball"></i>
                                <figcaption>football</figcaption>
                            </figure>
                            <figure>
                                <i className="fa fa-bicycle"></i>
                                <figcaption>cyclling</figcaption>
                            </figure>
                            <figure>
                                <i className="fa fa-book"></i>
                                <figcaption>reading</figcaption>
                            </figure>
                            <figure>
                                <i className="fa fa-gamepad"></i>
                                <figcaption>video game</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box gray">
                            <h2>PRO SKILLS</h2>
                            <div className="row">
                                <ul>
                                    <li>photoshop</li>
                                    <li>illustrator</li>
                                    <li>javascript</li>
                                    <li>HTML/CSS</li>
                                </ul>
                                <ul>
                                    <progress value="80" max="100"></progress>
                                    <progress value="80" max="100"></progress>
                                    <progress value="80" max="100"></progress>
                                    <progress value="80" max="100"></progress>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <button onClick={handleDownload}>Download as PDF</button>
        </div>

    )
}
