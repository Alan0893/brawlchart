const brawlchart = require('..')
const client = new brawlchart.Client(process.env.TOKEN)


;(async function () {
  //Gets the Player with the tag: QVV900UC
  const player = await client.getPlayer('#QVV900UC') // get player by #ID

  //Logging the Player's info
  console.log(player.tag)     //QVV900UC
  console.log(player.number)  //{ daily: 45, weekly: -853, seasonal: -861 }
  console.log(player.daily)   //45
  console.log(player.weekly)  //-853
  console.log(player.seasonal)//-861
  console.log(player.labels)  //[Array]
  console.log(player.data)    //[Array]
  console.log(player.brawlers)//{Object}

  //Gets the Club with the tag: 2Q0YJPC9V
  const club = await client.getClub('#2Q0YJPC9V')
  
  //Logging the Club's info
  console.log(club.tag)     //2Q0YJPC9V
  console.log(club.number)  //{ daily: -18599, weekly: 132097, seasonal: 51325 }
  console.log(club.daily)   //-18599
  console.log(club.weekly)  //-132097
  console.log(club.seasonal)//51325
  console.log(club.labels)  //[Array]
  console.log(club.data)    //[Array]
})()
