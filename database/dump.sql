--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: favorites; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.favorites (
    song_id integer NOT NULL,
    user_id integer NOT NULL,
    favorite_id integer NOT NULL
);


ALTER TABLE public.favorites OWNER TO dev;

--
-- Name: favorites_favorite_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.favorites_favorite_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_favorite_id_seq OWNER TO dev;

--
-- Name: favorites_favorite_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.favorites_favorite_id_seq OWNED BY public.favorites.favorite_id;


--
-- Name: genre; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.genre (
    genre character varying(255) NOT NULL,
    genre_id integer NOT NULL
);


ALTER TABLE public.genre OWNER TO dev;

--
-- Name: genre_genre_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.genre_genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.genre_genre_id_seq OWNER TO dev;

--
-- Name: genre_genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.genre_genre_id_seq OWNED BY public.genre.genre_id;


--
-- Name: providers; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.providers (
    provider_name character varying(255) NOT NULL,
    provider_id integer NOT NULL
);


ALTER TABLE public.providers OWNER TO dev;

--
-- Name: providers_provider_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.providers_provider_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.providers_provider_id_seq OWNER TO dev;

--
-- Name: providers_provider_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.providers_provider_id_seq OWNED BY public.providers.provider_id;


--
-- Name: songs; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.songs (
    title character varying(255) NOT NULL,
    url text NOT NULL,
    provider_id smallint NOT NULL,
    genre_id integer NOT NULL,
    user_id integer NOT NULL,
    song_id integer NOT NULL,
    video_id character varying(255) NOT NULL
);


ALTER TABLE public.songs OWNER TO dev;

--
-- Name: songs_song_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.songs_song_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.songs_song_id_seq OWNER TO dev;

--
-- Name: songs_song_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.songs_song_id_seq OWNED BY public.songs.song_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.users (
    username character varying(62) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    image text DEFAULT '/images/default-user-image.png'::text,
    user_id integer NOT NULL
);


ALTER TABLE public.users OWNER TO dev;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO dev;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: favorites favorite_id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.favorites ALTER COLUMN favorite_id SET DEFAULT nextval('public.favorites_favorite_id_seq'::regclass);


--
-- Name: genre genre_id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.genre ALTER COLUMN genre_id SET DEFAULT nextval('public.genre_genre_id_seq'::regclass);


--
-- Name: providers provider_id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.providers ALTER COLUMN provider_id SET DEFAULT nextval('public.providers_provider_id_seq'::regclass);


--
-- Name: songs song_id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.songs ALTER COLUMN song_id SET DEFAULT nextval('public.songs_song_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.favorites (song_id, user_id, favorite_id) FROM stdin;
70	37	13
129	37	14
79	37	15
20	37	16
80	37	17
75	37	18
72	37	19
98	37	20
85	37	21
93	1	22
98	1	23
94	1	24
88	1	25
85	1	26
90	1	27
84	1	28
101	1	29
100	1	30
91	1	31
96	1	32
87	1	33
2	26	35
\.


--
-- Data for Name: genre; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.genre (genre, genre_id) FROM stdin;
Alternative	1
Anime	2
Blues	3
Classical	4
Country	5
EDM	6
Hip Hop	7
J-Pop	8
Jazz	9
K-Pop	10
Latin	11
Pop	12
R&B	13
Reggae	14
Rock	15
Vocaloid	16
\.


--
-- Data for Name: providers; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.providers (provider_name, provider_id) FROM stdin;
youtube	1
spotify	2
\.


--
-- Data for Name: songs; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.songs (title, url, provider_id, genre_id, user_id, song_id, video_id) FROM stdin;
korou x powfu - a friend in you	https://www.youtube.com/watch?v=zlEfEKUUCIg	1	7	1	1	zlEfEKUUCIg
Scars on My Heart (feat. SadBoyProlific)	https://www.youtube.com/watch?v=73_KEAYcgIk	1	7	1	2	73_KEAYcgIk
VOCALOID2: Hatsune Miku - "Unfragment" [HD]	https://www.youtube.com/watch?v=y_g4zbwWG_I	1	2	1	3	y_g4zbwWG_I
【初音ミク - Hatsune Miku】Cold Leaf【Aerial Flow Original】【Romaji Subtitles】	https://www.youtube.com/watch?v=04udMvE7c_A	1	2	1	7	04udMvE7c_A
bae robins - your i love you... (ft. powfu)	https://www.youtube.com/watch?v=Td0JOW3VY_I&list=RDTd0JOW3VY_I&start_radio=1	1	2	1	9	Td0JOW3VY_I
Juice WRLD -  Lean Wit Me (Official Music Video)	https://www.youtube.com/watch?v=5SejM_hBvMM&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVM5SejM_hBvMM&start_radio=1	1	7	1	17	5SejM_hBvMM
Juice WRLD - All Girls Are The Same (Dir. by @_ColeBennett_)	https://www.youtube.com/watch?v=h3EJICKwITw&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVM5SejM_hBvMM&index=7	1	7	1	20	h3EJICKwITw
Juice WRLD - Empty (Official Audio)	https://www.youtube.com/watch?v=9LSyWM2CL-U&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVM5SejM_hBvMM&index=8	1	7	1	23	9LSyWM2CL-U
Post Malone - Circles	https://www.youtube.com/watch?v=wXhTHyIgQ_U&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMmt2zvsvkKKo&index=17	1	7	28	67	wXhTHyIgQ_U
Money Trees	https://www.youtube.com/watch?v=bBNpSXAYteM&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMmt2zvsvkKKo&index=18	1	7	28	69	bBNpSXAYteM
Migos - Slippery feat. Gucci Mane [Official Video]	https://www.youtube.com/watch?v=Hm1YFszJWbQ&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMmt2zvsvkKKo&index=19	1	7	28	70	Hm1YFszJWbQ
21 Savage - a lot ft. J. Cole	https://www.youtube.com/watch?v=DmWWqogr_r8&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMmt2zvsvkKKo&index=20	1	7	28	71	DmWWqogr_r8
Nirvana - Smells Like Teen Spirit (Official Music Video)	https://www.youtube.com/watch?v=hTWKbfoikeg&list=RDGMEMBhrNM15bN0pM50WECpic-A&start_radio=1	1	1	28	72	hTWKbfoikeg
The Cranberries - Dreams (Official Music Video)	https://www.youtube.com/watch?v=Yam5uK6e-bQ&list=RDGMEMBhrNM15bN0pM50WECpic-A&index=2	1	1	28	73	Yam5uK6e-bQ
Green Day - When I Come Around [Official Music Video]	https://www.youtube.com/watch?v=i8dh9gDzmz8&list=RDGMEMBhrNM15bN0pM50WECpic-A&index=3	1	1	28	75	i8dh9gDzmz8
Muse - Madness	https://www.youtube.com/watch?v=Ek0SgwWmF9w&list=RDGMEMBhrNM15bN0pM50WECpic-A&index=4	1	1	28	76	Ek0SgwWmF9w
Handle This	https://open.spotify.com/track/6go2MAMfjSpflgbEC8SMYJ?si=q-Gs6jEcRGaZ0PGsZ9hN0Q	2	1	28	77	spotify:track:6go2MAMfjSpflgbEC8SMYJ
Kryptonite	https://open.spotify.com/track/6ZOBP3NvffbU4SZcrnt1k6?si=2Zcek_gvSyqgPvEyNpkjJw	2	1	28	79	spotify:track:6ZOBP3NvffbU4SZcrnt1k6
Bad Luck	https://open.spotify.com/track/6Y19VBGJBoixg6umIkE7ar?si=fr2CDMfERqqUCypk0Y_rxQ	2	1	28	80	spotify:track:6Y19VBGJBoixg6umIkE7ar
Sugar, We're Goin Down	https://open.spotify.com/track/2TfSHkHiFO4gRztVIkggkE?si=zlF49Y2XSCGUpWwcAuI_yA	2	1	28	81	spotify:track:2TfSHkHiFO4gRztVIkggkE
TWO DOOR CINEMA CLUB  | WHAT YOU KNOW	https://www.youtube.com/watch?v=YXwYJyrKK5A	1	12	28	82	YXwYJyrKK5A
Denzel Curry - RICKY	https://www.youtube.com/watch?v=3WHm6tfvKlk	1	7	26	83	3WHm6tfvKlk
Haikyu!! - Opening 4 | Fly High!!	https://www.youtube.com/watch?v=7aNg8cV65Os	1	2	26	84	7aNg8cV65Os
KONOSUBA -God's blessing on this wonderful world! 2 - Ending | Ouchi ni Kaeritai	https://www.youtube.com/watch?v=AubeXRKtU8U	1	2	26	85	AubeXRKtU8U
Chobits Opening full	https://www.youtube.com/watch?v=0mS1zPM9dhc	1	2	26	87	0mS1zPM9dhc
KANA-BOON - Spiral (FULL)	https://www.youtube.com/watch?v=nMxoOo0cuOM	1	2	26	88	nMxoOo0cuOM
Yuru Camp△ OP Full「SHINY DAYS」by Asaka	https://www.youtube.com/watch?v=S4F4WXK-w8I	1	2	26	90	S4F4WXK-w8I
SPYAIR - I'm a Believer	https://www.youtube.com/watch?v=ZW7Ykl3QljQ	1	2	26	91	ZW7Ykl3QljQ
前前前世 - original ver.	https://open.spotify.com/track/34n8CbHKeZm5IDxvllVawX	2	2	26	93	spotify:track:34n8CbHKeZm5IDxvllVawX
Sign	https://open.spotify.com/track/1hi0P1Y2he1p09xnUccuAN?si=WyhOUovGT-2nfs5J_JHTIA	2	2	26	94	spotify:track:1hi0P1Y2he1p09xnUccuAN
Guren No Yumiya	https://open.spotify.com/track/0b7b3OR4cKHo08rdpLHofM	2	2	26	96	spotify:track:0b7b3OR4cKHo08rdpLHofM
Wataridori	https://open.spotify.com/track/0LhO8Td0kFQyILmNmlvUBc?si=vWOqyV5eTYOW_BicU8oVWg	2	2	26	98	spotify:track:0LhO8Td0kFQyILmNmlvUBc
Brave Shine	https://open.spotify.com/track/4PR27vtUZsoiaUlQ6NNYyW?si=i0bzKp9HTrys1dUaXmC9-w	2	2	26	100	spotify:track:4PR27vtUZsoiaUlQ6NNYyW
Catch the Moment	https://open.spotify.com/track/4Bw5inMgxG9gAY2sCcw79n?si=GALmqiTzT8qSKJO-xG9ECw	2	2	26	101	spotify:track:4Bw5inMgxG9gAY2sCcw79n
Bad News Is Coming	https://open.spotify.com/track/1TRIYxcVJYPki5AX2hZzZT?si=6vk_6jXJQxeaHK85jeNDwQ	2	3	27	103	spotify:track:1TRIYxcVJYPki5AX2hZzZT
Chains And Things	https://open.spotify.com/track/5x7Oxaa9EEIx9nw17CC5yW?si=-bd73KXQSfuazbGliX_wBg	2	3	27	104	spotify:track:5x7Oxaa9EEIx9nw17CC5yW
Now That I'm Down	https://open.spotify.com/track/6eIJfQX1WPU2iOFe1x605S	2	3	27	105	spotify:track:6eIJfQX1WPU2iOFe1x605S
Short Dressed Woman	https://open.spotify.com/track/6tilCYbheGMHo3Hw4F22hF?si=wTC7pxOCSnSFlQAIV1-zeg	2	3	27	107	spotify:track:6tilCYbheGMHo3Hw4F22hF
Part Time Love	https://open.spotify.com/track/7p5Xpx7dd9wSPJF4Q4Nfbu?si=0Wmwm7jZTWmRplF-HWmr0g	2	3	30	108	spotify:track:7p5Xpx7dd9wSPJF4Q4Nfbu
Bad News Is Coming	https://open.spotify.com/track/1TRIYxcVJYPki5AX2hZzZT?si=Y4zVetaaT6WqjQItcMaASA	2	3	30	109	spotify:track:1TRIYxcVJYPki5AX2hZzZT
Chains And Things	https://open.spotify.com/track/5x7Oxaa9EEIx9nw17CC5yW?si=_sALlogAQtCArnSCgzP6lg	2	3	30	110	spotify:track:5x7Oxaa9EEIx9nw17CC5yW
Now That I'm Down	https://open.spotify.com/track/6eIJfQX1WPU2iOFe1x605S	2	3	30	111	spotify:track:6eIJfQX1WPU2iOFe1x605S
Stone Crazy	https://open.spotify.com/track/3FVpPBl3Jbd5TRLUFZamO9?si=O507sXwJSDOSXkzoZEURTA	2	3	30	112	spotify:track:3FVpPBl3Jbd5TRLUFZamO9
Cold, Cold Feeling	https://open.spotify.com/track/7sheAObhEOIqDY8YFu3HJf	2	3	30	113	spotify:track:7sheAObhEOIqDY8YFu3HJf
Chris Stapleton - Tennessee Whiskey (Audio)	https://www.youtube.com/watch?v=4zAThXFOy2c&list=PLjzeyhEA84sQKuXp-rpM1dFuL2aQM_a3S	1	3	30	114	4zAThXFOy2c
Gary B.B. Coleman - The Sky is Crying	https://www.youtube.com/watch?v=71Gt46aX9Z4&list=PLjzeyhEA84sQKuXp-rpM1dFuL2aQM_a3S&index=2	1	3	30	115	71Gt46aX9Z4
Alannah Myles - Black Velvet (Official Video)	https://www.youtube.com/watch?v=tT4d1LQy4es&list=PLjzeyhEA84sQKuXp-rpM1dFuL2aQM_a3S&index=3	1	3	30	116	tT4d1LQy4es
Nina Simone  Feeling Good	https://www.youtube.com/watch?v=D5Y11hwjMNs&list=PLjzeyhEA84sQKuXp-rpM1dFuL2aQM_a3S&index=4	1	3	30	117	D5Y11hwjMNs
Moonlight Sonata 3rd Movement	https://open.spotify.com/track/6JlK4T57sOrLGgur7sfVIu?si=HnBkpwk8T36V4p2bSIcahw	2	4	31	118	spotify:track:6JlK4T57sOrLGgur7sfVIu
Sonata No. 9 in A Major for Violin and Piano, Op. 47, "Kreutzer Sonata": I. Adagio sostenuto - Presto	https://open.spotify.com/track/4UpSi6Fg7kIJgO73kcTbBB	2	4	31	119	spotify:track:4UpSi6Fg7kIJgO73kcTbBB
Introduction and Rondo capriccioso in A minor, Op. 28	https://open.spotify.com/track/3leTyhTguxLryLUoRaxQ19?si=cDasiRwiT06L-0OmjZg88wv	2	4	31	120	spotify:track:3leTyhTguxLryLUoRaxQ19
12 Etudes, Op. 10: Etude No. 4 in C-Sharp Minor, Op. 10, No. 4	https://open.spotify.com/track/7JA2TSkGHpBpEIUaf7liXl?si=WSU3v08QQc210RNlPsJUJg	2	4	31	121	spotify:track:7JA2TSkGHpBpEIUaf7liXl
12 Etudes, Op. 25: Etude No. 23 in A Minor, Op. 25, No. 11, "Winter Wind"	https://open.spotify.com/track/5F0sYwEmc7ubQv3nMH1cRo?si=ImQRD8_ZRWyMYQloDPp43Q	2	4	31	123	spotify:track:5F0sYwEmc7ubQv3nMH1cRo
Alt-Wiener Tanzweisen (Old Viennese Melodies): II. Liebesleid (Love's Sorrow)	https://open.spotify.com/track/1zjQtvIDYcA9920amNO5G2	2	4	31	124	spotify:track:1zjQtvIDYcA9920amNO5G2
Liebesleid (Love's Sorrow)	https://open.spotify.com/track/38EmZT3oWA6lJE0o4ajfG8?si=UC_LKIdlRJq7FZPm0fyq0A	2	4	31	125	spotify:track:38EmZT3oWA6lJE0o4ajfG8
Haendel - Sarabande	https://www.youtube.com/watch?v=klPZIGQcrHA&list=PL4FJJw7rbiIJkALPq6SY0_s1i2fE3NMYU	1	4	31	126	klPZIGQcrHA
Pachelbel's Canon	https://www.youtube.com/watch?v=stCKjZniMsQ&list=PL4FJJw7rbiIJkALPq6SY0_s1i2fE3NMYU&index=2	1	4	31	127	stCKjZniMsQ
Vivaldi: Concerto for 4 Violins in B minor RV 580	https://www.youtube.com/watch?v=SY3Kxf7ZTeI&list=PL4FJJw7rbiIJkALPq6SY0_s1i2fE3NMYU&index=3	1	4	31	129	SY3Kxf7ZTeI
Antonio Vivaldi - The Four Seasons| Антонио Вивальди - Времена года	https://www.youtube.com/watch?v=VG6j4Kp72wM&list=PL4FJJw7rbiIJkALPq6SY0_s1i2fE3NMYU&index=4	1	4	31	130	VG6j4Kp72wM
Dominic Miller - Air on a G string - JS Bach HD	https://www.youtube.com/watch?v=311usK62JOA&list=PL4FJJw7rbiIJkALPq6SY0_s1i2fE3NMYU&index=5	1	4	31	131	311usK62JOA
J. Cole - MIDDLE CHILD	https://www.youtube.com/watch?v=WILNIXZr2oc	1	7	1	164	WILNIXZr2oc
G2, Paloalto & Huckleberry P - Rapflicks	https://www.youtube.com/watch?v=HhgVhdZvmjI&list=RDMM5SejM_hBvMM&index=3	1	7	1	166	HhgVhdZvmjI
Powfu - The Story Of The Paper Boy	https://www.youtube.com/watch?v=_N_vBuP7FB8&list=RD0QuPtERPLo0&index=11	1	7	1	170	_N_vBuP7FB8
bae robins - your i love you... (ft. powfu)	https://m.youtube.com/watch?v=Td0JOW3VY_I&list=RDMMTd0JOW3VY_I&start_radio=1	1	7	26	172	Td0JOW3VY_I
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.users (username, password, email, image, user_id) FROM stdin;
bobdylan	$2b$12$Fd76GJ.JtbkD6Dj9OFylI.BVkvysH8rnm/ySSpKffKk3rFihvPmUO	bobbyboi@yahoo.com	https://ashraf-bucket.s3.us-east-2.amazonaws.com/715c1283-a802-4760-9287-6ba0b917cc59a8d.png	27
uzinatorcl	$2b$12$sl4SDHC3S3xMuB59APXK5..VHJ56hGU7HBoLbhE9XM5Wpts9DGtM2	uzinatorcl@live.com	https://ashraf-bucket.s3.us-east-2.amazonaws.com/6c1dcf3f-ece2-4a50-9a4b-23e46a36044f202002116.png	1
uzinatorcldrf	$2b$12$7elJ2FsuzJ2gG4MDKdKqwuF3BcUhFtdzy8dA2jD5gd4.8/JH8UpWm	uzindatorcl@live.com	/images/default-user-image.png	15
uzinatforcl	$2b$12$WQ2MB89GOijsByvKc16GAOy63/abMPnt6XyVGe3heLtr5h7QzfCgO	uzinatdorcl@live.com	/images/default-user-image.png	18
shadoki	$2b$12$C6Y1viWKliXWa3ZpWSl4gOOeiBaAKqCpTNEhzuIVtgTJyVPnE0Lq.	badrabbitcode@gmail.com	/images/default-user-image.png	19
ray	$2b$12$PYgUj1NkV5TfSoGx8dXEteJLm04C23pHZ88JjYNiSC5o5SAlijMAa	444@444.com	/images/default-user-image.png	32
resonate	$2b$12$M/MH1V.BfLEvg/07LKm9bu9kq96phAWzXnkijdQ6pIv6i9jFYiXUm	555@555.com	/images/default-user-image.png	33
whimbrel	$2b$12$wKyR3GC7/yEdcDqQ.zh8lOEvfOZf3.F0NP6tpZ7BLW6Hq2os14WNO	666@666.com	/images/default-user-image.png	34
berwyn	$2b$12$rCdtZkS/1ySCZoEnBUvcguoRtEH4HmR/PjrcGgILPo0.L6oGxu0eO	777@777.com	/images/default-user-image.png	35
superbowl	$2b$12$Cba70umz4h2AvO7NWDhcrOtKxYQ0.FyA5R48v6ZM032tLifDTGyMe	888@888.com	/images/default-user-image.png	36
unknown	$2b$12$jxEsH0PU5FJjc91kILJ/0eQmBUHShVLkqyaP3sPcf8pxhToixvtam	999@999.com	/images/default-user-image.png	37
cloud	$2b$12$OFmkHpFdtf2HQ238Jnihc.LSo4VSbZVUU6btxuJQgXdyeHLEuRxlW	0111@111.com	/images/default-user-image.png	38
ziggy	$2b$12$d30.JmuOYZDX5v2CPfdL6uYRu0zXIOLJ4QhovrUkmiHye2REaVsPq	022@111.com	/images/default-user-image.png	39
slapstick	$2b$12$sXzRBRNpYsXbec6bhS5HTOb26AcuZCi0u4SCnEJanXK2baKO5CF8G	111@111.com	https://ashraf-bucket.s3.us-east-2.amazonaws.com/5d504a90-7e08-4d60-91f4-ebcc3aa213f31-10918_music-notes-high-quality-png-web-icons-png.png	28
daredevil	$2b$12$WNa39/jDLCWSJdpDesZs9ePbj0BnMvujQWoI81iOvqX05g8st4dOS	222@222.com	https://ashraf-bucket.s3.us-east-2.amazonaws.com/7942398d-e2a2-4565-a735-9a2f734d9324sending-hugs.gif	30
guard	$2b$12$pz16Ysc8HPkmmftA4RL65eZtuvDuXX.70fRT3d3Y/29oudP5p7coq	333@333.com	https://ashraf-bucket.s3.us-east-2.amazonaws.com/0fe6fc56-7b79-4775-ac10-ef7be884a658whaa.png	31
thebearingedge	$2b$12$LeUTnTV7MPtQ.GaxChoqA.LlIQJ2qLHVyLC54t3kK1BnlQyM0hSYa	thebearingedge@gmail.com	/images/default-user-image.png	41
wetrix	$2b$12$.Uh9iNJbOVSaro0PsTNEKOr4BPRHcuSPfXwEY4GCZ4ANCrPkicqV.	wetrix101@gmail.com	https://ashraf-bucket.s3.us-east-2.amazonaws.com/fdd6742d-0b35-4a90-9157-7ba735e640c96B5DFE46-BC9D-4C1A-9947-C86C0795EC6B.jpeg	26
naruto	$2b$12$MqL5kmKD3nzYuyrGW6eaDu.TNjiwbq/Y2Y7BCYFfCGVj03yCp5WzS	narutorun@live.com	https://ashraf-bucket.s3.us-east-2.amazonaws.com/db8991d1-4b3f-4363-8a42-1b07771749c2AFA81D08-B729-4F95-9662-C99555FDAF3C.gif	42
taniaashraf	$2b$12$NVuP8V4qx6YrPOA2qlMuXuk4U9h89IwWrrzZv0r1oDC0i/spO0ynG	taniaashraf645@gmail.com	/images/default-user-image.png	43
Humaashraf	$2b$12$8JpfBkKUGA6K1zKLEDo.Q.zsApecgpIse150rCkJxctwwy6cODyWS	humahuma@yahoo.com	/images/default-user-image.png	44
\.


--
-- Name: favorites_favorite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.favorites_favorite_id_seq', 35, true);


--
-- Name: genre_genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.genre_genre_id_seq', 16, true);


--
-- Name: providers_provider_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.providers_provider_id_seq', 2, true);


--
-- Name: songs_song_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.songs_song_id_seq', 173, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.users_user_id_seq', 44, true);


--
-- Name: users email_unique; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT email_unique UNIQUE (email);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (favorite_id);


--
-- Name: genre genre_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.genre
    ADD CONSTRAINT genre_pkey PRIMARY KEY (genre_id);


--
-- Name: providers providers_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.providers
    ADD CONSTRAINT providers_pkey PRIMARY KEY (provider_id);


--
-- Name: songs songs_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.songs
    ADD CONSTRAINT songs_pkey PRIMARY KEY (song_id);


--
-- Name: songs songs_user_id_video_id_key; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.songs
    ADD CONSTRAINT songs_user_id_video_id_key UNIQUE (user_id, video_id);


--
-- Name: users username_unique; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT username_unique UNIQUE (username);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_username_email_key; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_email_key UNIQUE (username, email);


--
-- PostgreSQL database dump complete
--

