import React, {useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Diary from './components/Diary'
import Credit from './components/Credit'
import Anime from 'react-anime'

export default function App() {
    useEffect(() => {
        document.title = '舔狗日记'
    }, [])

    return (
        <div>
            <div className="content">
                <Anime
                    delay={100}
                    translateY={-20}
                    duration={2000}
                >
                    <Header/>
                </Anime>

                <Anime
                    delay={100}
                    scale={[0, 1]}
                    duration={1500}
                >
                    <Diary/>
                </Anime>

                <Anime
                    delay={100}
                    translateY={20}
                    duration={2000}
                >
                    <Footer/>
                </Anime>

                <Credit/>
            </div>
            <div className="bg"/>
        </div>
    )
}


