// const numberArray = [100, 1, 1, 250, 1, 1, 2, 2, 2, 100];

// console.log(numberArray);


// const numberSet = new Set(numberArray);

// console.log(numberSet);


// const newArray = [...numberSet]


// console.log(newArray);



// const stringArray = ['pippo', 'pluto', 'pippo', 'pippo']



// const uniqueArray = [...new Set(stringArray)]


// console.log(uniqueArray)


// const student1 = {
//     name: 'giovanni',
//     surname: 'sussarellu'
// }

// const student2 = {
//     name: 'lorenzo',
//     surname: 'puppo'
// }

// const student3 = {
//     name: 'lorenzo',
//     surname: 'puppo'
// }

// const students = [student1, student1, student2, student2, student2, student1, student3, student3, student3]

// console.log(students)

// const uniqueStudents = [...new Set(students)];

// console.log(uniqueStudents);



const feed1 = {
    name: 'il secolo',
    url: 'https://www.ilsecoloxix.it/rss/copertina.xml'
}

const feed2 = {
    name: 'il secolo xix',
    url: 'https://www.ilsecoloxix.it/rss/copertina.xml'
}

const feed3 = {
    name: 'il secolo di genova',
    url: 'https://www.ilsecoloxix.it/rss/copertina.xml'
}


const feed4 = {
    name: 'corriere della sera',
    url: 'https://xml2.corriereobjects.it/feed-hp/homepage.xml'
}

const feed5 = {
    name: 'corriere della sera / cronaca',
    url: 'https://www.corriere.it/dynamic-feed/rss/section/Cronache.xml'
}



const feeds = [feed1, feed2, feed3, feed4, feed5];


function filterDuplicate(feedArray){

    // const urls = [];

    // for (let i = 0; i < feedArray.length; i++) {
    //     const feed = feedArray[i];
    //     urls.push(feed.url);
    // }

    // console.log(urls);

    // const uniqueUrls = [...new Set(urls)];

    // const uniqueFeeds = [];

    // for (let i = 0; i < uniqueUrls.length; i++) {
    //     const url = uniqueUrls[i];
    //     const feed = feedArray.find(f => f.url === url);
    //     uniqueFeeds.push(feed);
    // }

    // return uniqueFeeds;

    const seen = [];
    const uniqueFeeds = [];

    for (let i = 0; i < feedArray.length; i++) {
        const feed = feedArray[i];

        const isUrlSeen = seen.includes(feed.url)
        
        if(!isUrlSeen){
            seen.push(feed.url);
            uniqueFeeds.push(feed);
        }
    }

    return uniqueFeeds;

}


const cleanFeeds = filterDuplicate(feeds);


console.log(cleanFeeds);


// class Feed{

//     constructor(name, url){
//         this.name = name;
//         this.url = url;
//     }
// }


// class FeedCollection{

//     constructor(feeds = []){
//         this.feeds = feeds;
//     }

//     insertFeed(feed){
//         const urls = this.feeds.map(f => f.url);
//         const uniqueUrls = [...new Set(urls)];

//         if (uniqueUrls.includes(feed.url)) {
//             console.log('è duplicato')
//         } else {
//             this.feeds.push(feed);
//         }

        
//     }
// }


// const collection = new FeedCollection();

// collection.insertFeed(feed1);
// collection.insertFeed(feed2);
// collection.insertFeed(feed4);

// console.log(collection)