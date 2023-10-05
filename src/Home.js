import React from 'react'
import abo from './image/about.jpg'
import whych from './image/whych.jpg'
import Viewcandidate from './Viewcandidate'
import NavBar from './NavBar'

function Home() {
  return (
    <div>
    <NavBar/>    
    <div>
    <main>
        <div class='group'>
        <section class="innner-group">
            <div class='content'>
                <h1 class='head'>Welcome! To our Man Power Organisation</h1>
           <a href="#ViewCan" class='btn btn-light' id='voc'> view our candidates</a>
            </div>
        </section>
        </div>
        <section id="about">
    <div class="container mt-3">
        <h2 class="text-dark text-center mt-5">About</h2>
        <div class="row mt-3">
            <div class="col-sm-12 col-md-4 col-lg-8 col-12">
        <p class='fst-italic lh-lg font-monospace fs-6 text-justify'>MPO is a Consulting firm specialized in recruitment's & HR practices. We provide manpower to organizations in all the possible vertical positions.We have the team of  best Talent Acquisition Consultant in Chennai who provides fast, quality and cost-effective, end-to-end manpower solutions for our clients.<br/>
MPO began in 2022 as Medisearch India to provide the best staff available to various segments of Businesses in India & abroad. Since then, it has grown into a highly successful executive and professional search firm. 
</p>
        <button href="#" class="btn btn-dark mx-5 mt-3 px-4 py-2 ">Read More</button>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4 col-12 px-6">
        <img src={abo} alt="loading" width="300px" class='about'/>
    </div>
    </div>
</div>
        </section>
        <section>
            <div class='why-choose'>
        <div class="container mt-5 py-3">
        <h2 class="text-light text-center mt-5">Why Choose Us?</h2>
        <div class="row mt-3">
        <div class="col-sm-12 col-md-4 col-lg-4 col-12 px-6">
        <img src={whych} alt="loading" width="350px" class='whych mt-4'/>
    </div>
            <div class="col-sm-12 col-md-4 col-lg-8 col-12">
        <p class='fst-italic lh-lg font-monospace fs-6 text-justify'>We are an employee-oriented organization, and we firmly believe in the principle of people before technology, which is why our greatest asset is our people. We have a highly talented team who are dedicated to delivering, flexible, efficient, reliable, Staffing Solutions while keeping in mind the client needs and requirements as well as the work culture of the organization. Our extensive database enables us to identify qualified applicants rapidly, accurately, and confidentially with less turnaround time.</p>
    </div>
    </div>
</div>
</div>
        </section>
        <section id='ViewCan'>
        <Viewcandidate/>
        </section>
        <footer>
            <div class=' bg-dark '>
                <p class='p-2 mt-2 footer text-light'>Copyright &copy; 2023</p>
            </div>

        </footer>
    </main>
</div></div>
  )
}

export default Home