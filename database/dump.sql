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
Did my husband get my family member pregnant? | The Maury Show	https://www.youtube.com/watch?v=pXMrh3uJ7s4	1	2	1	8	pXMrh3uJ7s4
bae robins - your i love you... (ft. powfu)	https://www.youtube.com/watch?v=Td0JOW3VY_I&list=RDTd0JOW3VY_I&start_radio=1	1	2	1	9	Td0JOW3VY_I
Sorry I Never Apologized (feat. Two:22)	https://www.youtube.com/watch?v=MlUKSmyJQ2Y	1	7	1	11	MlUKSmyJQ2Y
Juice WRLD -  Lean Wit Me (Official Music Video)	https://www.youtube.com/watch?v=5SejM_hBvMM&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVM5SejM_hBvMM&start_radio=1	1	7	1	17	5SejM_hBvMM
Shortie Like Mine	https://www.youtube.com/watch?v=BFxCBGOdDbU&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVM5SejM_hBvMM&index=2	1	7	1	18	BFxCBGOdDbU
Juice WRLD - All Girls Are The Same (Dir. by @_ColeBennett_)	https://www.youtube.com/watch?v=h3EJICKwITw&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVM5SejM_hBvMM&index=7	1	7	1	20	h3EJICKwITw
Juice WRLD - Empty (Official Audio)	https://www.youtube.com/watch?v=9LSyWM2CL-U&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVM5SejM_hBvMM&index=8	1	7	1	23	9LSyWM2CL-U
Post Malone - Circles	https://www.youtube.com/watch?v=wXhTHyIgQ_U&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVM5SejM_hBvMM&index=9	1	7	1	25	wXhTHyIgQ_U
Feel That Again (feat. Happily Sad)	https://www.youtube.com/watch?v=iC0j5-xg98M&list=RDTd0JOW3VY_I&index=3	1	7	1	50	iC0j5-xg98M
9TAILS - ur the one i dream bout (lyrics)	https://www.youtube.com/watch?v=r2K3BvZplHg&list=RDTd0JOW3VY_I&index=4	1	7	1	51	r2K3BvZplHg
Get Allot	https://www.youtube.com/watch?v=CoZ4_gNc1Wc&list=RDwUjfWwqFcFI&index=11	1	7	1	53	CoZ4_gNc1Wc
Moonlight Sonata 3rd Movement	https://open.spotify.com/track/6JlK4T57sOrLGgur7sfVIu	2	4	1	54	spotify:track:6JlK4T57sOrLGgur7sfVIu
Haruka Kanata	https://open.spotify.com/track/2L2guKEbiVNAliokGduDcn	2	2	1	57	spotify:track:2L2guKEbiVNAliokGduDcn
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.users (username, password, email, image, user_id) FROM stdin;
uzinatorcl	$2b$12$sl4SDHC3S3xMuB59APXK5..VHJ56hGU7HBoLbhE9XM5Wpts9DGtM2	uzinatorcl@live.com	/images/default-user-image.png	1
\.


--
-- Name: favorites_favorite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.favorites_favorite_id_seq', 1, false);


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

SELECT pg_catalog.setval('public.songs_song_id_seq', 58, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.users_user_id_seq', 1, true);


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

