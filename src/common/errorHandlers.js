export const handleError = async (error, res) => {
  
    res.status(500).json({
      status: 'error',
      message: 'SERVER ERROR',
      error: error.toString()
    })
    console.log(error)
  }

  export const handleErrorValidator = async (res,message,data) => {
  
    res.status(400).json({
      status: 'error',
      message: message,
      data : data
    })
    console.log(message);
  }


  
export const handleResponse = (res, status, menssage_resp, data = {}) => {
    console.log(status, " Status")
    console.log(menssage_resp, " Message")
    res.status(status).json({
      message: menssage_resp,
      data: data
    })
  }

export const handleResponseNotData = (res, status, menssage_resp) => {
    console.log(status, " Status")
    console.log(menssage_resp, " Message")
    res.status(status).json({
      message: menssage_resp
    })
  }
  