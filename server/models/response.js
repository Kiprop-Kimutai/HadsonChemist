/*var ApiResponse = new Object({
    response_code:Number,
    response_message:String
})

module.exports = ApiResponse;*/

function ApiResponse(resp_code,resp_message){
    this.response_code = resp_code;
    this.response_message =resp_message;
}
module.exports = ApiResponse;