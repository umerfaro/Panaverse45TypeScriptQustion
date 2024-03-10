interface Album{

    artise: string;
    title: string;
    tracks?: number;// optional

}

function makeAlbum(artise:string, title:string, tracks?:number):Album{

    const Album:Album = {
        artise: artise,
        title: title,
    
    }

    if(tracks!==undefined){
        Album.tracks = tracks;
    }

    return Album;

}

const album1: Album = makeAlbum("Artist1", "Album1");
const album2: Album = makeAlbum("Artist2", "Album2", 12);  
const album3: Album = makeAlbum("Artist3", "Album3");

console.log(album1);
console.log(album2);
console.log(album3);