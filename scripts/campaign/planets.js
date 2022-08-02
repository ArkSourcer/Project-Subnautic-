//no tocar//
const korot = new Planet("korot", Planets.sun, 2)
korot.generator = new SerpuloPlanetGenerator();
korot.accessible = true;
korot.atmosphereColor = Color.valueOf("ff000022");
korot.startSector = 10;
korot.atmosphereRadIn = 0.1;
korot.atmosphereRadOut = 0.3;

// La diversión (1% chance)
Events.on(EventType.ClientLoadEvent, () => {
	if (Math.random()*100 < 1) {Core.app.openURI("https://bit.ly/gdy2ibdiy")}
})
