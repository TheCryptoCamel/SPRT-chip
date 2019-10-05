App = {
  web3Provider: null,
  contracts: {},
  LuxProductArtifact:null,
  contractInstance:null,

  init: async function() {

    return await App.initWeb3();
  },

  initWeb3: async function() {
    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/c6ad3f2b7a324fbe9638907436e2f659');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },

  initContract: function() {
    $.getJSON('LuxProduct.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      LuxProductArtifact = data;
      App.contracts.LuxProduct = TruffleContract(LuxProductArtifact);
      web3.eth.defaultAccount = web3.eth.accounts[0];

      // var contractInstance = App.contracts.LuxProduct.at("0xEaEd79C0303CFc12BF2d9507E5481285eeeb1424");
      // console.log("initContract OK:",contractInstance.productName());

      // App.contracts.LuxProduct = web3.eth.contract(data.abi);

      // Set the provider for our contract
      App.contracts.LuxProduct.setProvider(App.web3Provider);

      console.log("initContract OK");

    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $('#bt_create').on('click', createProduct);
    $('#bt_send').on('click', disProduct);
    $('#bt_arrive').on('click', arrProduct);
    $('#bt_sell').on('click', arrProduct);
  }

};

function createProduct() {
  var pSerial = document.getElementById("pSerial").value;
  var pName = document.getElementById("pName").value;
  var pDesc = document.getElementById("pDesc").value;


  document.getElementById("demo").innerHTML = "done";

  console.log("Deploy contract...");

  contractInstance = App.contracts.LuxProduct.new({
    from: web3.eth.accounts[0],
    data:LuxProductArtifact.bytecode,
    arguments: [pSerial, pName, pName]
    // gas: 2500000
   }, function(err, myContract){
      if(!err) {
        if(!myContract.address) {
             console.log(myContract.transactionHash)
        } else {
             console.log(myContract.address)
        }
      }
    });

  // await App.contracts.LuxProduct.deploy({
  //   data: '0x' +LuxProductArtifact.bytecode,
  //   arguments: [pSerial, pName, pName]
  // }).send({
  //   from: web3.eth.accounts[0],
  //   gas: 1500000,
  //   gasPrice: '30000000000000'
  // })
  // .on('error', (error) => {
  //   console.log(error)
  // })
  // .on('transactionHash', (transactionHash) => {
  //   console.log(transactionHash)
  // })
  // .on('receipt', (receipt) => {
  //   // receipt will contain deployed contract address
  //   console.log(receipt)
  // })
  // .on('confirmation', (confirmationNumber, receipt) => {
  //   console.log(receipt)
  // });

  if (contractInstance.address) {
    console.log("Distribute Product: ContractInstance-",contractInstance.productId());
  }
}

function disProduct() {
  var retailId = document.getElementById("retailId").value;
  var pDepartureDate = document.getElementById("pDepartureDate").value;
  var destinationAdd = document.getElementById("destinationAdd").value;

  if (contractInstance.address) {
    console.log("Distribute Product: ContractInstance-",contractInstance);
  }
}

function arrProduct() {
  var arrivalDate = document.getElementById("arrivalDate").value;
  if (contractInstance.address) {
    console.log("ProductArrived: ContractInstance-",contractInstance);
  }
}

function sellProduct() {
  var saleDate = document.getElementById("saleDate").value;
  var customerId = document.getElementById("customerId").value;
  if (contractInstance.address) {
    console.log("Sell Product: ContractInstance-",contractInstance);
  }
}


$(function() {
  $(window).load(function() {
    App.init();
  });
});
