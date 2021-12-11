use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, env, setup_alloc, AccountId};
use near_sdk::serde::{Serialize, Deserialize};
use near_sdk::collections::UnorderedMap;
use std::collections::HashSet;

setup_alloc!();

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct GuildsPlatform {
    guilds: UnorderedMap<String, Guild>,
}

//Initializing the contract
impl Default for GuildsPlatform {
    fn default() -> Self {
      Self {
        guilds: UnorderedMap::new(b"g".to_vec()),
      }
    }
  }

#[near_bindgen]
impl GuildsPlatform {
    //We require (as of now) every parameter. 
    //Some of them could be optional in the future if we implement editing.
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
            members: HashSet::new(),
        };

        self.guilds.insert(&slug, &guild);

        env::log(format!("Saving guild '{}'", guild.slug,).as_bytes());
    }

    pub fn get_guild_info(&self, slug: String) -> Option<Guild> {
        self.guilds.get(&slug)
    }

    pub fn join_guild(&mut self, slug: String) {

        //TO DO: Control over joining? Can anyone join?
        //TO DO: On boarding of people with no account.
        let mut guild = self.guilds.get(&slug).unwrap();
        let account_to_insert = env::predecessor_account_id();

        if guild.members.get(&account_to_insert).is_none() {
            guild.members.insert(account_to_insert);
            self.guilds.insert(&slug,&guild);
            env::log(format!("'{}' just joined '{}'!", env::predecessor_account_id(), &slug,).as_bytes());
        }
        else{
            env::log(format!("'{}' is already a member of '{}'!", account_to_insert, &slug,).as_bytes());
        }
        //TO DO: Recieve an NFT to confirm joining the guild?
    }

    pub fn get_num_members(&self, slug: String) -> usize {
        let guild = self.guilds.get(&slug).unwrap();

        guild.members.len()
    }
}

//Model for Guilds
#[derive(BorshSerialize, BorshDeserialize)]
pub enum GuildStatus {
    Launched,
    NotLaunched,
}

#[derive(Serialize, Deserialize, BorshSerialize, BorshDeserialize)]
#[serde(crate = "near_sdk::serde")]
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
    pub members: HashSet<AccountId>,
}