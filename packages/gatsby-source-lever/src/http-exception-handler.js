/**
 * Handles HTTP Exceptions (axios)
 *
 * @param {any} e
 */
function httpExceptionHandler(e) {
  const { status, statusText, data: { message } } = e.response
  if (message) {
    
  }
}

module.exports = httpExceptionHandler
