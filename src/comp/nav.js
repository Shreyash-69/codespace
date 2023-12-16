import React from 'react';

const Nav = () => {
  return (
    <header className="header">
    <a href="index.html" className="logo"><strong>CS<span>Notes</span></strong></a>
    <div className="menu-btn">
      <div className="menu-btn__lines" />
    </div>
    <ul className="menu-items">
      <li><a href="index.html" className="menu-item">Home</a></li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="menu-item expand-btn">Subject</a>
        <ul className="dropdown-menu expandable">
          <li className="dropdown dropdown-right">
            <a href="javascript:void(0)" className="menu-item expand-btn">
              Semester 1
            </a>
            <ul className="menu-right expandable">
              <li><a href="semester-1-cod.html" className="menu-item">Computer Organization and Design</a></li>
              <li><a href="semester-1-ppl-1.html" className="menu-item">Programming with Python- I</a></li>
              <li><a href="semester-1-foss.html" className="menu-item">Free and Open Source Software</a></li>
              <li><a href="semester-1-dbs.html" className="menu-item">Database Systems</a></li>
              <li><a href="semester-1-dm.html" className="menu-item">Discrete Mathematics</a></li>
              <li><a href="semester-1-dsip.html" className="menu-item">Descriptive Statistics and Introduction to Probability</a></li>
              <li><a href="semester-1-ssd.html" className="menu-item">Soft Skills Development</a></li>
            </ul>
          </li>
          <li className="dropdown dropdown-right">
            <a href="javascript:void(0)" className="menu-item expand-btn">
              Semester 2
            </a>
            <ul className="menu-right expandable">
              <li><a href="semester-2-cpl.html" className="menu-item">Programing with C</a></li>
              <li><a href="semester-2-ppl-2.html" className="menu-item">Programming with Python-II</a></li>
              <li><a href="semester-2-linux.html" className="menu-item">Linux</a></li>
              <li><a href="semester-2-ds.html" className="menu-item">Data Structure</a></li>
              <li><a href="semester-2-calculus.html" className="menu-item">Calculus</a></li>
              <li><a href="semester-2-smth.html" className="menu-item">Statistical Methods and Testing of Hypothesis</a></li>
              <li><a href="semester-2-gt.html" className="menu-item">Green Technologies</a></li>
            </ul>
          </li>
          <li className="dropdown dropdown-right">
            <a href="javascript:void(0)" className="menu-item expand-btn">
              Semester 3
            </a>
            <ul className="menu-right expandable">
              <li><a href="semester-3-toc.html" className="menu-item">Theory of Computation</a></li>
              <li><a href="semester-3-corejava.html" className="menu-item">Core JAVA</a></li>
              <li><a href="semester-3-os.html" className="menu-item">Operating System</a></li>
              <li><a href="semester-3-dbms.html" className="menu-item">Database Management Systems</a></li>
              <li><a href="semester-3-cgt.html" className="menu-item">Combinatorics and Graph Theory</a></li>
              <li><a href="semester-3-pciotp.html" className="menu-item">Physical Computing and IoT Programming</a></li>
              <li><a href="semester-3-webp.html" className="menu-item">Web Programming</a></li>
            </ul>
          </li>
          <li className="dropdown dropdown-right">
            <a href="javascript:void(0)" className="menu-item expand-btn">
              Semester 4
            </a>
            <ul className="menu-right expandable">
              <li><a href="semester-4-fa.html" className="menu-item">Fundamentals of Algorithms</a></li>
              <li><a href="semester-4-advancejava.html" className="menu-item">Advanced JAVA</a></li>
              <li><a href="semester-4-cn.html" className="menu-item">Computer Networks</a></li>
              <li><a href="semester-4-se.html" className="menu-item">Software Engineering </a></li>
              <li><a href="semester-4-lap.html" className="menu-item">Linear Algebra using Python</a></li>
              <li><a href="semester-4-net.html" className="menu-item">.NET Technologies</a></li>
              <li><a href="semester-4-ad.html" className="menu-item">Android Developer Fundamentals</a></li>
            </ul>
          </li>
          <li className="dropdown dropdown-right">
            <a href="javascript:void(0)" className="menu-item expand-btn">
              Semester 5
            </a>
            <ul className="menu-right expandable">
              <li><a href="semester-5-ai.html" className="menu-item">Artificial Intelligence</a></li>
              <li><a href="semester-5-lsa.html" className="menu-item">Linux Server Administration</a></li>
              <li><a href="semester-5-stqa.html" className="menu-item">Software Testing and Quality Assurance</a></li>
              <li><a href="semester-5-ins.html" className="menu-item">Information and Network Security</a></li>
              <li><a href="semester-5-archiot.html" className="menu-item">Architecting of IoT </a></li>
              <li><a href="semester-5-ws.html" className="menu-item">Web Services</a></li>
              <li><a href="semester-5-gp.html" className="menu-item">Game Programming </a></li>
            </ul>
          </li>
          <li className="dropdown dropdown-right">
            <a href="javascript:void(0)" className="menu-item expand-btn">
              semester 6
            </a>
            <ul className="menu-right expandable">
              <li><a href="semester-6-wsnmc.html" className="menu-item"> Wireless Sensor Networks and Mobile Communication</a></li>
              <li><a href="semester-6-cloud.html" className="menu-item"> Cloud Computing</a></li>
              <li><a href="semester-6-cf.html" className="menu-item"> Cyber Forensics</a></li>
              <li><a href="semester-6-ir.html" className="menu-item"> Information Retrieval</a></li>
              <li><a href="semester-6-dip.html" className="menu-item"> Digital Image Processing</a></li>
              <li><a href="semester-6-datascience.html" className="menu-item"> Data Science</a></li>
              <li><a href="semester-6-eh.html" className="menu-item"> Ethical Hacking</a></li>
            </ul>
          </li>
          {/*<li><a href="#" class="menu-item">more</a></li>*/}
        </ul>
      </li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="menu-item expand-btn">Other</a>
        <ul className="dropdown-menu expandable">
          <li><a href="other-software.html">Download</a></li>
          <li><a href="other-syllabus.html"> Syllabus</a></li>
          <li><a href="other-project.html">Projects</a></li>
          <li><a href="other-code-space.html">Code space</a></li>
          <li className="dropdown dropdown-right">
            <a href="javascript:void(0)" className="menu-item expand-btn">
              More
            </a>
            <ul className="menu-right expandable">
              <li><a href="other-updates.html">Updates</a></li>
              <li><a href="other-exam.html">Exam Shedule</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="index-about.html" className="menu-item">About</a></li>
      <li><a href="index-contact.html" className="menu-item">Contact</a></li>
      <li><a href="index-feedback.html" className="menu-item">Feedback</a></li>
    </ul>
  </header>
  );
};

export default Nav;
