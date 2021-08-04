function gameObject() {
    const gameStats = {}
    function assignTeams(relativeLocation, teamName, colors) {
        gameStats[relativeLocation] = {'teamName': teamName, 'colors': colors, 'player': {}}
        }
    
    function assignStats(team, name, number, shoe, points, rebounds, assists, steals, blocks, slamDunks) {
        const indStats = {
            'number': number, 
            'shoe': shoe,
            'points': points,
            'rebounds': rebounds, 
            'assists': assists,
            'steals': steals,
            'blocks': blocks,
            'slamDunks': slamDunks}

        gameStats[team]['player'][name] = {}
       
        Object.assign(gameStats[team]['player'][name], indStats);
        return gameStats;
        }


    assignTeams('home','Brooklyn Nets', ['Black', 'White']);
    assignTeams('away', 'Charlotte Hornets', ['Turquoise', 'Purple']);
    assignStats('home', 'Alan Anderson', 0, 16, 22, 12, 12, 3, 1, 1)
    assignStats('home', 'Reggie Evans', 30,14,12,12,12,12,12,7)
    assignStats('home', 'Brook Lopez', 11, 17, 17, 19, 10, 3, 1, 15)
    assignStats('home', 'Mason Plumlee', 1, 19, 26, 12, 6, 3, 8, 5)
    assignStats('home', 'Jason Terry', 31, 15, 19, 2, 2, 4, 11, 1)
    assignStats('away', 'Jeff Adrien', 4, 18, 10, 1, 1, 2, 7, 2)
    assignStats('away', 'Bismak Biyombo', 0, 16, 12, 4, 7, 7, 15, 10)
    assignStats('away', 'DeSagna Diop', 2, 14, 24, 12, 12, 4, 5, 5)
    assignStats('away', 'Ben Gordon', 8, 15, 33, 3, 2, 1, 1, 0)
    assignStats('away', 'Brendan Haywood', 33, 15, 6, 12, 12, 22, 5, 12)
    return gameStats;
    }
    
    console.log(gameObject())
    
function playerAttribute (playerName, attribute) {
    let valueOfAttribute
    if (game.home.player[playerName]) {
        return valueOfAttribute = game.home.player[playerName][attribute]
    }else if (game.away.player[playerName]) {
        return valueOfAttribute = game.away.player[playerName][attribute]
    }else{
        return valueOfAttribute = `We're sorry but ${playerName} didn't play in this game.`
    }

}

function playersObj() {
    return {...gameObject().home.player, ...gameObject().away.player}
}

function numPointsScored(playerName) {
    return playerAttribute(playerName, 'points')
} 


function shoeSize(playerName) {
    return playerAttribute(playerName, 'shoe')
}

function teamColors (name) {
    let game = gameObject()
    let tc
    if (game.home.teamName === name) {
        tc = game.home.colors
        return tc
    }else if (game.away.teamName === name) {
        return tc = game.away.colors
    }
    return tc;
}

function teamNames() {
    let game = gameObject();
    const names = [game.home.teamName, game.away.teamName]
    return names;
}

function playerNumbers (teamNm) {
    let game = gameObject()
    const playerNumbers = []
    if (game.home.teamName === teamNm) {
        let startFor = Object.assign({}, game.home.player)
        for (let playerId in startFor) {
            for (let value in startFor[playerId]) {
                if(value === 'number') {
                    playerNumbers.push(startFor[playerId][value])
                    console.log(startFor[playerId][value])
                }
            }
        }
        return playerNumbers;
    }else{
        let startFor = Object.assign({}, game.away.player)
        for (let playerId in startFor) {
            for (let value in startFor[playerId]) {
                if(value === 'number') {
                    playerNumbers.push(startFor[playerId][value])
                    console.log(`${startFor[playerId]}: `, startFor[playerId][value])
                }
            }
        }
        return playerNumbers;
    }
}
function playersObj() {
    return {...gameObject().home.player, ...gameObject().away.player}
}

function playerStats(playerName) {
    return playersObj()[playerName]
}

function bigShoeRebound() {
    
    //create a function that returns all of the players
    //create a function that returns a player based on the name that was passed in

    //create an array and }push all of the shoe values into that array
    const players = playersObj()
    const shoeArr = []
    let bigShoe 
    for (let player in players) {
        for( let key in players[player]) {
            if (key === 'shoe') {
                shoeArr.push(players[player][key])
            }
        }  
    }
    //find the max value of the array
    const shoeMax = shoeArr.reduce(function(a, b) {
        return Math.max(a, b);
    }, 0);
    console.log(shoeMax)
    //find the player with that value for their shoe
    
    for (let player in players) {
        for( let key in players[player]) {
            if ((key === 'shoe') && (players[player][key] === shoeMax)) {
                debugger
                const bigShoePlayer = {...players[player]}
                bigShoe = bigShoePlayer['rebounds'];
            }
        }
       
    }

    return bigShoe;
    
    //return the value of that player's rebounds
}
function mostPointsScored () {
    let game = gameObject()
    let pointsObj = Object.assign(game.home.player, game.away.player)
    let pointsArr = []
    let maxPointsPlayer
    for (let player in pointsObj) {
        for( let key in pointsObj[player]) {
            if (key === 'points') {
                pointsArr.push(pointsObj[player][key])
            }
        }  
    }
    const maxPoints = pointsArr.reduce(function(a, b){
        return Math.max(a, b);
    }, 0);
    for (let player in pointsObj) {
        for( let key in pointsObj[player]) {
            if ((key === 'points') && (pointsObj[player][key] === maxPoints)) {
            
                maxPointsPlayer = player
                return maxPointsPlayer
            }
        }
       
    }
    
}

function winningTeam() {
    let game = gameObject()
    let homePointsObj = Object.assign(game.home.player)
    let homeScore = 0
    let awayScore = 0
    let awayPointsObj = Object.assign(game.away.player)
    
    for (let player in homePointsObj) {
        for( let key in homePointsObj[player]) {
            if (key === 'points') {
                homeScore += homePointsObj[player][key]
            }
        }  
    }
    for (let player in awayPointsObj) {
        for( let key in awayPointsObj[player]) {
            if (key === 'points') {
                awayScore += awayPointsObj[player][key]
            }
        }  
    }
    if(homeScore > awayScore) {
        const winningTeam = game.home.teamName
        return winningTeam
    }else if (homeScore < awayScore) {
        const winningTeam = game.away.teamName
        return winningTeam
    }
}    

function playerWithLongestName() {
    let game = gameObject()
    let maxNameLength = 0
    let maxLengthName
    let playerObj = Object.assign(game.home.player, game.away.player)
    for (let player in playerObj) {
            if (player.length > maxNameLength) {
                maxLengthName =  player
                maxNameLength = player.length
        }
    }
        return maxLengthName
}

function doesLongestNameStealATon () {
    let game = gameObject()
    let playerObj = Object.assign(game.home.player, game.away.player)
    const longPlayerName = playerWithLongestName()
    debugger
    const lPNSteals = playerObj[longPlayerName]['steals']
    let doesHe = true
    for (let player in playerObj) {
        for (let stat in playerObj[player]) {
        if (stat === 'steals' && (playerObj[player][stat] >= lPNSteals)) {
            doesHe = false
        }else{
            continue;
             }
        }
    return doesHe
    }
}