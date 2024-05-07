import AttributesList from '../../components/AttributesList/AttributesList'
import styles from './AboutPage.module.scss'

export default function AboutPage(){
    return (
        <main className={styles.AboutPage}>
            <h1>About Me</h1>
            <img src='https://i.imgur.com/hWb88UB.jpeg'></img>
            <div>
                 <p>I've spent a majority of my life in higher education earning a Bachelor's, Master's, and PhD in Philosophy (although I double-majored in Economics as an undergraduate!). While I've ultimately decided to part ways with academia, I've learned a lot through my experiences that can be applied to, and benefit, the wonderful world of tech.</p>

                <p>My background in classical logic has helped me learn logic-based coding languages (like Javascript!) much easier and allows me to solve problems in creative and novel ways. My primary research area, which centered on the philosophy and epistemology of information transmission on social media, forced me to grabble with tough practical and ethical issues facing the digital world, including the ethics of data mining and profiling, digital "nudging," and the use of algorithms to determine content viewability.</p>

                <p>My teaching experience taught me organization, patience, clarity of explanation, interpersonal skills, and, most importantly, how to tackle unforeseen challenges with quick-thinking and decisive action. Finally, my familiarity with professional conference presentations has drastically improved my public speaking skills, confidence, and my ability to "read a room."</p>
                
                 <p>It's been a long journey to get to where I am, but I'm thrilled to be able to apply a unique set of skills to the software engineering landscape!</p>
            </div>
            
            
            <AttributesList></AttributesList>
        </main>
    )
}