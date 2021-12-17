import axios from 'axios';

export const GuildsEntities = async () => {
    axios.get('https://raw.githubusercontent.com/near/ecosystem/main/entities.json', {
            responseType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        })
        .then(response => {
            localStorage.setItem('GUILDS', JSON.stringify(response.data));
        })
        .catch( error => {
            console.log(error);
            localStorage.setItem('GUILDS', JSON.stringify([])); 
            
        }
    );   
}

//TODO: Proposal to show only some guilds by slug
export const filterGuilds = (data) => {
    const guilds = [
        "near-music-guild",
        "near-vietnam",
        "nearru",
        "human-guild",
        "open-web-sandbox",
        "open-shards-alliance"
    ]

    const list = guilds.map((element) => 
        data.find((item, index) => {
            if(element === item.slug){
                data.splice(index,1)
            }
            
            return element === item.slug
        })
    );
    return list;
}

export const getInfoSlug = (guilds, slug) => {
    return guilds.find(guild => guild.slug === slug ) 
}