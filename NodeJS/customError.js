class CustomError extends Error{
    constructor(message){
        super(message),
        this.name='testErrorName'

    }
}

throw new CustomError('This is a custom error')