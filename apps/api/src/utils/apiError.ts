class ApiError extends Error {
    statusCode: any;
    data: null;
    success: boolean;
    error: never[];
    constructor (
      statusCode: any,
      message="something went wrong",
      error = [],
      stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null
        this.message = message
        this.success = false;
        this.error = error;
        this.stack = stack;

        if(stack){
            this.stack = stack;

        }else{
            Error.captureStackTrace(this, this.constructor)

        }
    }
}

export {ApiError}