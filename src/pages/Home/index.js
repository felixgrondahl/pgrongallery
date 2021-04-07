import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import { MainColumn } from "../../styles/generic/Containers";
import { Title } from "../../styles/generic/Title";
import gridImg1 from "../../assets/images/Home/1.jpg";
import gridImg2 from "../../assets/images/Home/2.jpg";

import gridImg5 from "../../assets/images/Home/5.jpg";
import gridImg6 from "../../assets/images/Home/6.jpg";

const Home = () => {
	const history = useHistory();

	return (
		<MainColumn>
			<S.Header>
				<Title>PETER GRÖNDAHL</Title>
			</S.Header>
			<S.AboutContainer>
				<S.TextContainer>
					<h2 style={{ margin: "0px" }}>THE ARTIST</h2>
					<p>
						Peter Gröndahl is a remarkably talented and innovative artist presently working and residing in Palma de
						Mallorca. He arrived to the Mediterranean 2010 on invitation by the owners of the Puro Hotel to do its
						entire artwork. His varied pieces may be admired while enjoying an aperitif in the lobby of the Puro Hotel
						or contemplated upon with an after dinner liquor in its VIP halls. Peter’s scope as an artist is
						unparalleled. Not only does he excel in technique and delivery as a painter, Peter truly surpasses himself
						in his soulfully sketched larger than life charcoal portraits.{"\n"}
						{"\n"}
						Moreover he also charms us as a refined photographer producing works of an almost poetic appeal. His
						sculptures like his paintings are energetic filled with movement and executed with grace. As an Image
						Designer Gröndahl displays both flair and stylistic individualism, mixing in just the right touch of the
						enticingly subversive. He is by all means an all round artist, blessed with both skill and talent, his works
						a sheer pleasure to look upon. And once we come into contact with the range of his oeuvre, and become privy
						to the passion, dedication and fervour with which he follows his calling, he will no doubt become
						increasingly hard to ignore as a most significant figure in the international art world of today.
					</p>
				</S.TextContainer>
				<S.ImageContainer />
			</S.AboutContainer>

			<S.PreviewWrapper top={"-350px"} onClick={() => history.push("/gallery")}>
				<S.GalleryPreview>
					<S.GridCell gridImage={gridImg1} />
					<S.GridCell gridImage={gridImg2} />
				</S.GalleryPreview>
				<Title>ENTER GALLERY</Title>
			</S.PreviewWrapper>

			<S.PreviewWrapper top={"-280px"} onClick={() => history.push("/commissions")}>
				<S.CommissionPreview>
					<S.GridCell gridImage={gridImg5} />
					<S.GridCell gridImage={gridImg6} />
				</S.CommissionPreview>
				<Title>COMMISSIONS</Title>
			</S.PreviewWrapper>
		</MainColumn>
	);
};

export default Home;
