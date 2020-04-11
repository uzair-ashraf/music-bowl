class ClientError {
  constructor(message, status, response) {
    this.message = message
    this.status = status
    this.response = response
    this.sendResponse()
  }

  sendResponse() {
    this.response
      .status(this.status)
      .json({
        message: this.message
      })
  }
}

module.exports = ClientError
