# MedChain 
MedChain is a blockchain-based point recording tool for Med-asa and future partner applications. With a blockchain structure this system is expected to
- Have each state of the system written within the blockchain. 
- Activities are prooved and cannot be modified by any person.


## Fundamental Structures
Medchain consists of main entity as follows each will be represented logically by a smart contract.
- `Wallet` : A wallet containing point tokens, a single wallet can either belongs to a single user or a group of users.
- `Records` : This log keeps track of wallet activities by the users. Each activity entry will be classified into a category for further analysations.




#### Wallets
| Attributes | Type | Description |
| ------ | ------ | --- |
| wallet_id | int | unique id of that wallet instance |
| eth_id | String | Ethereum account address in the blockchain |

Each Wallets are binded to an Ethereum account with an Ethereum account address of which can be mapped to the token objects through the smart contract.
    
#### Records
| Attributes | Type | Description |
| ------ | ------ | --- |
| eid | int | unique id of an event or activity |
| activity | String | a activity description |
| date | Date| a timestamp of that particular record entry |

Upon each change made to the wallet, a new entry is initiated within the record to keep track of the changes made to the wallet and activity any user has participated. This record will be available as a portfolio for every users as a proof of activity participations.
## Implementations

## Possible Implementations

## Found issues


