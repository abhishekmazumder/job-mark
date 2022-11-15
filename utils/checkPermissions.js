import { UnauthenticatedError } from '../errors/index.js'

const checkPermissions = (requestUser, resourceUserId) => {
  // if user is ADMIN
  // if(requestUser.role === "admin") return 

  if (requestUser.userId === resourceUserId.toString()) return
  throw new UnauthenticatedError('Not authorized to access this route')
}

export default checkPermissions
