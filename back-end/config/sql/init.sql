-- ----------------------------
-- 应用表
-- ----------------------------
DROP TABLE IF EXISTS `apply`;
CREATE TABLE `apply` (
  id                  int             NOT NULL AUTO_INCREMENT,
  appName             varchar(255)    DEFAULT ''                      COMMENT '应用名',
  appType             varchar(255)    DEFAULT ''                      COMMENT '应用类型',
  publishStatus       int             DEFAULT 0                       COMMENT '发布状态',
  createTime          varchar(255)    DEFAULT ''                      COMMENT '创建时间',
  description         varchar(255)    DEFAULT ''                      COMMENT '描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4;

BEGIN;
-- INSERT INTO `apply` VALUES (1, '应用A', '1', 0, '2024-10-18 00:00:00');
COMMIT;
