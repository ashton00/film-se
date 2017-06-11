var request = require('superagent');
var expect = require('expect.js');

var port = 3333;
describe('back_end_user', function(){
  it('should respond to GET',function(){
    require
      .get('http://localhost:'+port)
      .end(function(res){
        expect(res.status).to.equal(200);
    })
  });
});