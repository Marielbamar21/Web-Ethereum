
# Web-Ethereum

Web-Ethereum is an API developed with Node.js and Express.js. This API is responsible for querying all transactions belonging to each new block created on the Ethereum network since its implementation, with the ability to work as a Data Ingestion service. Additionally, it provides the possibility to filter transactions by hash, block number, from, and to address, making it easier for the user to search for transactions.

## Table of Contents

1. [Installed Libraries](#Installed-Libraries)
2. [Pre-use instructions](#Pre-use-instructions)
3. [use](#use)

## Installed Libraries

cors: Version 2.8.5.

dotenv :  Version 16.4.1.

ethers : Version 6.10.0.

express : Version 4.18.2.

express-validator : Version 7.0.1.

mongodb-memory-server : Version 9.1.6.

mongoose : Version 8.1.1.

nodemon : Version 3.0.3.

## Pre-use instructions

    1.The API is configured to run on port 3000. If this port is busy, modify the environment variable PORT to a port that is available or free up the port

    2.As the API is coded to run in the development process, a MongoDB Memory Server was used to facilitate database instances. If you wish to connect the API to a remote database, modify the code to use the URI provided by the database and place it in the environment variable HOST_URI_DB.

    3.The API is connected to the Ethereum network through the Alchemy provider. Therefore, you must be registered with Alchemy and have an API key, which should be placed in the environment variable ALCHEMY_KEY for the API to function correctly.

## Use

After all project libraries have been successfully installed, the command to start the server is:

```
npm run dev
```
The encoded path for querys is:

```
GET /web-ethereum/transactions/
```

The filters are passed by querys. 

```
hash = value =>  The transaction hash is a unique identifier for a specific transaction on the Ethereum blockchain. Receives a valid hash that starts with the characters '0x' at the beginning of the string, and the rest of the string consists of hexadecimal values.
```


```
to = value => Represents the recipient address of the transaction. Receives a valid hash that starts with the characters '0x' at the beginning of the string, and the rest of the string consists of hexadecimal values.
```

```
from = value => Represents the sender address of the transaction. Receives a valid hash that starts with the characters '0x' at the beginning of the string, and the rest of the string consists of hexadecimal values.
```

```
blockNumber = value =>  Indicates the block number in which the transaction is included on the Ethereum blockchain. Receives a number.
```

The API is validated to only accept these filters.If other fields are used, a 400 error will be received