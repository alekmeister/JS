var minStoneSum = function(piles, k) {
    const pilesHeap = new MaxHeap(null, piles)

    for(let i = 0; i < k; i++) {
        const biggestPile = pilesHeap.pop()

        pilesHeap.push(Math.ceil(biggestPile/2))
    }

    return pilesHeap.toArray().reduce((acc, curr) => acc + curr, 0)
};
