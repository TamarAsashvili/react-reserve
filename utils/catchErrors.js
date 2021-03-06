function catchErrors(error, displayError) {
    let errorMsg;
    if (error.response) {
        errorMsg = error.response.data;
        console.error("error response", errorMsg)
        //   for claudinary image aploads
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message;
        }
    } else if (error.request) {
        errorMsg = error.request;
        console.error("error request", errorMsg)
    } else {
        //something else heppend in making request
        errorMsg = error.message;
        console.error("error message", errorMsg)
    }

    displayError(errorMsg)
}


export default catchErrors;