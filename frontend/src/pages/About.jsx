import React from 'react';
import NavBar from '../components/NavBar.jsx';
import "../scss/About.scss";

function About() {
return (
    <>
        <div className='z-0 about-as-image w-100'>
            <div className='position-relative h-100 w-100'>
                <div className='position-absolute top-50 start-50 translate-middle display-1 text-white fw-normal'>
                About Me
                </div> 
            </div>
        </div>
        <div className="container pb-5 px-5 mx-auto w-75 fc-gray800 bg-gray900 min-vh-100 ">
            
            <p className='pt-5'>
                Hi, I'm David—an aspiring game developer driven by a love for programming with an enduring fascination for the artistic 
                depths of music and visuals within games.
            </p>
            <p>
                My journey started in a small village surrounded by an idyllic nature, located in north-central Germany. 
                At the age of 13 inspired by my cousin, my passion for programming began. I took on the challenge of mastering C++, 
                which I considered the most formidable language at this time. Soon, I recognized that game development resonated 
                profoundly with my enthusiasm. The way how art, music and coding blend into one masterpiece in so many countless  
                ways just keeps me endlessly fascinating.
                One year later in the 8th grade of shool my IT course started ans my teacher soon realized that I allready know how to program.
                So while the other kids where doomed to learn programming by absolving worksheets, I was allowed to craft my very first game during
                the IT lessons. In my freetime I cluelessly started programming more games and experimentally played around with different 
                technologies like DirectX. As my interest grew I stumbled on Unity and Unreal Engine where my project became increasingly ambitious. 
                It was during this period where I got excited for artistic aspect of game development. I dedicated a lot of time 
                mastering tools like Blender and Photoshop. This creative exploration not only broadened my understanding of aesthetics 
                but also ignited my fascination for games even more.
            </p>
            <p>
                Unfortunately, my focus naturally shifted after I enrolled in the Goethe University in Frankfurt to pursue IT studies. 
                Out of my need for a balance between mentally and physical work, sports gradually claimed a great part of my daily life 
                alongside my studies. While my pursuit for balance reduced my game development projects, my passion still remained.
                It turned out that my studies and concurrent work experiences allowed me to build a solid foundation in programming,
                enhancing my skills and knowledge in bigger scale.
            </p>
            <p>
                Coming toward the end of my study I plunge myself back into the game development topic by reading books, watching videos 
                and programming games once again. I am looking forward to start my career as a game programmer in the industry now 
                and try to prepare myself as good as possible for this upcoming step. 
            </p>
            <p>
                My friends describe me as a reserved person with a soothing demeanour, creating an atmosphere where others feel at ease.
                As an introvert, I value the space to work on my own; however, I am not one who enjoys working in solitude constantly. I am 
                someone who is looking forward to meet his colleagues and friends every morning. So home office is rather not what I am 
                looking for.
                As my interest is not in coding alone, I am very excited to work in
                a team of specialist of different fields. I am a curious person who is finding joy in exploring, learning and trying new stuff. 
                But I am still ambitious, able to focus on my goals and striving to achieve them.
                And Thats exactly what I am trying to do with this portfolio right now.
            </p>
            <p>
                Thank you for taking the time to learn about me and my passion for game development. I am open for any critique, offers or 
                conversations; feel free to contact me.
            </p>
            <br />

            <div className='h3 text-center pt-5'><span className='fc-gray800'>Favorite and inspiring Games</span></div>
            
            <div className='row fc-gray800 pt-5'>
                <div className='col-3 mh-100'>
                    <img src={'http://david-burgstaller.com/images/Gothic2.jpg'} alt="Clean Code" className="mw-100 container"/>
                </div>
                <div className='col-9 fc-gray800'>
                    <p>
                        <div className='h5 pb-2'><span className='fc-gray800'>Gothic 2</span></div>

                        My absolute favorite game even today is "Gothic 2". It inspired me the most for choosing my career path. The
                        astonishing livly atmoshpere and the feeling to immerse myself into another real world just keeps me fascinating till today.
                        Even these days I find myself playing this game again and again. The world still feels alive although the graphic tells 
                        something something else. 
                        This game just shows me over and over again that graphics are not the hearth of a great game. It tought me that great coding and 
                        storytelling can breathe life into a game.
                    </p>
                </div>
            </div>
            <hr className='hrStyle container'/>
            <div className='row fc-gray800 pt-5'>
                <div className='col-3 mh-100'>
                    <img src={'http://david-burgstaller.com/images/OriAndTheBlindForest.jpg'} alt="Clean Code" className="mw-100 container"/>
                </div>
                <div className='col-9 fc-gray800'>
                    <p>
                        <div className='h5 pb-2'><span className='fc-gray800'>Ori and the Blind forest</span></div>

                        Even though I just told that graphics is not the hearth of a game, "Ori and the Blind forest" proofed me somewhat otherwise.
                        This game inspired me for its beauty and keeps a slot as a art masterpiece in my head. The emotional storytelling in combination
                        of the creatively und beautifull crafted world just got some water in my eyes while playing it.
                    </p>
                </div>
            </div>
            <hr className='hrStyle container'/>
            <div className='row fc-gray800 pt-5'>
                <div className='col-3 mh-100'>
                    <img src={'http://david-burgstaller.com/images/Civilization.jpg'} alt="Clean Code" className="mw-100 container"/>
                </div>
                <div className='col-9 fc-gray800'>
                    <p>
                        <div className='h5 pb-2'><span className='fc-gray800'>Sid Meier's Civilization</span></div>

                        I cannot leave out this game because this is probably the game that I spent on the most time out of all other games.
                        I started the "Sid Meier's Civilization" series with the third part and played all of the following parts extensively. 
                        The complexity and scope of this game just feeds my love for deep strategic planing and thinking. To create one game of these
                        kind must be a dream for a programmer as me who likes the depths of mechanics. 
                        To this day, my brother and I find ourself starting or continuing a round of "hot seat" when we meet at our parents house.
                    </p>
                </div>
            </div>
        </div>
    </>
);
}

export default About;