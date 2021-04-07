import React from "react";
import { Helmet } from "react-helmet";
import { MainColumn } from "../../styles/generic/Containers";
import { Wrapper, TextWrapper } from "./style";

const exhibitionText = `1981 - 82 Art Scholarship attained.
Dalarnas Museum, contestant and first prize sculpture - contest winner
1982 – 93 Creation and Establishment of P. GronAB Art & Design Company, Sweden
1993 Wasa Gallery, Falun.
1994 Philadelphia: Roadrunner Record Company
1995 Kaos Gallery, Stockholm
1997 Ramhuset Falun.
1998 Gallery XXX North Hampton, England
1999 Gallery Banken, Falun
2000 July: S1, Borlänge
Aug: Ulna, Stockholm
Sept: Flamingo, Stockholm
Nov: SpyBar, Stockholm & MTV Awards VIP Lounge - Grand Hotel, Stockholm: Solo Exhibition
2001 Solo Exhibition, SpyBar, Stockholm
Feb: Guggenheim Museum Venice, Italy: Peter and his work are the subjects of an art lecture
Feb 22: Globen, Stockholm
Mar: Stockholm ArtFair collective exhibition together with Cristo, Arman, Rauschenberg
April: Flamingo, Stockholm - Lithographic print of Sven Tumba´s 70th birthday
July: Ramhuset, Falun: Solo Exhibition
2002 Feb: Artwork to the biathlon world champion, Magdalena Forsberg.
March: Lithographic print olympic champion Pernilla Wiberg - Ekerums konsthall , Öland
Sept: Holmer Gallery, Nässjö
2003 May: SEB Falun - Banverket, Borlänge
Sept: Nordic Sea, Stockholm
Oct: The Spy Bar, Stockholm
2004 April: Ramhuset, Falun
2004 Dec - Aug 2005: Salomon Arts Gallery New York
2005 Create an art piece for the new XBOX360
2006 Utsikten Conferences in Nynäshamn creating art for 21000m2
2007 Ramhuset, Falun
2008 Falun, Solo Exhibition
2009 Ramhuset, Falun
2011 Puro Hotel, Palma de Mallorca: Creating all the art.
2013 Palma Suites Hotel: Artwork, photography and book layout, design
2013 Puro Hotel, Palma de Mallorca
2014 Bendinat Group: Artwork, photography and layout for two books
2014 Bendinat Group: Artwork for the Bendinat Mar.
2014 Puro Hotel, Palma de Mallorca
2014-2020 Commissioned artwork and design for commercial and private properties in Mallorca`;

const Exhibitions = () => {
	return (
		<>
			<Helmet>
				<title>Peter Grondahl | Exhibitions</title>
				<meta name="description" content="Exhibitions and history of Peter Gröndahl." />
				<link rel="canonical" href="https://pgron.com/Exhibitions" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://pgron.com/Exhibitions" />
				<meta property="og:title" content="Peter Grondahl | Exhibitions" />
				<meta property="og:description" content="Peter Grondahl Exhibitions." />
			</Helmet>
			<MainColumn>
				<Wrapper>
					<h2 style={{ margin: "0px" }}>EXHIBITIONS</h2>
					<TextWrapper>
						{exhibitionText.split("\n").map((element) => {
							return <p key={element}>| {element}</p>;
						})}
					</TextWrapper>
				</Wrapper>
			</MainColumn>
		</>
	);
};

export default Exhibitions;
