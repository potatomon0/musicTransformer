let genre = {
    rap:{
        name:'Rap',
        img:'https://www.billboard.com/wp-content/uploads/2022/12/Mount-Westmore-2022-billboard-1548.jpg',
        description:"Rapping (also rhyming, flowing, spitting, emceeing or MCing) is a musical form of vocal delivery that incorporates rhyme, rhythmic speech, and street ...",
        leftPic:"https://holrmagazine.com/wp-content/uploads/2022/04/iStock-92026251-759x500.jpeg",
        rightInfo:"Rap artists such as Ice-T and Schoolly D started the war between East Coast and West Coast “Gangsta Rap.”"
    },
    kpop:{
        name:'K-POP',
        img:'https://cdn.vox-cdn.com/thumbor/9Fg8velf-s6BE79p-UBEMa2bzZw=/0x0:1215x717/1200x0/filters:focal(0x0:1215x717):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13390593/Akali_Splash_9.jpg',
        desciption:'K-pop (Korean: 케이팝; RR: keipap), short for Korean popular music, is a form of popular music originating in South Korea as part of South Korean culture.',
        leftPic:"https://res.heraldm.com/content/image/2022/12/26/20221226000533_0.jpg",
        rightInfo:"K-pop is music that is stuffed but never bloated; music that is fun and meant to elicit joy when listened to and seen (K-pop is designed to be ..."
    },
    ambient:{
        name:'Ambient Music',
        img:'https://ma-hub.imgix.net/wp-images/2019/05/29222105/royalty-free-music-Ambient.jpg',
        description:"Ambient music is a genre of music that emphasizes tone and atmosphere over traditional musical structure or rhythm. It may lack net composition, beat, ...",
        leftPic:"https://i.ytimg.com/vi/TN1TeC2YQJ0/maxresdefault.jpg",
        rightPic:'Searching for free Ambient music? Are you looking for the perfect background music for your yoga instruction video or meditation session? The FMA Ambient ...'
    }
}
let type = document.querySelector('.type');
let mainPic = document.querySelector('.mainPic');
let txtbox = document.querySelector('.txtbox');
let leftPic = document.querySelector('.leftPic');
let rightInfo = document.querySelector('.rightInfo');

const changeGenres = (temp)=>{
    if(temp === 'rap'){
        addTxt(type,genre.rap.name);
        addImg(mainPic,genre.rap.img);
        addTxt(txtbox,genre.rap.description);
    }
}
// document.querySelector(".btn").addEventListener("click",changeGenres)
const addTxt=(target,txt)=>{
    target.innerHTML = txt;
}
const addImg=(target,url)=>{
    target.setAttribute('src',url)
}
const uploadImg=(target,lPic)=>{
    let newImg = document.createElement('img');
    newImg.setAttribute('src',lPic);
    newImg.setAttribute('class',leftPic);
    target.append(newImg);
}
