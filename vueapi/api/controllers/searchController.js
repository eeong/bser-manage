
const {ErBsClient, GameModes} = require('erbs-client');

const client = new ErBsClient(`${process.env.ER_KEY}`, `1`);

/* const methods = [
    client.getPlayerNumber('myPlayerName') , // Search for a player number using the given player name
    client.getCharacters(), // Merges multiple metadata calls to return all stats for all characters, no parameters
    client.getTopPlayers(1, GameModes.Duos), // gets all top players for a given season and game mode
    client.getTopSolos(), // shorthand for getTopPlayers(#, GameModes.Solos), same exists for squads and duos
    client.getRankForPlayer(123456, 1, GameModes.Squads), // gets the rank of the selected player for the given season and mode
    client.getGamesForPlayer(123456), // gets all games for the given player (pagination WIP) 
    client.getPlayerRecord(123456, 0) // gets all records for the given player for a given season 
]; */

//const results = Promise.all(methods);
const result = client.getPlayerNumber('덫없는사람');
exports.default(result);