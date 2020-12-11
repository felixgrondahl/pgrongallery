import React from 'react';
// import Header from '../../components/Header/index';
import * as S from './style';
import { BaseContainer } from '../../styles/generic/Containers'; 
// import BackgroundImage from '../../assets/images/Home/man.png'; 
// import BubbleLeft from '../../assets/images/Home/leftBubble.png'; 
// import BubbleRight from '../../assets/images/Home/rightBubble.png'; 
// import InfoImage from '../../assets/images/Home/closedeyes-cut-new.png'; 
import BottomImage from '../../assets/images/Home/closedeyes-cut-new.png';

const Home = () => {
    return(
        <main>
            <S.HomeHeader>
                <h1 style={{animation: "FadeIn 5s"}}>PETER GRÖNDAHL</h1>
            </S.HomeHeader>
            
            <BaseContainer style={{position: 'relative', marginBottom: '30px', marginTop: '30px' }}>
            <div style={{position: 'relative'}}>
            <S.TextContainer style={{marginLeft: '-20%', width: '100%'}}>
                    <h2 style={{margin: "0px"}}>REAL ART</h2>
                    <p style={{width: "60%"}}>
                        Amet culpa eu excepteur pariatur occaecat ad excepteur est sit deserunt. Sint eiusmod nisi reprehenderit nostrud. Duis cupidatat commodo velit sint. Officia adipisicing dolor minim id veniam adipisicing tempor aute nisi aute sint tempor cupidatat. Eiusmod nulla consectetur incididunt aliquip enim nulla eu do laborum est anim. Aliqua officia id dolor voluptate ea ex irure voluptate culpa.
                        Amet officia eiusmod eu dolor consequat veniam consectetur ex pariatur sit Lorem ad. Commodo minim magna irure nostrud eiusmod eu. Laboris enim sint dolor ea.
                    </p>
                </S.TextContainer>

                <S.OverlayImg src={BottomImage}/>

                <S.TextContainer style={{marginLeft: '20%', width: '100%'}}>
                    <h2 style={{margin: "0px"}}>INNOVATION</h2>
                    <p style={{width: "60%"}}>
                        Ut incididunt sint qui do et consectetur amet reprehenderit ut aliquip anim culpa. Excepteur nisi reprehenderit Lorem ut exercitation. Est consequat duis qui fugiat amet. Eiusmod incididunt minim cupidatat culpa culpa esse. Incididunt Lorem mollit irure non qui velit adipisicing duis anim veniam occaecat. Officia quis voluptate irure laboris commodo velit Lorem voluptate magna laboris occaecat elit fugiat qui. Et amet culpa laborum occaecat adipisicing.
                        Cillum nisi est aute aute cillum exercitation pariatur. Ad officia sint nisi incididunt nostrud cillum. 
                    </p>
                </S.TextContainer>
            </div>

            </BaseContainer>
        </main>
    );
}

export default Home;