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
    favorite_id integer NOT NULL,
    song_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.favorites OWNER TO dev;

--
-- Name: genre; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.genre (
    genre_id integer NOT NULL,
    genre character varying(255) NOT NULL
);


ALTER TABLE public.genre OWNER TO dev;

--
-- Name: providers; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.providers (
    provider_id integer NOT NULL,
    provider_name character varying(255) NOT NULL
);


ALTER TABLE public.providers OWNER TO dev;

--
-- Name: songs; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.songs (
    song_id integer NOT NULL,
    title character varying(255) NOT NULL,
    url text NOT NULL,
    thumbnail text,
    provider_id smallint NOT NULL,
    genre_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.songs OWNER TO dev;

--
-- Name: users; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(62) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    image text DEFAULT '/images/default-user-image.png'::text
);


ALTER TABLE public.users OWNER TO dev;

--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.favorites (favorite_id, song_id, user_id) FROM stdin;
\.


--
-- Data for Name: genre; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.genre (genre_id, genre) FROM stdin;
\.


--
-- Data for Name: providers; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.providers (provider_id, provider_name) FROM stdin;
\.


--
-- Data for Name: songs; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.songs (song_id, title, url, thumbnail, provider_id, genre_id, user_id) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.users (user_id, username, password, email, image) FROM stdin;
\.


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
-- Name: providers provider_id_pk; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.providers
    ADD CONSTRAINT provider_id_pk PRIMARY KEY (provider_id);


--
-- Name: songs songs_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.songs
    ADD CONSTRAINT songs_pkey PRIMARY KEY (song_id);


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

