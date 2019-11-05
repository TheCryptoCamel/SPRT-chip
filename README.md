# SPIRIT chip Blockchain - SPRT chip - Alcohol Supply Chain

SPRT chip is a prototype for Alcohol product tracking with Blockchain technology.

SPRT chip is a blockchain based application that verifies the legitimacy of alcoholic products. Currently, 25.8% of bottles purchased worldwide are illicit. That is equal to one every four bottles are not the product that was intended to be bought. Counterfeiting is a worldwide problem that equals US $19.4 Billion dollars in sales a year.

Illicit alcohol affects many different branches from the companies brand to government taxation and finally the customer. There are five different categories that illicit alcohol falls into such as smuggling, counterfeit, tax leakage, illicit artisanal and surrogate alcohol. Because of this, it is both equally a fiscal and a health problem. 

It considers three roles in the Alcohol asset tracking in supply chain to insure illicit alcohol doesn't end up in consumers hands:
- Manufacturer
- Retailers - Distribution Market
- Final Customer - or Second-hand market

During the different supply chain process, the following information is tracked in the blockchain (as examples):
- Creation of asset (Beer, Wine or Spirit)
- Change of owner: distribution and transfer from manufacturer, distributor and to retailers
- Key product information
- Owner authorization (only current owner can transfer the ownership to another account)

## Pre-prerequisites
- Npm
- Truffle
- MetaMask with Chrome Browser

## Run

truffle compile

npm run dev

## Client mobile app (Original project fork will update soon)

The directory LMB-Client-Mobile-APP is an separated web application prototype which allows client to check and display information recorded on the blockchain.

### Test Network deployment
An test LuxProduct (asset) is deployed at (Ropsten Test Network) address:

0x28Ab5e3e5659022c094Ddd3FE65003E221D8e14b

with transaction:

https://ropsten.etherscan.io/tx/0x4a72aa591dfbe98df07a34c8f5a67d8658471745c0c983b70e7054bc4b9d3636
