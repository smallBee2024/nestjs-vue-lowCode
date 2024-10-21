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

drop table if exists `pages`;
create table `pages` (
  pageId              varchar(255)    NOT NULL                        COMMENT '页面id',
  pageName            varchar(255)    DEFAULT ''                      COMMENT '页面名',
  pageType            varchar(255)    DEFAULT ''                      COMMENT '页面类型',
  publishStatus       int             DEFAULT 0                       COMMENT '发布状态',
  createTime          varchar(255)    DEFAULT ''                      COMMENT '创建时间',
  description         varchar(255)    DEFAULT ''                      COMMENT '描述',
  applyId             int             DEFAULT 0                       COMMENT '应用id',
  PRIMARY KEY (`pageId`)
) ENGINE=InnoDB AUTO_INCREMENT=4;

BEGIN;
-- INSERT INTO `pages` VALUES (1, '页面A', '1', 0, '2024-10-18 00:00:00');
COMMIT;