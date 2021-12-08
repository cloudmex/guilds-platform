use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, setup_alloc};
use near_sdk::collections::UnorderedMap;

setup_alloc!();

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
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

    pub fn add_guild(&mut self, slug: String){
        
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
    pub contract: String,
    pub status: GuildStatus,
}

//Model for Members