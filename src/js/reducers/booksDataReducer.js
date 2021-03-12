// All we're going to be doing here is returning back an [].
// This function will return back an [] full of {}s with books.
export const booksDataReducer = () => {
    // Remember all of the things that we actually need.  We need to have an image, a title, an author, a category, and a published date.
    return [
        {   
            // We put in an id to make this easier.
            id: 1,
            title: "Planet Hulk",
            author: "Greg Pak",
            category: "Graphic novel",
            published: "2006",
            coverURL: "../img/planetHulk.jpg",
            // We also put in a review, which is what we are going to be putting in a <p>.
            review: `"Planet Hulk" is a Marvel Comics storyline that ran primarily through issues of The Incredible Hulk starting in 2006. It dealt with the Marvel heroes' decision to send the Hulk away, his acclimation to and conquest of the planet where he landed, and his efforts to return to Earth to take his revenge.`,
        },
        {   
            id: 2,
            title: `Kraven's Last Hunt`,
            author: "J. M. DeMatteis",
            category: "Graphic novel",
            published: 1987,
            coverURL: "../img/kravensLastHunt.jpeg",
            review: `"Kraven's Last Hunt" is a comic book storyline by J.M. DeMatteis and Mike Zeck published in 1987, featuring the final battle between Marvel Comics characters Kraven the Hunter and Spider-Man.`,
        },
        {   
            id: 3,
            title: "X-Men: God Loves, Man Kills",
            author: "Chris Claremont",
            category: "Graphic novel",
            published: 1982,
            coverURL: "../img/xMenGodLovesManKills.jpeg",
            review: `X-Men: God Loves, Man Kills (Marvel Graphic Novel #5) is an original graphic novel published in 1982 by Marvel Comics, starring their popular superhero team the X-Men. It was written by Chris Claremont and illustrated by Brent Anderson. The book served as a primary inspiration for the film X2.`,
        },
        {   
            id: 4,
            title: "Dark Reign",
            author: "Rick Remender",
            category: "Graphic novel",
            published: 2009,
            coverURL: "../img/darkReign.jpg",
            review: `"Dark Reign" is a 2008-09 comic book branding used by Marvel Comics. It deals with the aftermath of the "Secret Invasion" storyline, which led to a shift of power in the Marvel Universe toward Norman Osborn. The title "Dark Reign" refers to Osborn's rise to national power and the ramifications thereof.`,
        },
        {   
            id: 5,
            title: "Infinity Gauntlet",
            author: "Greg Pak",
            category: "Jim Starlin",
            published: 1992,
            coverURL: "../img/infinityGauntlet.jpeg",
            review: `Collecting Infinity Gauntlet (1991) #1-6. For the Mad Titan, Thanos, the Infinity Gauntlet was the Holy Grail — the ultimate prize to be coveted above all else. With it came omnipotence: the absolute control of all aspects of time, space, power, reality, mind and soul.`,
        },
        {   
            id: 6,
            title: "Maximum Carnage",
            author: "Tom DeFalco",
            category: "Graphic novel",
            published: 1994,
            coverURL: "../img/maximumCarnage.jpg",
            review: `"Maximum Carnage" is a fourteen-part comic book crossover published in Marvel Comics' Spider-Man family of titles in 1993. It featured Spider-Man, Venom, and a host of other superheroes teaming up to face Venom's murderous offspring Carnage and his team of supervillains.`,
        },
    ];
};