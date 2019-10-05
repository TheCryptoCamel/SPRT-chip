pragma solidity >0.4.0 < 0.7.0;

    contract LuxProduct {

        enum ProductStatus{Created, Distribution, Sold}

        ProductStatus status=ProductStatus.Created; // default initial value

        string public productId;
        string public productName;
        string public description;

        uint public creationTime; // asset creation time on the chain

        string public retailerName; // the retailer

        string public arrivalTime; // asset arrival in stock of retailer
        string public soldTime; // time sold to customer


        address public owner; // asset owner

        event ProductCreated(string productName, address ownerAddress);
        event ProductDispatched(string productName, address srcAddress, address destAddress);

        event ProductArrived(string productName, address ownerAddress);
        event ProductTransfered(string productName, address srcAddress, address destAddress);
        event ProductSold(string productName, address srcAddress, address destAddress);

        constructor (string memory _productId, string memory _productName, string memory _description) public {
            owner=msg.sender;

            creationTime=now;
            productId=_productId;
            productName=_productName;
            description=_description;

            status=ProductStatus.Created;
        }

        function dispatch(address _toAddress, string memory _retailerName) public {
            require(msg.sender == owner); // dispatcher should be the current owner
            require(msg.sender != _toAddress); // cannot dispatch to himself
            require(status == ProductStatus.Created);

            retailerName=_retailerName;
            owner=_toAddress;

            // status changes to Distribution (market)
            status=ProductStatus.Distribution;
        }

        // Retailer confirme the asset arrive in stock
        function arrive(string memory _arrivalTime) public {
            require(msg.sender == owner);

            arrivalTime=_arrivalTime;

            emit ProductArrived(productName, msg.sender);
        }

        // Transfer assert from current owner to another
        function transfer(address _destAddress) public {
            require(msg.sender == owner);
            require(msg.sender != _destAddress);
            require(status==ProductStatus.Distribution);

            owner = _destAddress;

            emit ProductTransfered(productName,msg.sender,_destAddress);
        }

        // sell the asset to the new owner
        function sellTo(string memory _soldTime, address _destAddress) public{
            require(msg.sender == owner);
            require(msg.sender != _destAddress);

            owner=_destAddress;
            status=ProductStatus.Sold;
            soldTime=_soldTime;

            emit ProductSold(productName, msg.sender, _destAddress);
        }
    }
