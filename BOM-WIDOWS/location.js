//The Location object represents the current location (URL) of a document

console.log(window.location)
console.log(document.location)
// Both window.location and document.location link to the same Location object.

//The location.href is a string that contains the entire URL.
console.log(location.href)

//The location.protocol represents the protocol scheme of the URL including the final colon (:).
console.log(location.protocol)

//The location.host represents the hostname:
console.log(location.host)

//The location.port represents the port number of the URL.
console.log(location.port)

//The location.pathname contains an initial '/' followed by the path of the URL.
console.log(location.pathname)

//The location.search is a string that represents the query string of the URL:
console.log(location.search)

// The location.origin is a string that contains the canonical form of the origin of the specific location.
console.log(location.origin)
