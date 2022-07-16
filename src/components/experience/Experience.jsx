import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="experience__container container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>SCSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Boostrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Reactjs</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Redux</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Graphic Design & Software</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>UI/UX Design</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Canva</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Figma</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Adobe XD</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Premiere Pro</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4> After Effects</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>whiteboard Animation</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>2D Animation</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
