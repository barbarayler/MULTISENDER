# THIS POLYGON MULTISENDER TOOLS FOR HACKATHON POLYGON 


!!! Use PC or DESKTOP MODE on mobile phone


# FEATURES POLYGON MULTISENDER TOOLS
### - Transfer to multiple addresses with low fees
### - Transfer MATIC to multiple addresses
### - Transfer ERC-20 to multiple addresses
### - Transfer ERC-721 to multiple addresses
### - Transfer ERC-1155 to multiple addresses


# HOW TO USE POLYGON-MULTISENDER-TOOLS
### STRUCTURE : 
![ARCITECTURE POLYGON TOOLS](https://user-images.githubusercontent.com/59292798/163484015-f3f4941b-cbbb-42fa-b9c4-a4eae29f67b0.png)

### MAX 200 ADDRESS PER TRANSACTION

### MATIC MULTISENDER : 
 - SUBMIT RECEPIENT ADDRESS WITH AMOUNT LIKE THIS : 
 ``` 
 example
 0x5iqefywevbfwevfw8uefb8bwfevqbyefbwye,0.007
 0x1238124ygvwa7fgwbdca76dsfvwabev2f7ev,1
 0x1238124ygvwa7fgwbdca76dsfvwabev2f7ev,1.5
 0xdfwefnwebf8bqewefniuebfewufguyvefube,10
 0x5iqefywevbfwevfw8uefb8bwfevqbyefbwye,100
 0xdfwefnwebf8bqewefniuebfewufguyvefube,15000
```
### ERC-20 MULTISENDER : 
- SUBMIT TOKEN ADDRESS
- SUBMIT RECEPIENT ADDRESS WITH AMOUNT LIKE THIS : 
 ``` 
 example
 0x5iqefywevbfwevfw8uefb8bwfevqbyefbwye,0.007
 0x1238124ygvwa7fgwbdca76dsfvwabev2f7ev,1
 0x1238124ygvwa7fgwbdca76dsfvwabev2f7ev,1.5
 0xdfwefnwebf8bqewefniuebfewufguyvefube,10
 0x5iqefywevbfwevfw8uefb8bwfevqbyefbwye,100
 0xdfwefnwebf8bqewefniuebfewufguyvefube,15000
```

### ERC-721 MULTISENDER
- SUBMIT TOKEN/NFT ADDRESS
- SUBMIT RECEPIENT ADDRESS WITH TOKEN ID LIKE THIS : 
 ``` 
 example
 0x5iqefywevbfwevfw8uefb8bwfevqbyefbwye,51310
 0x1238124ygvwa7fgwbdca76dsfvwabev2f7ev,82311
 0x1238124ygvwa7fgwbdca76dsfvwabev2f7ev,10020
 0xdfwefnwebf8bqewefniuebfewufguyvefube,10231
 0x5iqefywevbfwevfw8uefb8bwfevqbyefbwye,10013
 0xdfwefnwebf8bqewefniuebfewufguyvefube,15000
```

### ERC-1155 MULTISENDER
- SUBMIT TOKEN/NFT ADDRESS
- SUBMIT RECEPIENT ADDRESS WITH TOKEN ID AND AMOUNT LIKE THIS : 
 ``` 
 example
 0x5iqefywevbfwevfw8uefb8bwfevqbyefbwye,51310,1
 0x1238124ygvwa7fgwbdca76dsfvwabev2f7ev,82311,5
 0x1238124ygvwa7fgwbdca76dsfvwabev2f7ev,10020,7
 0xdfwefnwebf8bqewefniuebfewufguyvefube,10231,10
 0x5iqefywevbfwevfw8uefb8bwfevqbyefbwye,10013,100
 0xdfwefnwebf8bqewefniuebfewufguyvefube,15000,1000
```

## AVAILABLE ON NETWORK 
### TESTNET ✅


## SETUP & INSTALL DEPENDENCIES
```
git clone https://github.com/barbarayler/MULTISENDER.git
npm install
```
## SETUP CONTRACT WITH HARDHAT
```
cd hardhat 
yarn deploy:testnet // yarn deploy:mainnet
# setup your smart contract or change network in hardhat.config.ts
```

RUN Localhost & RUN Productions Build

```
npm start 
npm run build
```

