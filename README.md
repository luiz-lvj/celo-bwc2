# Valid Protocol - Celo-bwc2 Hackathon 

Valid Protocol is a blockchain-based solution for checking the reliability of information - a technological solution to solve the problems derived from Fake News, discarding the use of censorship or government/private interventions. 

We believe that technology is the best way to solve problems derived from technology itself - so that's what we are proposing.

This project is a solution proposed for the Celo-BWC2 Hackathon.

## Our idea

Valid Protocol: Empowering Truth-Seekers with Blockchain Technology

Valid Protocol is an app that uses SocialConnect and blockchain to ensure trust about news. 

Our structure is simple and efficient and basically uses the most powerful thing about SocialConnect, the social identifiers to verify authentic journalists and news sources, and the most powerful thing about blockchain, a decentralized use for everyone to access and verify the information.

A groundbreaking app that harnesses the transformative potential of blockchain technology to counter the rampant spread of fake news. By leveraging blockchain's immutable and transparent nature, Valid Protocol ensures the authenticity and reliability of news content. Join us in the quest for truth and a more informed society with Valid Protocol.

## How does it work?

When someone wishes to check the reliability of some piece of information, the majority of people depend on checking whether or not the source which emitted this material is trustworthy. This is the nature of information gathering: if faith is not used as a basis for fact-checking, every single person would need to have deep knowledge of the subject in question to fact-check it. Therefore, source-checking provides the best level of security about the content of some news - if it has been published, it has a higher probability of being true than if it hadn't.

Valid Protocol is based on that exact philosophy. 

Every single bit of news a trustworthy source wishes to publish to the public (let it be CNN, New York Times, Washington Post etc.) can be also submitted to a platform that will receive the content of the news and append it into the blockchain. The information about the institution will also be available, via Celo's *SocialConnect* protocol.

On the same page, users who wish to check the credibility of some information they received (via private messages, low-traffic portals, or Telegram groups) can input them into Valid Protocol's platform and check if the required piece of information has already been appended by some credited source.

But here comes the question: **Why appending news to the blockchain is helpful when fighting misinformation**?

The keywords are **Decentralization** and **Immutability**.

If some news is appended to some centralized database, such as Google Cloud, we are faced with severable problems:

- A centralized database may be hacked: politically fueled groups may hack the serves of the company and alter the content stored, leading to insecurity when regarding quality of information, mining credibility of news portals or even validating misinformation as the truth.
- Centralized information may be censored by the very owners of it. Numerous scandals have already reported the algorithmic biases of digital marketing led by platforms like Google and Facebook, so we have no guarantee that the same will not happen with the news appended to their databases.
- If the information is centralized, is hackable - therefore, it may change. Henceforth, truth becomes relative.

Blockchain is the evolution of security, ownership and transparency, being the perfect neutral groungg for different sources to input news, as well as for users to fact-check and consume qualified information.


## Our Deploy

We deployed our solution in this contract:

alfajores: 0xfbb040346936B6AD2110df3419A29f12f6e48C36



## Our app


First, we have a .env file (obviously not pushed into gitHub) that fetches the ETHERSCAN_API_KEY to verify the Smart Contract and access Etherscan (a block explorer, kinda like google but for blockchain).;
Second, the framework used (Hardhat) fetches the required APIs for deployment via the "hardhat-deploy" packaged, installed via the command yarn add --dev hardhat-deploy.
Have a database
Indeed we have - it is the Blockchain! In fact, the Goerli Testnet is a decentralized server. All of the transactions may be seen in this link:

https://goerli.etherscan.io/address/0x8c82b77894f9a1d7bc341af974b545e59428fa67

This database stores the accounts and names of credited sources appended by an Administrator, and they append reliable information to the chain, readily accessible for auditability - all of these are stored in the database.

Have an API to communicate with your database
Indeed:

We fetch manually the etherscan_api_key for communication with the block explorer for verification.
The frontend connects to the server side via the Ethers.js library, which fetches the APIs of Goerli Testnet for interaction with the Smart Contract.
Hardhat access the deployments through built-in protocols to fetch the correspondent APIs as well.
Have a simple UI and a way to interact with it
The frontend folder has all of the necessary UI coded.

