/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
    const map = new Map();
    let ans = 0;
    
    for (let jewel of jewels) {
        if (map.get(jewel)) {
            map.set(jewel, map.get(jewel) + 1)
        } else {
            map.set(jewel, 1)
        }
    }
    
    for (let i = 0; i < stones.length; i++) {
        let stone = stones[i];
        
        if (map.get(stone)) ans++;
    }
    
    return ans;
};