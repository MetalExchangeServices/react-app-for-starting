const ItemsAPI = [
    {
        id: 1,
        item_catagory: 'tech',
        item_name: 'laptop g81 ti 30 edition',
        item_price: 30,
        item_bitcoin_price: 0.00012,
        item_description: 'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.',
        item_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqlH-bUfhOqyeFyTbVccfxlNwsfm2anZjSg&usqp=CAU',
    },{
        id: 2,
        item_catagory: 'electronic',
        item_name: 'phlips bulb 60V 80W 10year warenty',
        item_price: 4,
        item_bitcoin_price: 0.0000011,
        item_description: 'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.',
        item_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcrs-oRZ14mB41ldlJ86E-Cd0S_Xfag8Few&usqp=CAU',
    },{
        id: 3,
        item_catagory: 'transport',
        item_name: 'Suziki SUV g70 120 hrs',
        item_price: 300,
        item_bitcoin_price: 0.0018,
        item_description: 'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.',
        item_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0L8JIyK3O1-I-IwCB2Bs1HgHSyZLFx3Rlg&usqp=CAU',
    },{
        id: 4,
        item_catagory: 'kichan',
        item_name: 'Water Bottle hard plastic pro',
        item_price: 5,
        item_bitcoin_price: 0.000015,
        item_description: 'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.',
        item_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTx_hDtNaxRpBv6dpKX_mCJxQRvlH1vvKxpg&usqp=CAU',
    },{
        id: 5,
        item_catagory: 'gamming',
        item_name: 'sony ps5 controller wireless',
        item_price: 25,
        item_bitcoin_price: 0.00066,
        item_description: 'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.',
        item_picture: 'data:image/jpeg;base64,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',
    },{
        id: 6,
        item_catagory: 'gamming',
        item_name: 'sony ps5 controller wireless',
        item_price: 25,
        item_bitcoin_price: 0.00066,
        item_description: 'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.',
        item_picture: 'data:image/jpeg;base64,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',
    }
]

export default ItemsAPI