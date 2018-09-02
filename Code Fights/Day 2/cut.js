function almostIncreasingSequence(s) {
    if (s.length < 2) return true;
    if (s[0] >= s[1]) {
        s.splice(0, 1);
    }
    else if (s[s.length - 1] <= s[s.length - 2]) {
        s.splice(-1, 1);
    }
    else {
        for (let i = 1; i < s.length - 1; i++) {
            const [a, b, c] = s.slice(i - 1, i + 2);
            const is_removable_peak   = a < c && b >= a && b >= c;
            const is_removable_valley = a < c && b <= a && b <= c;
            if (is_removable_peak || is_removable_valley) {
                s.splice(i, 1);
                break;
            }
        }
    }
    
    return strictIncreasing(s);
}

function strictIncreasing(s) {
    for (let i = 1; i < s.length; i++) {
        if (s[i] <= s[i - 1]) return false;
    }
    return true;
}