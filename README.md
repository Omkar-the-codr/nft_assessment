## README

### What's this?

Hey! This is a simple project to show how you can create and manage NFTs (Non-Fungible Tokens) with JavaScript. It lets you mint new NFTs, list them, and see how many you've made so far.

### What you need

- Just a bit of knowledge of JavaScript
- A text editor to write and run the code

### What it does

1. **Mint NFTs**: Make new NFTs with some info you give.
2. **List NFTs**: Show all the NFTs you made.
3. **Get Total Supply**: Tell you how many NFTs you have made in total.

### Code Breakdown

1. Variable to Hold NFTs

   ```javascript
   const mynfts = [];
   ```

   We start by making an array called `mynfts` where all our NFTs will be kept.

2. Mint NFT Function
```javascript
   function mintNFT(name, artist, owner, value) {
     const nft = {
       name: name,
       artist: artist,
       owner: owner,
       value: value,
     };
     mynfts.push(nft);
   }
   ```

   The `mintNFT` function takes four things: `name`, `artist`, `owner`, and `value`. It makes an NFT with this info and adds it to the `mynfts` array.

3. List NFTs Function

   ```javascript
   function listNFTs() {
     for (let i = 0; i < mynfts.length; i++) {
       const nftItem = mynfts[i];
       console.log(`NFT ${i + 1}:`);
       console.log(`Name: ${nftItem.name}`);
       console.log(`Artist: ${nftItem.artist}`);
       console.log(`Owner: ${nftItem.owner}`);
       console.log(`Value: ${nftItem.value}`);
       console.log('----------------------');
     }
   }
   ```

   The `listNFTs` function goes through the `mynfts` array and prints out the info for each NFT.

4. Get Total Supply Function

   ```javascript
   function getTotalSupply() {
     console.log(`Total NFTs: ${mynfts.length}`);
   }
   ```

   The `getTotalSupply` function tells you how many NFTs are in the `mynfts` array.

5. Running the Functions

   ```javascript
   mintNFT("Taj Mahal Sunset", "Artist Raj", "Collector Anil", "3 ETH");
   mintNFT("Ganges Flow", "Artist Priya", "Collector Rani", "4 ETH");
   mintNFT("Kerala Backwaters", "Artist Amit", "Collector Ravi", "2.5 ETH");

   listNFTs();
   getTotalSupply();
   ```

   These lines mint three new NFTs with Indian-themed names, show all NFTs, and print the total number of NFTs.

### How to Run

1. Copy the code into your text editor.
2. Save it as a `.js` file, like `nftExample.js`.
3. Open a terminal or command prompt.
4. Go to the folder where you saved the file.
5. Run it with Node.js by typing `node nftExample.js` and press Enter.

### Wrap up

This project gives you a basic idea of how to create and manage NFTs using JavaScript. You can add more features if you like, such as updating or deleting NFTs. Enjoy coding!
