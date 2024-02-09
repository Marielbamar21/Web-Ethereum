export const handleError = async (error, res) => {
  
    res.status(500).json({
      status: 'error',
      message: 'SERVER ERROR',
      error: error.toString()
    })
    console.log(error)
  }

  export const handleErrorValidator = async (error, res) => {
  
    res.status(500).json({
      status: 'error',
      message: 'SERVER ERROR : VALIDATOR ERROR',
      error: error.toString()
    })
    console.log(error);
  }
export const handleResponse = (res, status, menssage_resp, data = {}) => {
    console.log(status, " Status")
    console.log(menssage_resp, " Message")
    res.status(status).json({
      message: menssage_resp,
      data: data
    })
  }
  