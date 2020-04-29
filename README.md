# Music Bowl

A full stack React Next.js application

Mobile First and Desktop Oriented

## Technologies Used

- React.js
- Next.js
- Node
- Express
- Postgresql
- Babel
- Multer
- Bcrypt
- Reactstrap
- Material Ui
- Dotenv
- HTML5
- CSS3
- PM2
- AWS S3
- Spotify API

## Live Demo

Try the application live at [https://musicbowl.uzairashraf.dev/](https://musicbowl.uzairashraf.dev/)

## Features

- User can select a random song from the bowl
- User can select a random song based off category
- User can add a song to the bowl
- User can remove a song from the bowl
- User can favorite a song
- User can unfavorite a song
- User can sign up
- User can login
- User can add a profile picture
- User can stay logged in with a session cookie
- Application can differentiate between youtube links and spotify links
- User can see songs they have recommended
- User can see songs they have favorited
- User can see if there are no more new songs



## Preview

![Musicbowl](preview.gif)

## Development

#### System Requirements

- NPM 6 or higher
- Postgresql 10 or higher

#### Getting Started

1. This application requires the use of the Spotify API and AWS S3, 
   
   Please have a Spotify API ID and Secret, along with a AWS Access ID, Access Key, and a Bucket name.

1. Clone the repository.

    ```shell
    https://github.com/uzair-ashraf/music-bowl.git
    cd music-bowl
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```

1. Create enviornment variables.

    1. Clone the `env.example.config` file
    1. Name the cloned file to `.env`
    1. Edit the `.env` to provide your credentials

1. Import the example database to Postgresql located in `database/dump.sql`.


1. Run the custom express server.

    ```shell
    npm run dev
    ```

1. Once started you can view the application by opening http://localhost:3000 in your browser.

