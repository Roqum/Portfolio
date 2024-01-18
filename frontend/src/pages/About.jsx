import React from 'react';
import NavBar from '../components/NavBar.jsx';
import "../scss/About.scss";

function About() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("resize").style.height = "50vh";
        } else {
          document.getElementById("resize").style.height = "80vh";
        }
    }
return (
    <>
        <div id="resize" className='z-0 about-as-image w-100'>
            <div className='position-relative h-100 w-100'>
                <div className='position-absolute top-50 start-50 translate-middle display-1 text-white fw-normal'>
                About Me
                </div> 
            </div>
        </div>
        <div className="container pb-5 px-5 mx-auto fc-gray800 bg-gray900 min-vh-100 ">
            
            <p className='pt-5'>
            Hi, I'm David, a game developer driven by a love for programming with an enduring fascination for the artistic 
            depths of music and visuals within games.
            </p>
            <p>
            My journey started in a small village surrounded by an idyllic nature, located in north-central Germany. At the age of 13, 
            inspired by my cousin, my passion for programming began. I took on the challenge of mastering C++, which I considered the most 
            formidable language at that time. Soon, I recognized that game development resonated profoundly with my enthusiasm. The way art, 
            music and coding blend into one masterpiece in so many countless ways just keeps me endlessly fascinating.
            </p>
            <p>
            One year later, in the 8th grade of school, my IT course started and my teacher soon realized that I already knew how to program. 
            So, while the other kids 
            were doomed to learn programming by absolving worksheets, I was allowed to craft my very first astroids like game during the IT lessons.
            Immediately after that, as a team of four students, I created my second game, a classic bomberman game. In my free time, I plunged myself 
            into all aspects of game development. I learned to program with DirectX and created a pong game, used Blender to modell and sculpt 
            multiple assets, which I used to craft an entire world inside the Cryengine. Lastly, I explored all about the theory behind visual 
            esthetics and the practical usage of Photoshop to enhance the appeal of my self-drawn pictures and UI elements. And during all that time, 
            I played tons of games with my school friends.
            </p>

            <p>
            After my one volunteer year as a football coach in Thailand, I came back with a lot of life, team-building and cultural awareness 
            experience. I was ready to encounter a new challenge in my life and start my Computer Science studies at the university. I had to 
            move away from my hometown and family and start a new chapter alone in Frankfurt. Fortunately, I settled down very well and 
            Frankfurt felt like my home soon. 
            It turned out that my studies and concurrent work experiences allowed me to build a solid foundation in math and programming, 
            enhancing my skills and knowledge on a bigger scale. 
            I even decided to take some physics courses although many friends discouraged me from doing so because it was a way more 
            difficult path to take. But I was determined that the physics classes, especially in mechanics, would serve me better in my 
            future as a game programmer.
            </p>
            <p>
            In my work as a fullstack software developer I was given a lot of freedom to express myself. I was allowed to challenge myself 
            and took on tasks that I had never done before. In particular, my own implementation of a concurrent programming solution to 
            improve the efficiency of server calculations will serve me as valuable experience. <br></br>
            But with my finished bachelor's degree and some work experience as a software developer, I think it is now time to take a new step 
            and advance my dream as a programmer in the game industry.
            </p>
            <p>
            My friends describe me as a reserved person with a soothing demeanor, creating an atmosphere where others feel at ease. As an introvert, 
            I value the space to work on my own; however, I am not one who enjoys working in solitude constantly. I am someone who looks forward to 
            meet his colleagues and friends every morning. As my interest is not in coding alone, 
            I am very excited to work in a team of specialists from different fields. I am a curious person who is finding joy in exploring, learning 
            and trying new stuff. But I am still ambitious, able to focus on my goals and striving to achieve them. With my great willingness to learn 
            and deep interest in science, pushing the boundaries of technology thrives me. 
            I want to be able to enforce the creative freedom of my team by becoming a remarkable programmer. But I won't be able to achieve this alone.
            With a team and time for collecting experiences and knowledge I am sure I have the potential to become one of the best programmer.
            </p>
            <p>
            Thank you for taking the time to learn about me and my passion for game development. I am open for any critique, offers or 
            conversations; feel free to contact me 
            <a className='link-underline-opacity-0 link-light link-underline-opacity-75-hover' href= "/contact">here</a>.
            </p>
            <br />

            <div className='h3 text-center pt-5'><span className='fc-gray800'>Favorite and inspiring Games</span></div>
            
            <div className='row fc-gray800 pt-5 justify-content-center'>
                <div className='col-sm-3 col-9 mh-100 pb-4'>
                    <img src={'https://david-burgstaller.com/api/images/Gothic2.jpg'} alt="Clean Code" className="mw-100 container"/>
                </div>
                <div className='col-sm-9 col-12 fc-gray800 pb-4'>
                        <div className='h5 pb-2'><span className='fc-gray800'>Gothic 2</span></div>
                    <p>
                    My absolute favorite game even today is "Gothic 2". It inspired me the most for choosing my career path. 
                    The astonishing lively atmosphere and the feeling of immersing myself into another real world just keeps me 
                    fascinating till today. Even these days, I find myself playing this game again and again. The world still feels alive, 
                    although the graphic tells something else. This game just shows me over and over again that graphics are not the heart 
                    of a great game. It taught me that great coding and storytelling can breathe life into a game.
                    </p>
                </div>
            </div>
            <hr className='hrStyle mt-4 mb-3'/>
            <div className='row fc-gray800 pt-5 justify-content-center'>
                <div className='col-sm-3 col-9 mh-100 pb-4'>
                    <img src={'https://david-burgstaller.com/api/images/OriAndTheBlindForest.jpg'} alt="Clean Code" className="mw-100 container"/>
                </div>
                <div className='col-sm-9 col-12 fc-gray800 pb-4'>
                        <div className='h5 pb-2'><span className='fc-gray800'>Ori and the Blind forest</span></div>
                    <p>
                    Even though I just said that graphics are not the heart of a game, "Ori and the Blind forest" proved me somewhat otherwise. 
                    This game inspired me for its beauty and keeps a slot as an art masterpiece in my head. The emotional storytelling in 
                    combination of the creatively and beautifully crafted world just got some water in my eyes while playing it.
                    </p>
                </div>
            </div>
            <hr className='hrStyle mt-4 mb-3'/> 
            <div className='row fc-gray800 pt-5 justify-content-center'>
                <div className='col-sm-3 col-9 mh-100 pb-4'>
                    <img src={'https://david-burgstaller.com/api/images/Civilization.jpg'} alt="Clean Code" className="mw-100 container"/>
                </div>
                <div className='col-sm-9 col-12 fc-gray800 pb-4'>
                        <div className='h5 pb-2'><span className='fc-gray800'>Sid Meier's Civilization</span></div>
                    <p>
                    I cannot leave out this game because this is probably the game that I spent on the most time out of all other games. 
                    I started the "Sid Meier's Civilization" series with the third part and played all the following parts extensively. 
                    The complexity and scope of this game just feeds my love for deep strategic planning and thinking. To create a game of 
                    this kind must be a dream for a programmer like me, who likes the depth of mechanics. To this day, my brother and I find 
                    ourselves starting or continuing a round of "hot seat" when we meet at our parents' house.
                    </p>
                </div>
            </div>
        </div>
    </>
);
}

export default About;