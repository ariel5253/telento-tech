-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema library
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema library
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `library` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `library` ;

-- -----------------------------------------------------
-- Table `library`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `library`.`persona` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `celular` VARCHAR(20) NULL DEFAULT NULL,
  `correo` VARCHAR(50) NULL DEFAULT NULL,
  `direccion` VARCHAR(50) NULL DEFAULT NULL,
  `edad` INT NULL DEFAULT NULL,
  `estado` BIT(1) NULL DEFAULT NULL,
  `nombre` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `library`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `library`.`usuario` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `contrasenia` VARCHAR(50) NOT NULL,
  `usuario` VARCHAR(50) NOT NULL,
  `persona_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UKi02kr8ui5pqddyd7pkm3v4jbt` (`usuario` ASC) VISIBLE,
  UNIQUE INDEX `UKc30a561f4mytkssjk76n0c1b3` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `FKlse7lqghmt3r1sp298ss9s5bc`
    FOREIGN KEY (`persona_id`)
    REFERENCES `library`.`persona` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
