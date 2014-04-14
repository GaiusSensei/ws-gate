(function(gate, undefined) {
    var cardsetCode = "TEST/X00";
    if(gate.cardsets == null) gate.cardsets = [];
    if(gate.cardset == null) gate.cardset = {};
    if($.inArray(cardsetCode, gate.cardsets) == -1) {
        gate.cardsets.push(cardsetCode);
        // Cardset Properties
        gate.cardset[cardsetCode] = {};
        gate.cardset[cardsetCode].SetName = "Test Set";
        gate.cardset[cardsetCode].SetCode = "TEST";
        gate.cardset[cardsetCode].SetNum = "X00";
        gate.cardset[cardsetCode].SetSide = "Schwarz";
        gate.cardset[cardsetCode].Cards = [];
        // Cardset Cards
        gate.cardset[cardsetCode].Cards.push({
            CardName: "TEST TESTERTON",
            CardNo: "TEST/X00-001",
            Rarity: "RR",
            Color: "Yellow",
            Side: "Schwarz",
            Type: "Character",
            Level: "1",
            Cost: "0",
            Power: "4500",
            Soul: "1",
            Traits: ["Test1", "Test2"],
            Triggers: "",
            Flavor: "Test! Test! Test!",
            Effect: "[C] If you have 3 or more other ::Test1:: and/or ::Test2:: Characters, this gains +1000 Power."            
        });
        gate.cardset[cardsetCode].Cards.push({
            CardName: "TEST TESTERTON SR",
            CardNo: "TEST/X00-002",
            Rarity: "SR",
            Color: "Yellow",
            Side: "Schwarz",
            Type: "Character",
            Level: "2",
            Cost: "0",
            Power: "9000",
            Soul: "2",
            Traits: ["Test1", "Test2"],
            Triggers: "Soul",
            Flavor: "TEST! TEST! TEST!",
            Effect: "[C] If you have 3 or more other ::Test1:: and/or ::Test2:: Characters, this gains +1000 Power."            
        });
        gate.cardset[cardsetCode].Cards.push({
            CardName: "TEST!!",
            CardNo: "TEST/X00-003",
            Rarity: "U",
            Color: "Blue",
            Side: "Schwarz",
            Type: "Event",
            Level: "1",
            Cost: "0",
            Power: "0",
            Soul: "0",
            Traits: [],
            Triggers: "Soul",
            Flavor: "TEST ALL THE THINGS!",
            Effect: "Choose 1 of your Opponent's Level 3 or lower Characters. That Character does not Stand during your Opponent's next Stand Phase."
        });
        gate.cardset[cardsetCode].Cards.push({
            CardName: "Ougi: TEST.",
            CardNo: "TEST/X00-004",
            Rarity: "CC",
            Color: "Green",
            Side: "Schwarz",
            Type: "Climax",
            Level: "0",
            Cost: "0",
            Power: "0",
            Soul: "0",
            Traits: [],
            Triggers: "2 Soul",
            Flavor: "Final Tech! TEST!",
            Effect: "[C] All your Characters gain +1000 Power and +1 Soul."
        });
    };
}(window.gate = window.gate || {}));