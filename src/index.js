const Web3 = require('web3');
import abi from "../abi.js";

var Contract = require('web3-eth-contract');
Contract.setProvider(window.web3.currentProvider); //Web3.givenProvider
var contractAddress = "0xd80fF0F202B3CCbAd090107B58ac17895a5a697f";
let contract = new Contract(abi, contractAddress);



window.onload = function() {
    //variables
    let web3;
    let from;

    //elements
    const connectButton = document.getElementById('connect-metamask');
    const account = document.getElementById('account')
    const connectText = document.getElementById('connect-text')
    const mintButton = document.getElementById('mint-button')
    //Form
    
	//functions
    const connect = async function(){
        if (window.ethereum){
            try{
            await window.ethereum.request({method: 'eth_requestAccounts' });
            web3 = new Web3(window.ethereum);
            let accounts = await web3.eth.getAccounts();
            from = accounts[0];
            account.innerText = from;
            connectButton.style.display = 'none';
            connectText.innerText = "Your wallet : ";
			
			
        }catch(err){
        alert('Connection reject by user');
        }
        } 
        else{
            alert('Web3 provider is neccesary eg: Metamask');     
        }
    }

    const mint = async function (event){
        var to = 0x28df3d8c734D1ef31B7AB18c0133deb10BC7B9ED;
        var uri = "aaaa"
        contract.methods.safeMint(to, uri).send({from,})
	
    }

    connectButton.onclick = connect;
    mintButton.onclick = mint();
}