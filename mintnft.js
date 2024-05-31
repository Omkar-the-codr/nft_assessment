// Create a variable to hold your NFT's
const mynfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, owner, value) {
  const nft = {
    name: name,
    artist: artist,
    owner: owner,
    value: value,
  };
  mynfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
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

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log(`Total NFTs: ${mynfts.length}`);
}

// Call your functions below this line
mintNFT("Taj Mahal Sunset", "Artist Raj", "Collector Anil", "3 ETH");
mintNFT("Ganges Flow", "Artist Priya", "Collector Rani", "4 ETH");
mintNFT("Kerala Backwaters", "Artist Amit", "Collector Ravi", "2.5 ETH");

listNFTs();
getTotalSupply();
