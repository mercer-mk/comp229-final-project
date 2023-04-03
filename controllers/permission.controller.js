const config = require('../env.config');

const Master = config.permissionLevels.Master;
const Member = config.permissionLevels.Member;
const Surfer = config.permissionLevels.Surfer;

exports.minimumPermissionLevelRequired = (requiredPermissionLevel) => {
  return (req, res, next) => {
    const userPermissionLevel = req.user.permissionLevel;
    if (userPermissionLevel & requiredPermissionLevel) {
      return next();
    }
    return res.sendStatus(403);
  };
};

exports.onlySameUserOrAdminCanDoThisAction = (req, res, next) => {
  const userPermissionLevel = req.user.permissionLevel;
  const username = req.user.username;
  if (req.params && req.params.username && username === req.params.username) {
    return next();
  }
  if (userPermissionLevel & Master) {
    return next();
  }
  return res.sendStatus(403);
};

exports.sameUserCantDoThisAction = (req, res, next) => {
  const username = req.user.username;
  if (req.params.username === username) {
    return res.sendStatus(400);
  }
  return next();
};
