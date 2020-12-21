import React from "react";
import * as S from "./style";
import { MainColumn } from "../../styles/generic/Containers";

const Home = () => {
	return (
		<MainColumn>
			<S.HomeHeader>
				<h1 style={{ animation: "FadeIn 5s" }}>PETER GRÖNDAHL</h1>
			</S.HomeHeader>

			<S.AboutContainer>
					<S.TextContainer left={true}>
						<h2 style={{ margin: "0px" }}>THE ARTIST</h2>
						<p>
							Peter Gröndahl is a remarkably talented and innovative artist
							presently working and residing in Palma de Mallorca. He arrived to
							the Mediterranean 2010 on invitation by the owners of the Puro
							Hotel to do its entire artwork. His varied pieces may be admired
							while enjoying an aperitif in the lobby of the Puro Hotel or
							contemplated upon with an after dinner liquor in its VIP halls.
							Peter’s scope as an artist is unparalleled. Not only does he excel
							in technique and delivery as a painter, Peter truly surpasses
							himself in his soulfully sketched larger than life charcoal
							portraits.{"\n"}
							{"\n"}
							Moreover he also charms us as a refined photographer producing
							works of an almost poetic appeal. His sculptures like his
							paintings are energetic filled with movement and executed with
							grace. As an Image Designer Gröndahl displays both flair and
							stylistic individualism, mixing in just the right touch of the
							enticingly subversive. He is by all means an all round artist,
							blessed with both skill and talent, his works a sheer pleasure to
							look upon. And once we come into contact with the range of his
							oeuvre, and become privy to the passion, dedication and fervour
							with which he follows his calling, he will no doubt become
							increasingly hard to ignore as a most significant figure in the
							international art world of today.
						</p>
					</S.TextContainer>
			</S.AboutContainer>
		</MainColumn>
	);
};

export default Home;
