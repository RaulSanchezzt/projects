const MyContract = artifacts.require("myContract");

contract("Mi first smart contract", (accounts) => {
  it("First test - Correct destination value", async () => {
    const instance = await MyContract.new();
    const date = 2017;
    const destination = "Berlin";
    const price = 2000;
    await instance.save(date, destination, price);

    var result = await instance.consult(date);
    assert.equal(destination, result[0], "Incorrect destination");
  });

  it("Second Test - Correct price", async () => {
    const instance = await MyContract.new();
    const date = 2020;
    const destination = "London";
    const price = 1000;
    await instance.save(date, destination, price);

    var result = await instance.consult(date);
    assert.equal(price, result[1], "Incorrect price");
  });
});
