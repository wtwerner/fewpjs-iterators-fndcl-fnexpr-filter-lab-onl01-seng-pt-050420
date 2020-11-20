function findMatching(drivers, query) {
    return drivers.filter( d => {
        return d.toLowerCase() === query.toLowerCase();
    }) 
}

function fuzzyMatch(drivers, query) {
    return drivers.filter( d => {
        return d.substring(0, query.length) === query
    })
}

function matchName(drivers, query) {
    return drivers.filter( d => {
        return d.name === query
    })
}