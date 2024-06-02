// create a variable to hold your NFTs
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _bling) {
    const NFT = {
        name: _name,
        eyeColor: _eyeColor,
        shirtType: _shirtType,
        bling: _bling
    };
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Eye Color: \t" + NFTs[i].eyeColor);
        console.log("Shirt Type: \t" + NFTs[i].shirtType);
        console.log("Bling: \t\t" + NFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs Minted: " + NFTs.length);
}

// call your functions below this line
mintNFT("Tarun", "Black", "Shirt", "Gold Ring");
mintNFT("Tanisha", "Red", "Top", "Platinum Ring");
mintNFT("Rohit", "Black", "Hoodie", "Gold Ring");
mintNFT("Chiku", "Blue", "Shirt", "Gold chain");
listNFTs();
getTotalSupply();
