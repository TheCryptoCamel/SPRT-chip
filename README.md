# Luxury Meet Blockchain - Project LMB - Supply Chain

Project LMB is a minimum viable prototype for Luxury product tracking with Blockchain technology.

It considers three roles in the Luxury asset tracking in supply chain:
- Manufacturer
- Retailers - Distribution Market
- Final Customer - or Second-hand market

During the different supply chain process, the following information is tracked in the blockchain (as examples):
- Creation of asset (Luxury product)
- Change of owner: distribution and transfer from manufacturer to retailers
- Key product information
- Owner authorization (only current owner can transfer the ownership to another account)

## Pre-prerequisites
- Npm
- Truffle
- MetaMask with Chrome Browser

## Run

truffle compile

npm run dev

## Client mobile app

The directory LMB-Client-Mobile-APP is an separated web application prototype which allows client to check and display information recorded on the blockchain.

### Test Network deployment
An test LuxProduct (asset) is deployed at (Ropsten Test Network) address:

0x28Ab5e3e5659022c094Ddd3FE65003E221D8e14b

with transaction:

https://ropsten.etherscan.io/tx/0x4a72aa591dfbe98df07a34c8f5a67d8658471745c0c983b70e7054bc4b9d3636
