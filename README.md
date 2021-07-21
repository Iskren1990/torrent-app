<h1 align="center" href="https://torrentee.cf">Torrentee</h1>





[![Alt][home-events-screenshot]](https://torrentee.cf)

## About The Project

   Yet another torrent hosting site Torrentee combines a huge list of torrents with a fantastic user experience, especially if you’re looking for high-quality anime episodes or reading material.

Some of the stuff on Torrentee is difficult to find on other trackers, but you’re likely to find the most popular torrents here as well — there are over 4.8 million to choose from.

#### Currently hosted on [Heroku](https://torrentee.cf) 


### Built With

:one: Client
* [React](https://reactjs.org)
* [ReactNotify](https://github.com/k4wo/react-notify)
* [react-paginate](https://github.com/AdeleD/react-paginate)
* [React Router](https://reactrouter.com)
* [Cloudinary](https://cloudinary.com)

:two: Server
* [Express](https://expressjs.com/)
* [node-fetch](https://github.com/node-fetch/node-fetch)


### Installation


To get a local copy up and running follow these simple example steps.

:one: Download the app or clone the repo:

  
   :hash:  `` git clone https://github.com/Iskren1990/torrent-app.git ``
   :hash:  `` git clone https://github.com/Iskren1990/Torrentee_API.git ``


Note: Port 3000 and 3001 should not be in use. To validate follow the instructions bellow.

To use local MongoDB change "DB_NAME", "DB_PASSWORD" and "DB_UNAME" located in "/config/.env".
 
:two: install NPM packages

In the root folder of the client run: 

	
    :hash: `` npm start ``
	

By default the project uses port 3000 and 3001.

 - to check if it is free for use:

   - In Windows open cmd and paste:


   :hash: `` netstat -aon | find '3000' ``
   :hash: `` netstat -aon | find '3001' ``
	

   - In Linux paste in the terminal:


   :hash: ```sh sudo netstat -anp | grep ':3000' ```
   :hash: ```sh sudo netstat -anp | grep ':3001' ```
	

If the port is in use by other software you can change it by:


 - open " .env " file located in " config " folder.
 - change the value " PORT " variable.
	
	PORT=xxxx


## Getting Started


To start the server run:


    :hash: `` npm run start-dev ``


After successful start you will see the URL on which you can access the app.


## Usage

[![Alt][event-page-screenshot]](https://torrentee.cf)

[![Alt][share-screen-screenshot]](https://torrentee.cf)


## Roadmap

See the [open issues](https://github.com/Iskren1990/torrent-app/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

Distributed under the MIT License. See `LICENSE` for more information.


## Contact

Open a issue with request.


## Acknowledgements

    :hash: `` Great thanks to Bugsnag team for the inspiration! ``

* [Bugsnag for JavaScript](https://github.com/bugsnag/bugsnag-js/issues/660)

[home-events-screenshot]: https://res.cloudinary.com/allmighty/image/upload/v1617917227/Torrents_page_sm2gyh.png
[event-page-screenshot]: https://res.cloudinary.com/allmighty/image/upload/v1617917227/Torent_one_dcplcz.png
[share-screen-screenshot]: https://res.cloudinary.com/allmighty/image/upload/v1617917227/Profile_fg8nle.png
