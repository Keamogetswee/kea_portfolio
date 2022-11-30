import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Fullpage, {FullpageSection, FullpageNavigation, FullPageSections} from "@ap.cx/react-fullpage";

export default function Home() {

    const AboutMeStyle = {
        height: '100vh',
        width: '100%',
        backgroundColor: 'pink',
        textAlign: 'center',
    }

    const ParagraphStyle = {
        paddingLeft : '10em',
        paddingRight: '10em'
    }
    const WhySovTechStyle = {
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        textAlign: 'center',
    }
    const ImageStyle = {
        borderRadius: '25em'
    }
    const PersonalProjectStyle = {
        backgroundColor: '#D3BBDD',
        height: '100vh',
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const TableDataStyle = {
        maxWidth: '3vw',
        padding: '2em'
    }

    const TableStyle = {
        width: '100vw'
    }

    return (
      <Fullpage>
          <FullpageNavigation/>
        <FullPageSections>
            <FullpageSection style={AboutMeStyle}>
                <h1> Keamogetswe Moseki</h1>
                <p>
                    <img src='/self.jpg' width={200} height={300} style={ImageStyle}/>
                </p>
                <h2>ABOUT</h2>
                <p style={ParagraphStyle}>I am an aspiring software developer passionate about problem-solving, and back-end development with a focus on development using the Java language. I am currently advancing my knowledge in programming at WeThinkCode_ using Python and Java as my programming languages.</p>
                <div>
                    <p>Check out my profile on</p>
                    <a href='https://www.linkedin.com/in/keamogetswemoseki/'>
                        <img src='/linkedin.svg' width={50} height={50}/>
                    </a>
                </div>

            </FullpageSection>
            <FullpageSection style={WhySovTechStyle}>
                <h1> Why Sovtech</h1>
                <img src='/grad.svg' width={200} height={200}/>
                <img src='/dev.svg' width={200} height={200}/>
                <p style={ParagraphStyle}>SovTech is the leading custom development company that designs and builds custom-made web, mobile and cloud software solutions and that is a passion of mine. I believe in developing good quality web and mobile apps. I am eager to learn, passionate about this industry and I believe that the skills and qualities I have aquired are a match for programme. I would love to be a part of a leading company in South Africa that designs and builds custom software that not only grows world-class businesses but has an impact in the 4IR. </p>
                <p>The company values of <em>#Smile</em>, <em>#Tech</em> and <em>#Results</em> resonate with me because I believe in working with people I like not only does it make the job fun but easier as well. Technology is our future. I believe in self-development so I plan on working hard to grow and bear fruits of my hard work into your company</p>
                <img src='/build.svg' width={200} height={200}/>

            </FullpageSection>
            <FullpageSection style={PersonalProjectStyle}>
                <h1> Personal Projects</h1>
                <table style={TableStyle}>
                    <tbody>
                    <tr>
                        <th>
                            <p>Personal Projects</p>
                        </th>
                        <th>
                            <p>Languages I&apos;ve worked With</p>
                        </th>
                    </tr>
                    <tr>
                        <td style={TableDataStyle}>
                            <p>To better and strengthen my skills I have worked on a few of my personal projects and can be accessed below:</p>
                            <a href="https://github.com/Keamogetswee">
                                <img src='/github.png' width={50} height={50} style={ImageStyle}/>

                            </a>

                        </td>
                        <td style={TableDataStyle}>
                            <p>The following are languages I am familiar with and have used in my programming journey. I am also advancing my skills in ReactJs and Web development using Html, CSS, and Javascript to better understand the different styles and strategies used to build quality web applications.</p>
                            <a href="https://docs.oracle.com/javase/7/docs/api/">
                                <img src='/java.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://docs.python.org/3/">
                                <img src='/python.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://dev.mysql.com/doc/">
                                <img src='/mysql.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://docs.flutter.dev/">
                                <img src='/flutter.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://reactjs.org/docs/getting-started.html">
                                <img src='/react.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                                <img src='/js.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                                <img src='/html.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://www.w3schools.com/cssref/index.php">
                                <img src='/css.svg' width={50} height={50} style={ImageStyle}/>

                            </a>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </FullpageSection>
        </FullPageSections>
      </Fullpage>
  )
}
