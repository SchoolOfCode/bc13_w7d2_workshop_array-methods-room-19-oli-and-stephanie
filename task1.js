const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(function (cat){
    const capitalCats = cat.toUpperCase();
    console.log(capitalCats)
    return capitalCats;
});
