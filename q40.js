function makeAlbum(artise, title, tracks) {
    const Album = {
        artise: artise,
        title: title,
    };
    if (tracks !== undefined) {
        Album.tracks = tracks;
    }
    return Album;
}
const album1 = makeAlbum("Artist1", "Album1");
const album2 = makeAlbum("Artist2", "Album2", 12);
const album3 = makeAlbum("Artist3", "Album3");
console.log(album1);
console.log(album2);
console.log(album3);
export {};
