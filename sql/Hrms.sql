-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE public.candidate_users
(
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    national_identity character varying(11) NOT NULL,
    birth_year character varying(4) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.cities
(
    id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.confirm_employer_users
(
    id integer NOT NULL,
    employer_id integer NOT NULL,
    confirmed_staff_user integer,
    confirmed_date date,
    is_confirmed boolean,
    PRIMARY KEY (id)
);

CREATE TABLE public.edu_graduates
(
    id integer NOT NULL,
    description character varying NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.employer_users
(
    user_id integer NOT NULL,
    company_name character varying(100) NOT NULL,
    web_address character varying(50) NOT NULL,
    phone_number character varying(11) NOT NULL,
    user_confirm boolean,
    PRIMARY KEY (user_id)
);

CREATE TABLE public.job_positions
(
    id integer NOT NULL,
    "position" character varying NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.job_postings
(
    id integer NOT NULL,
    job_position_id integer NOT NULL,
    description character varying NOT NULL,
    city_id integer NOT NULL,
    min_salary integer,
    max_salary integer,
    open_position_number integer NOT NULL,
    created_date date NOT NULL,
    closed_date date,
    is_active boolean NOT NULL,
    employer_id integer NOT NULL,
    work_place_id integer,
    work_time_id integer,
    PRIMARY KEY (id)
);

CREATE TABLE public.resume_edu
(
    id integer NOT NULL,
    resume_id integer NOT NULL,
    school_name character varying NOT NULL,
    graduate_id integer NOT NULL,
    school_department character varying NOT NULL,
    started_date date NOT NULL,
    ended_date date,
    created_date date NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.resume_job_exp
(
    id integer NOT NULL,
    resume_id integer NOT NULL,
    company_name character varying NOT NULL,
    job_position_id integer NOT NULL,
    started_date date NOT NULL,
    ended_date date,
    created_date date NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.resume_langs
(
    id integer NOT NULL,
    resume_id integer NOT NULL,
    language character varying NOT NULL,
    created_date date NOT NULL,
    lang_level smallint NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.resume_techs
(
    id integer NOT NULL,
    resume_id integer NOT NULL,
    description character varying NOT NULL,
    created_date date NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.resumes
(
    id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    candidate_id integer NOT NULL,
    github_link character varying,
    linked_link character varying,
    photo character varying,
    description character varying,
    created_date date NOT NULL,
    is_active boolean,
    updated_date date,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public.resumes
    IS 'CV Tablosu';

CREATE TABLE public.staff_users
(
    user_id integer NOT NULL,
    name character varying NOT NULL,
    surname character varying NOT NULL,
    verify boolean,
    PRIMARY KEY (user_id)
);

CREATE TABLE public.users
(
    id integer NOT NULL,
    mail character varying(50) NOT NULL,
    password character varying(16) NOT NULL,
    verify boolean,
    PRIMARY KEY (id)
);

CREATE TABLE public.users_verify
(
    id integer NOT NULL,
    verify_code character varying NOT NULL,
    is_confirmed boolean,
    created_date date,
    confirmed_date date,
    user_id integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.work_place
(
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.work_time
(
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.candidate_users
    ADD FOREIGN KEY (id)
    REFERENCES public.users (id)
    NOT VALID;


ALTER TABLE public.confirm_employer_users
    ADD FOREIGN KEY (employer_id)
    REFERENCES public.employer_users (user_id)
    NOT VALID;


ALTER TABLE public.employer_users
    ADD FOREIGN KEY (user_id)
    REFERENCES public.users (id)
    NOT VALID;


ALTER TABLE public.resume_edu
    ADD FOREIGN KEY (graduate_id)
    REFERENCES public.edu_graduates (id)
    NOT VALID;


ALTER TABLE public.resume_edu
    ADD FOREIGN KEY (resume_id)
    REFERENCES public.resumes (id)
    NOT VALID;


ALTER TABLE public.resume_job_exp
    ADD FOREIGN KEY (job_position_id)
    REFERENCES public.job_positions (id)
    NOT VALID;


ALTER TABLE public.resume_job_exp
    ADD FOREIGN KEY (resume_id)
    REFERENCES public.resumes (id)
    NOT VALID;


ALTER TABLE public.resume_langs
    ADD FOREIGN KEY (resume_id)
    REFERENCES public.resumes (id)
    NOT VALID;


ALTER TABLE public.resume_techs
    ADD FOREIGN KEY (resume_id)
    REFERENCES public.resumes (id)
    NOT VALID;


ALTER TABLE public.resumes
    ADD FOREIGN KEY (candidate_id)
    REFERENCES public.candidate_users (id)
    NOT VALID;


ALTER TABLE public.staff_users
    ADD FOREIGN KEY (user_id)
    REFERENCES public.users (id)
    NOT VALID;


ALTER TABLE public.users_verify
    ADD FOREIGN KEY (user_id)
    REFERENCES public.users (id)
    NOT VALID;

END;