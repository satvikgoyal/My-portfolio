import React from 'react'
import { UilGraduationCap } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'
import { UilPercentage } from '@iconscout/react-unicons'
import '../CSS/Qualification.css'
// frontend\portfolio\node_modules\@iconscout\react-unicons-thinline


const Qualification = () => {
    return (
        <div>
            <section id="Qualifications"className="qualification section">
                <h2 className="section_title">Qualification</h2>
                <span className="section_subtitle">My personal journey</span>

                <div className="qualifucation_container container">
                    <div className="qualification_tabs">
                        <div className="qualification_button button--flex">
                            <UilGraduationCap className="qualification_icon"/>
                            Eduaction
                        </div>
                    </div>
                    <div className="qualification_sections">
                        <div className="qualification_content">
                            <div className="qualification_data">
                                <div className="qualification_data_container">
                                    <h3 className="qualification_title">Computer Science And Engineering</h3>
                                    <span className="qualification_subtitle">Chitkara University</span>
                                    <div className="qualification_calendar">
                                        <UilCalendarAlt className="qualification_calendar_icon" size="1rem"/>
                                        <p>2019-2023</p>
                                    </div>
                                    <div className="qualification_percentage">
                                        <UilPercentage className="qualification_percentage_icon" size="1rem"/>
                                        <p>10 CGPA</p>
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>

                            <div className="qualification_data">
                                <div></div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>

                                <div className="qualification_data_container">
                                    <h3 className="qualification_title">12th</h3>
                                    <span className="qualification_subtitle">Moti Lal Nehru Public School</span>
                                    <div className="qualification_calendar">
                                        <UilCalendarAlt className="qualification_calendar_icon" size="1rem"/>
                                        <p>2018-2019</p>
                                    </div>
                                    <div className="qualification_percentage">
                                        <UilPercentage className="qualification_percentage_icon" size="1rem"/>
                                        <p>86.4%</p>
                                    </div>
                                </div> 
                            </div>

                            <div className="qualification_data">

                                <div className="qualification_data_container">
                                    <h3 className="qualification_title">10th</h3>
                                    <span className="qualification_subtitle">Moti Lal Nehru Public School</span>
                                    <div className="qualification_calendar">
                                        <UilCalendarAlt className="qualification_calendar_icon" size="1rem"/>
                                        <p>2016-2017</p>
                                    </div>
                                    <div className="qualification_percentage">
                                        <UilPercentage className="qualification_percentage_icon" size="1rem"/>
                                        <p>10 CGPA</p>
                                    </div>
                                </div> 

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Qualification
