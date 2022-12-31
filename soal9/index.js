let film = 
[
  { Judul: "Infinity War", Durasi: "2 Jam", Genre: "Action", Tahun: "2019" },
  { Judul: "End Game", Durasi: "3 Jam", Genre: "Action", Tahun: "2019" },
  { Judul: "Captain Marvel", Durasi: "2 Jam", Genre: "Action", Tahun: "2018" },
  { Judul: "Doctor Strange", Durasi: "2 Jam", Genre: "Action", Tahun: "2018" },
];
function tambahDataFilm(judul,durasi,genre,tahun) {
    film.push({Judul: judul, Durasi: durasi, Genre: genre, Tahun: tahun})

}
tambahDataFilm("Kura-kura Ninja","3 Jam", "Action", "2015");
console.log(film);
