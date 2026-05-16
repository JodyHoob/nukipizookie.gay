const webamp = new Webamp({

  /* 🎵 PLAYLIST */
  initialTracks: [
    {
      metaData: {
        artist: "Vylet Pony",
        title: "Cross"
      },
      url: "./songs/Cross.wav",
      duration: 225
    }
  ],

  /* 🎨 SKIN */
  initialSkin: {
    url: "undertale.wsz"
  }
});

webamp.renderWhenReady(
  document.getElementById("webamp-container")
);

/* Optional: shuffle / repeat */
webamp.setShuffle(false);
webamp.setRepeat(true);