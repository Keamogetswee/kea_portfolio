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
        // alignItems: 'center',
        backgroundColor: 'lightblue',
        textAlign: 'center',
    }
    const ImageStyle = {
        borderRadius: '25em'
    }
    const PersonalProjectStyle = {
        backgroundColor: 'violet',
        height: '100vh',
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const TableDataStyle = {
        maxWidth: '1vw'
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
                <p style={ParagraphStyle}>I am a software developer passionate about problem-solving, and back-end development with a focus on development using the Java language. I am currently advancing my knowledge in programming at WeThinkCode_ using Python and Java as my programming languages.</p>
                <p>
                    <p>Check out my profile on</p>
                    <a href='https://www.linkedin.com/in/keamogetswemoseki/'>
                        <img src='/linkedin.svg' width={50} height={50}/>

                    </a>
                </p>

            </FullpageSection>
            <FullpageSection style={WhySovTechStyle}>
                <h1> Why Sovtech</h1>
                <img src='/grad.svg' width={200} height={300}/>
                <img src='/dev.svg' width={200} height={300}/>
                <p style={ParagraphStyle}>SovTech is the leading custom development company that designs and builds custom-made web, mobile and cloud software solutions and that is a passion of mine. I believe in developing good quality web and mobile apps. </p>
                <p>The company values of <em>#Smile</em>, <em>#Tech</em> and <em>#Results</em> resonate with me because I believe in working with people I like not only does it make the job fun but easier as well. Technology is our future. I believe in self-development so I plan on working hard to grow and bear fruits of my hard work into your company</p>
                <img src='/build.svg' width={200} height={200}/>

            </FullpageSection>
            <FullpageSection style={PersonalProjectStyle}>
                <h1> Personal Projects</h1>
                <table style={TableStyle}>
                    <tr>
                        <th>
                            <p>Personal Projects</p>
                        </th>
                        <th>
                            <p>Languages I've worked With</p>
                        </th>
                    </tr>
                    <tr>
                        <td style={TableDataStyle}>
                            Project stuff
                            <p>THese are my projects blah blah blah</p>
                            <a href="https://www.google.com">
                                <img src='/github.png' width={50} height={50} style={ImageStyle}/>

                            </a>

                        </td>
                        <td>
                            Language thing
                            <p>THese are my languages blah blah blah</p>
                            <a href="https://www.google.com">
                                <img src='/java.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://www.google.com">
                                <img src='/python.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://www.google.com">
                                <img src='/mysql.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://www.google.com">
                                <img src='/flutter.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://www.google.com">
                                <img src='/react.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://www.google.com">
                                <img src='/js.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://www.google.com">
                                <img src='/html.svg' width={50} height={50} style={ImageStyle}/>

                            </a><a href="https://www.google.com">
                                <img src='/css.svg' width={50} height={50} style={ImageStyle}/>

                            </a>
                        </td>

                    </tr>
                </table>
            </FullpageSection>
        </FullPageSections>
      </Fullpage>
  )
}
