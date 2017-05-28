describe('unit -> utils', () => {

  const utils = solve('app/utils');

  it('should be a proxy to global objects', () => {
    expect(utils.json).to.eql(JSON);
    expect(utils.object).to.eql(Object);
    expect(utils.process).to.eql(process);
  });

});
