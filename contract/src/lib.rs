use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, env, setup_alloc, PanicOnDefault, AccountId};
use near_sdk::collections::UnorderedMap;

setup_alloc!();

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct GuildsPlatform {
    guilds: UnorderedMap<String, Guild>,
}

#[near_bindgen]
impl GuildsPlatform {
    #[init]
    //Initializing Unordered Map
    pub fn new() -> Self {
        Self {
            guilds: UnorderedMap::new(b"g".to_vec()),
        }
    }

    pub fn create_guild(
        &mut self, 
        slug: String,
        title: String,
        oneliner: String,
        website: String,
        app: String,
        whitepaper: String,
        twitter: String,
        telegram: String,
        discord: String,
        medium: String,
        github: String,
        ticker: String,
        logo: String,
        contract_str: String,
    ){
        let guild = Guild {
            slug: String::from(&slug),
            title: String::from(&title),
            oneliner: String::from(&oneliner),
            website: String::from(&website),
            app: String::from(&app),
            whitepaper: String::from(&whitepaper),
            twitter: String::from(&twitter),
            telegram: String::from(&telegram),
            discord: String::from(&discord),
            medium: String::from(&medium),
            github: String::from(&github),
            ticker: String::from(&ticker),
            logo: String::from(&logo),
            contract_str: String::from(&contract_str),
            //TO DO: cambiar prefijo a uno generado
            members: UnorderedMap::new(b"m".to_vec()),
        };

        self.guilds.insert(&slug, &guild);

        env::log(format!("Saving guild '{}'", guild.slug,).as_bytes());
    }
}

//Model for Guilds
#[derive(BorshSerialize, BorshDeserialize)]
pub enum GuildStatus {
    Launched,
    NotLaunched,
}

#[derive(BorshSerialize, BorshDeserialize)]
pub struct Guild {
    pub slug: String,
    pub title: String,
    pub oneliner: String,
    pub website: String,
    pub app: String,
    pub whitepaper: String,
    pub twitter: String,
    pub telegram: String,
    pub discord: String,
    pub medium: String,
    pub github: String,
    pub ticker: String,
    pub logo: String,
    pub contract_str: String,
    pub members: UnorderedMap<String, AccountId>,
}