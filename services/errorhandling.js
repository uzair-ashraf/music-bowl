class ClientError {
  constructor(message, status) {
    this.message = message
    this.status = status
  }
}

class ServerError {
  constructor(message, status) {
    this.message = message
    this.status = status
  }
}

class AuthError {
  constructor() {
    this.message = 'Please login to access this resource'
    this.status = 401
  }
}

class FrontEndError {
  constructor(message) {
    this.message = message
  }
}

module.exports = {
  ClientError,
  ServerError,
  AuthError,
  FrontEndError
}
