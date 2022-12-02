/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
function findWinners (matches) {
    const players = {};
    const losers = {};
    const answers = [[],[]];
    
    for (let match of matches) {
        if (!players[match[0]]) players[match[0]] = match[0]
        if (!players[match[1]]) players[match[1]] = match[1]
        
        if (losers[match[1]]) {
            losers[match[1]].push(match[1])
        } else {
            losers[match[1]] = [match[1]]
        }
    }
    
    for (let player in players) {
        if (!losers[player]) {
            answers[0].push(player)
        } else if (losers[player].length === 1) {
            answers[1].push(player)
        }
    }
    return answers
};