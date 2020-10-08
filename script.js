const PLAYERSAPIURL = 
  "https://api.overwatchleague.com/players";
const TEAMSSAPIURL = 
  "https://api.overwatchleague.com/teams";

  var mainDiv = document.getElementById("main");
  var playersDiv = document.getElementById("players");



async function getTeams() {
  const resp = await fetch(TEAMSSAPIURL);
  const respData = await resp.json();

  console.log(respData);

  respData.competitors.forEach((team) => {
    // var mainDiv = document.getElementById("main");
    const teamEl = document.createElement("div");
    teamEl.classList.add("team");
    teamEl.setAttribute("id", team.competitor.name)
    teamEl.setAttribute("data-value", team.competitor.name)


    teamEl.innerHTML = 
    '<img class="grayedInverted" src="' + team.competitor.icon + '"/><div class=team-name>' + team.competitor.name + '</div>';

    document.getElementById("main").appendChild(teamEl);
  });

  return respData;
}

getTeams();


$("#main").on('click', '.team', function() {
  var teamID = $(this).attr('id');
  mainDiv.innerHTML = "";
  // alert(teamID);
  async function getPlayers() {
    const resp = await fetch(TEAMSSAPIURL);
    const respData = await resp.json();

    console.log(respData);

    respData.competitors.forEach((team) => {
      if (team.competitor.name == teamID) {
        team.competitor.players.forEach(element => {
          console.log(element.player.accounts);

          const playerEl = document.createElement("div");
          playerEl.classList.add("team");
          playerEl.innerHTML = '<img class="grayed" src="' + element.player.headshot + '"><div class=>' + element.player.name + '</div>';
          document.getElementById("players").appendChild(playerEl);
        }
        );
      }
    });

    return respData;
  }
  
  getPlayers();
});


// now make click event like one above for clicking on teams to show players but make it open their stream




// new Twitch.Embed("twitch-embed", {
//   layout: "video",
//   width: 854,
//   height: 480,
//   channel: "monstercat",
// });