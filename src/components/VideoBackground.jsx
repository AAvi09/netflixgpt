import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

// fetch trailer video && updating the store with trailer video data

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer((movieId = { movieId }));

  return (
    <div className="absolute top-20 ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
// {{
//     "id": 558449,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "20 Years of Making a Sequel - Exclusive Behind the Scenes",
//         "key": "_ZBYN01c7OM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-12-31T15:59:55.000Z",
//         "id": "67771f4515521f83d9667cb8"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Screenwriting of Gladiator II",
//         "key": "gGmaZCZz48g",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-12-23T18:00:06.000Z",
//         "id": "676a46d21bb91310c064b1e0"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Cinematography of Gladiator II",
//         "key": "L5HZw0tGAv8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-12-23T18:00:02.000Z",
//         "id": "676a46c99348daa54ba9e899"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Extended Clip - The Gateway to Rome",
//         "key": "eEFRXtV5LTE",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-12-23T12:59:51.000Z",
//         "id": "676a3b8bfdaa7c2549a9d803"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Costume Design of Gladiator II",
//         "key": "ICvbuugHjUg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-12-19T20:08:52.000Z",
//         "id": "6766b63641db2b4b9c74861a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "A Conversation with Director Ridley Scott and Christopher Nolan",
//         "key": "uwd0uX0h1Mc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-12-19T20:05:30.000Z",
//         "id": "6764d3f68f10c2746b90bf7d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "It's time to enter the arena",
//         "key": "abP1EYHvGvc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-12-05T01:00:02.000Z",
//         "id": "6752262a0e8c237986a8f72f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "'Gladiator II' With Paul Mescal, Denzel Washington, Ridley Scott, and More | Academy Conversations",
//         "key": "lLl6Bx8coJ4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-12-04T16:00:06.000Z",
//         "id": "675326b4802bad16091abcfc"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Gladiator II is “what movies are made for.”",
//         "key": "d-_apjZSE_s",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-12-04T01:00:21.000Z",
//         "id": "674fd437355dbc0b15d7a05a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "See it. Feel it. Experience Gladiator II in 4DX",
//         "key": "QiDTEfTSRbw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-29T03:45:01.000Z",
//         "id": "674dda79f313bac2f7a98ad1"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Rebuilding Rome for Gladiator II",
//         "key": "fdh8bUZHt6s",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-11-27T15:03:05.000Z",
//         "id": "674dc8fb562b030bb5addc2c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "This is what movies are made for",
//         "key": "DFgIdcti2KQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-26T03:45:00.000Z",
//         "id": "6745e66041433428d92ec7f0"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "“The best action blockbuster of the year”!",
//         "key": "HL6IOyKy8Fc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-25T03:43:31.000Z",
//         "id": "6744b820c24765fa2f2def12"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "World Tour",
//         "key": "7-CLwRoh4m0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-11-22T18:00:11.000Z",
//         "id": "6744b20cdae2e6a93825f4ae"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "HBCU Student Roundtable with Denzel Washington",
//         "key": "NlJE-JayNIk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-11-21T23:31:24.000Z",
//         "id": "673fd41fae12bafff5754bf8"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Lucilla",
//         "key": "lkOEfB0U1IQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-11-20T18:00:11.000Z",
//         "id": "673fd4068337acae076dcafe"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Acacius",
//         "key": "6q4vdtNnxMs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-11-20T18:00:09.000Z",
//         "id": "673fd4007b825e685b4e0b77"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Emperors",
//         "key": "L9-Vwg82mfQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-11-20T18:00:07.000Z",
//         "id": "673fd3f97b825e685b4e0b75"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Lucius",
//         "key": "cuzExc4OpK0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-11-20T18:00:05.000Z",
//         "id": "673fd3d5ae12bafff5754bce"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Macrinus",
//         "key": "tnQu4VrggM8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-11-20T18:00:01.000Z",
//         "id": "673fd3c268823004ca9c44b4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The birth of a new Roman epic",
//         "key": "8Lld3U0sVho",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-19T01:30:06.000Z",
//         "id": "673c7ca5ac3aa714f4321583"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "London Premiere",
//         "key": "SL0ellaO20k",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-11-18T18:56:28.000Z",
//         "id": "673c7ec93555417913b14b70"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Final Trailer",
//         "key": "TQwSz88ITAE",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-11-18T16:00:01.000Z",
//         "id": "673c7cb5ac3aa714f432159d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Let the games begin",
//         "key": "mmbLQNsZqh0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-18T01:00:29.000Z",
//         "id": "673b42dc74a2e6e0237b64d8"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Prepare for the roar of the crowd",
//         "key": "mw3NuoRkDCw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-14T10:00:55.000Z",
//         "id": "6735de73ff85881393a09f27"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Strength x Honor",
//         "key": "g_yU1rS261M",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-14T01:00:25.000Z",
//         "id": "67357b977dfa9751886e121c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Prepare to be entertained",
//         "key": "botmnZBsji8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-13T01:00:22.000Z",
//         "id": "67354e7fdd2c72a8a9036c2b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Directing Gladiator II",
//         "key": "lKAosomWZto",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-11-12T17:00:54.000Z",
//         "id": "67357ba8d4ffba1e8b2ad32d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "He will defy an empire",
//         "key": "DizBLLrSMSc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-12T01:00:07.000Z",
//         "id": "6732de0f575d069d39fc7c9d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The fire of vengeance burns hot",
//         "key": "iK7EDIzgJw0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-11T01:00:23.000Z",
//         "id": "6732de1f855cbb4e48f6718d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "A new Roman legacy begins.",
//         "key": "4OQnvl6zOTs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-11-10T01:00:05.000Z",
//         "id": "6732de2d4cee4fc8d5d1a996"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Roundtable Interview",
//         "key": "504X_zXULVs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-11-09T01:00:05.000Z",
//         "id": "67300abf8f81fed6bd3f6141"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Rage can be a gift",
//         "key": "nZtmOBiXOjc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-31T19:00:38.000Z",
//         "id": "67256d771ba193caec2ab146"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "A day you’ll never forget",
//         "key": "LBpqSQJFl90",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-31T18:30:20.000Z",
//         "id": "67256d6f1ba193caec2ab143"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "For vengeance. For honor.",
//         "key": "-LNvW2ofxdI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-30T01:00:00.000Z",
//         "id": "6721ece9d9a8a77b5da4407d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Honor isn’t given. It’s fought for.",
//         "key": "L1foOR4beXQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-28T01:00:10.000Z",
//         "id": "671f36994542e371fe0b080d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Training",
//         "key": "utK0oXB_waQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-10-22T13:00:06.000Z",
//         "id": "67184e204be15469e70d4b13"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Experience the Music of Gladiator II - Behind the scoring with Ridley Scott, Harry Gregson-Williams",
//         "key": "9F2zmfRu5SM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-10-10T14:00:03.000Z",
//         "id": "670879f2c5fcf5a1634f336d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Making Of An Epic",
//         "key": "rbbNgvm3SS8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-10-08T15:00:01.000Z",
//         "id": "67085de7c6010e40cd58e6f7"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "New Trailer",
//         "key": "Ts0N8swyWFI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-09-23T13:00:20.000Z",
//         "id": "66f173c6c237258e4c2693c8"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "New Trailer Tomorrow",
//         "key": "le6-HvwsyQc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-09-22T17:00:07.000Z",
//         "id": "66f102e02d98d59ce13ae95b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Paul Mescal Featurette",
//         "key": "zBUlcCtE-fk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-08-20T22:45:04.000Z",
//         "id": "66c540b2d0ac0d6ff72d409a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Joseph Quinn Featurette",
//         "key": "HMlPacqbVf8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-08-20T22:45:01.000Z",
//         "id": "66c540abb9b2b73959d1220e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Denzel Washington Featurette",
//         "key": "Sfewq6MbT8c",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-08-20T22:45:01.000Z",
//         "id": "66c540b919fcb9bc26971f58"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Pedro Pascal Featurette",
//         "key": "7fGnxleq7vA",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-08-20T22:45:01.000Z",
//         "id": "66c540c0ec6215ea20d5c337"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "4rgYUipGJNo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-07-09T13:00:03.000Z",
//         "id": "668d37079d1b57031f5c0490"
//       }
//     ]
//   }}
